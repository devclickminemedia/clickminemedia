// Shared lead-form validation, used by the client form and the /api/lead route.

export type LeadField = 'name' | 'phone' | 'email';
export type LeadErrors = Partial<Record<LeadField, string>>;

/**
 * Normalises an Indian mobile number to its 10 digits.
 * Accepts "98765 43210", "+91 98765-43210", "091 9876543210", "0 9876543210".
 * Returns null if it isn't a valid Indian mobile (10 digits starting 6-9).
 */
export function normaliseIndianMobile(input: string): string | null {
  if (!/^[\d\s()+-]*$/.test(input)) return null;
  let digits = input.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  else if (digits.length === 13 && digits.startsWith('091')) digits = digits.slice(3);
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  if (!/^[6-9]\d{9}$/.test(digits)) return null;
  if (/^(\d)\1{9}$/.test(digits)) return null; // 9999999999 etc.
  return digits;
}

const EMAIL_RE = /^[a-z0-9](?:[a-z0-9._%+-]{0,62}[a-z0-9])?@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/i;

export function validateName(v: string): string | undefined {
  const s = v.trim().replace(/\s+/g, ' ');
  if (!s) return 'Please enter your name.';
  if (s.length < 2) return 'Name must be at least 2 characters.';
  if (s.length > 80) return 'Name must be 80 characters or fewer.';
  if (!/^[\p{L}\p{M} .'-]+$/u.test(s)) return 'Name can only contain letters, spaces, dots, hyphens and apostrophes.';
  if (!/\p{L}.*\p{L}/u.test(s)) return 'Please enter a real name.';
}

export function validatePhone(v: string): string | undefined {
  if (!v.trim()) return 'Please enter your phone number.';
  if (!normaliseIndianMobile(v)) return 'Enter a valid 10-digit Indian mobile number (starting with 6, 7, 8 or 9).';
}

export function validateEmail(v: string): string | undefined {
  const s = v.trim();
  if (!s) return 'Please enter your email address.';
  if (s.length > 200 || !EMAIL_RE.test(s) || s.includes('..')) return 'Please enter a valid email address, like name@example.com.';
}

export function validateLead(v: Record<LeadField, string>): LeadErrors {
  const errors: LeadErrors = {};
  const n = validateName(v.name);
  const p = validatePhone(v.phone);
  const e = validateEmail(v.email);
  if (n) errors.name = n;
  if (p) errors.phone = p;
  if (e) errors.email = e;
  return errors;
}
