// Lightweight inline SVG icons (no icon library needed → smaller bundle).
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Phone = (p) => (
  <svg {...base} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
export const Mail = (p) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);
export const Pin = (p) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
export const ArrowUp = (p) => (
  <svg {...base} {...p}><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></svg>
);
export const Chevron = (p) => (
  <svg {...base} width={14} height={14} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const Check = (p) => (
  <svg {...base} width={14} height={14} strokeWidth={3} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.06c0-5.24 4.27-9.5 9.52-9.5 2.54 0 4.93.99 6.73 2.79a9.44 9.44 0 0 1 2.78 6.72c0 5.24-4.27 9.5-9.51 9.5zm8.1-17.6A11.44 11.44 0 0 0 12.04.5C5.7.5.54 5.65.54 11.98c0 2.03.53 4.02 1.54 5.77L.5 23.5l5.9-1.55a11.46 11.46 0 0 0 5.64 1.44h.01c6.34 0 11.5-5.15 11.5-11.48 0-3.07-1.2-5.95-3.4-8.12z" />
  </svg>
);

export const social = {
  Facebook: (p) => (<svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p}><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.55.45-1 1-1z" /></svg>),
  Instagram: (p) => (<svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>),
  LinkedIn: (p) => (<svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p}><path d="M6.94 5A1.94 1.94 0 1 1 3 5a1.94 1.94 0 0 1 3.94 0zM7 8.5H3V21h4V8.5zm6.32 0H9.5V21h3.8v-6.57c0-3.56 4.64-3.85 4.64 0V21H22v-7.88c0-6.03-6.55-5.8-8.68-2.84V8.5z" /></svg>),
  YouTube: (p) => (<svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...p}><path d="M23 12s0-3.3-.42-4.88a2.53 2.53 0 0 0-1.78-1.79C19.24 5 12 5 12 5s-7.24 0-8.8.33a2.53 2.53 0 0 0-1.78 1.8C1 8.7 1 12 1 12s0 3.3.42 4.88a2.53 2.53 0 0 0 1.78 1.79C4.76 19 12 19 12 19s7.24 0 8.8-.33a2.53 2.53 0 0 0 1.78-1.8C23 15.3 23 12 23 12zM9.75 15.5v-7l6 3.5-6 3.5z" /></svg>),
};
