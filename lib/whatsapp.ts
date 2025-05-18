/**
 * WhatsApp utility functions for consistent messaging across the application
 */

// Get WhatsApp number from environment variables
export const getWhatsAppNumber = (): string => {
  return process.env.VITE_WHATSAPP_NUMBER || "818048079472";
};

// Generate WhatsApp chat URL with a message
export const generateWhatsAppUrl = (message: string): string => {
  const number = getWhatsAppNumber();
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

// Open WhatsApp chat in a new tab
export const openWhatsAppChat = (message: string): void => {
  const url = generateWhatsAppUrl(message);
  window.open(url, "_blank");
};

// Common predefined messages
export const whatsAppMessages = {
  general: "Hello Coolex-Links! I'm interested in learning more about your products.",
  productInquiry: (productName: string, category: string): string => 
    `Hello Coolex-Links! I'm interested in the ${productName} from your ${category} category.`,
  categoryInquiry: (categoryName: string): string => 
    `Hello Coolex-Links! I'm interested in your ${categoryName} products and would like to know more.`
};
