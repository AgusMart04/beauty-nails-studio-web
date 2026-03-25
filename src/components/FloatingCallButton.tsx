import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+34697377835"
      className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Llamar ahora"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
