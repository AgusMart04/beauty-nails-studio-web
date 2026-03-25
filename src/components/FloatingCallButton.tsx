import { MessageCircle } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="https://wa.me/34697377835?text=Hola%20Beauty%20%26%20Nails,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20y%20disponibilidad.%20Gracias"
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
