'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send } from 'lucide-react';

// Name / phone / email form. Posts to /api/lead, then goes to /thank-you.
export default function LeadForm({ idPrefix = 'f', onSuccess }: { idPrefix?: string; onSuccess?: () => void }) {
  const router = useRouter();
  const [formState, setFormState] = useState({ name: '', phone: '', email: '' });
  const [formError, setFormError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email } = formState;
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setFormError('Please fill in your name, phone number and email.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 7) {
      setFormError('Please enter a valid phone number.');
      return;
    }
    setFormError(null);
    setSending(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
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
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', auto: 'name' },
    { key: 'phone', label: 'Phone number', type: 'tel', placeholder: '+91 98765 43210', auto: 'tel' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', auto: 'email' },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {formError && (
        <div role="alert" className="p-3 rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-sm">
          {formError}
        </div>
      )}
      {fields.map((f) => (
        <div key={f.key}>
          <label htmlFor={`${idPrefix}-${f.key}`} className="block text-sm font-medium text-slate-700 mb-2">
            {f.label}
          </label>
          <input
            id={`${idPrefix}-${f.key}`}
            type={f.type}
            autoComplete={f.auto}
            required
            placeholder={f.placeholder}
            value={formState[f.key]}
            onChange={(e) => setFormState({ ...formState, [f.key]: e.target.value })}
            className="w-full h-12 px-4 rounded-[10px] bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-base focus:border-[#FF751F] focus:bg-white focus:outline-none transition-colors"
          />
        </div>
      ))}
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
