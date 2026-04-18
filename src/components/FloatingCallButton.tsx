import { MessageCircle } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=34624537879&text=Hola%21+Me+gusto+tu+demo+de+salon+de+belleza&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Escribir en WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
