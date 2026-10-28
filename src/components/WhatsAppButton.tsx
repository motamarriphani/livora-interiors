import { MessageCircle } from 'lucide-react';
import { whatsappGreetingUrl } from '../utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappGreetingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[clamp(16px,3vw,24px)] right-[clamp(16px,3vw,24px)] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_20px_-6px_rgba(0,0,0,.3)] transition-transform hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
