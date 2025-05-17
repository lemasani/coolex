import { MessageSquare } from "lucide-react";

const FloatingWhatsAppButton = () => {
  // ACTION REQUIRED: Replace with your actual WhatsApp number
  const WHATSAPP_NUMBER = "255XXXXXXXXX";
  const WHATSAPP_TEXT = encodeURIComponent(
    "Hello Coolex-Links! I'm interested in learning more about your products."
  );
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

  return (
    <a
      href={WHATSAPP_URL}
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
