/**
 * EmailJS — defaults match your dashboard. Override with `.env` if needed:
 *   VITE_EMAILJS_PUBLIC_KEY  VITE_EMAILJS_SERVICE_ID  VITE_EMAILJS_TEMPLATE_ID
 * https://dashboard.emailjs.com/admin
 */
export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "lWehTZAsuWQeLqKwN";

export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_y518atj";

export const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_h8c27t2";
