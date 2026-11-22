'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send } from 'lucide-react';
import { validateLead, type LeadErrors, type LeadField } from '../lib/leadValidation';

// Name / phone / email form. Posts to /api/lead, then goes to /thank-you.
export default function LeadForm({ idPrefix = 'f', onSuccess }: { idPrefix?: string; onSuccess?: () => void }) {
  const router = useRouter();
  const [formState, setFormState] = useState({ name: '', phone: '', email: '' });
  const [formError, setFormError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const startedAt = useRef(Date.now()); // used by the server to spot instant bot submissions
  const [trap, setTrap] = useState(''); // hidden honeypot, real visitors never fill it
  const [errors, setErrors] = useState<LeadErrors>({});
  const [touched, setTouched] = useState<Partial<Record<LeadField, boolean>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name } = formState;
    const errs = validateLead(formState);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true });
    const firstBad = (['name', 'phone', 'email'] as const).find((k) => errs[k]);
    if (firstBad) {
      setFormError(null);
      document.getElementById(`${idPrefix}-${firstBad}`)?.focus();
      return;
    }
    setFormError(null);
    setSending(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, company_website: trap, startedAt: startedAt.current }),
      });
      if (res.status === 429) {
        const data = await res.json().catch(() => ({}));
        setFormError(data.error || 'Too many attempts. Please try again later.');
        setSending(false);
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFormError(data.error || 'Something went wrong. Please try again.');
        setSending(false);
        return;
      }
    } catch {
      setFormError('Network error. Please check your connection and try again.');
      setSending(false);
      return;
    }
    onSuccess?.();
    router.push(`/thank-you?name=${encodeURIComponent(name.trim().split(' ')[0])}`);
  };

  const fields = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', auto: 'name', mode: 'text', max: 80 },
    { key: 'phone', label: 'Phone number', type: 'tel', placeholder: '98765 43210', auto: 'tel', mode: 'tel', max: 16 },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', auto: 'email', mode: 'email', max: 200 },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="relative space-y-4" noValidate>
      {formError && (
        <div role="alert" className="p-3 rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-sm">
          {formError}
        </div>
      )}
      {/* Honeypot: hidden from people and screen readers, bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[10000px] w-px h-px overflow-hidden">
        <label htmlFor={`${idPrefix}-company_website`}>Company website</label>
        <input
          id={`${idPrefix}-company_website`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
        />
      </div>
      {fields.map((f) => {
        const id = `${idPrefix}-${f.key}`;
        const err = touched[f.key] ? errors[f.key] : undefined;
        return (
          <div key={f.key}>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">
              {f.label}
            </label>
            <div className={f.key === 'phone' ? 'relative' : undefined}>
              {f.key === 'phone' && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500 pointer-events-none">+91</span>
              )}
              <input
                id={id}
                name={f.key}
                type={f.type}
                inputMode={f.mode}
                autoComplete={f.auto}
                maxLength={f.max}
                required
                aria-invalid={!!err}
                aria-describedby={err ? `${id}-error` : undefined}
                placeholder={f.placeholder}
                value={formState[f.key]}
                onChange={(e) => {
                  const value = f.key === 'phone' ? e.target.value.replace(/[^\d\s+()-]/g, '') : e.target.value;
                  const next = { ...formState, [f.key]: value };
                  setFormState(next);
                  if (touched[f.key]) setErrors(validateLead(next));
                }}
                onBlur={() => {
                  if (!formState[f.key]) return; // don't nag on an untouched empty field
                  setTouched((t) => ({ ...t, [f.key]: true }));
                  setErrors(validateLead(formState));
                }}
                className={`w-full h-12 ${f.key === 'phone' ? 'pl-14' : 'pl-4'} pr-4 rounded-[10px] bg-slate-50 border text-slate-900 placeholder:text-slate-400 text-base focus:bg-white focus:outline-none transition-colors ${
                  err ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-[#FF751F]'
                }`}
              />
            </div>
            {err && (
              <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
                {err}
              </p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        disabled={sending}
        className="w-full h-12 mt-2 rounded-[10px] bg-[#1f1b16] hover:bg-[#2e2922] active:scale-[0.99] disabled:opacity-60 disabled:cursor-wait text-white font-medium text-[15px] transition-[background-color,transform] flex items-center justify-center gap-2 group"
      >
        {sending ? 'Sending…' : 'Request a call back'}
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
