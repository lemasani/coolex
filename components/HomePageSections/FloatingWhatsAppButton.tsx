import { MessageSquare } from "lucide-react";
import { generateWhatsAppUrl, whatsAppMessages } from "@/lib/whatsapp";

const FloatingWhatsAppButton = () => {
  const whatsAppUrl = generateWhatsAppUrl(whatsAppMessages.general);

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default FloatingWhatsAppButton;