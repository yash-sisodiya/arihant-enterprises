import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../config/constants';

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    const message = 'Hello! I have a question about your products/services.';
    window.open(`https://wa.me/${CONTACT.phone.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 flex items-center justify-center backdrop-blur-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;