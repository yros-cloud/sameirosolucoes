import { WHATSAPP_URL } from "@/lib/site-data";

export { WHATSAPP_URL };

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition-transform hover:scale-110"
      style={{ background: "linear-gradient(135deg, #22c35e, #128c47)" }}
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: "#22c35e" }} aria-hidden />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.29-.14-1.7-.84-1.97-.93-.26-.1-.46-.14-.65.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.31-1.42-.85-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.56-.89-2.13-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.42 1.03 2.79 1.17 2.98.14.19 2.02 3.08 4.91 4.32.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.33zM16.02 5.33h-.01C9.94 5.33 5 10.27 5 16.35c0 2.39.78 4.69 2.18 6.6L5.4 28.67l5.92-1.74c1.85 1.01 3.92 1.54 6 1.54h.01c6.07 0 11.01-4.94 11.01-11.02 0-2.94-1.15-5.7-3.23-7.78-2.07-2.08-4.83-3.34-7.78-3.34z" />
      </svg>
    </a>
  );
}
