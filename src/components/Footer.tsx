import { Heart, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-soft-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-medium mb-3">
              <span className="text-nude-pink">Beauty</span>
              <span className="text-gold"> & </span>
              <span className="text-nude-pink">Nails</span>
            </p>
            <p className="font-body text-nude-pink/60 text-sm leading-relaxed">
              Tu salón de uñas de confianza en Las Carolinas, Alicante.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-nude-pink mb-3">Contacto</h4>
            <div className="space-y-2">
              <a href="tel:+34697377835" className="flex items-center gap-2 font-body text-sm text-nude-pink/60 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                +34 697 37 78 35
              </a>
              <p className="flex items-center gap-2 font-body text-sm text-nude-pink/60">
                <MapPin className="w-4 h-4" />
                C. de Góngora, 6, 03012 Alicante
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-nude-pink mb-3">Síguenos</h4>
            <a
              href="https://www.instagram.com/beautynails_alicante"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-nude-pink/60 hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @beautynails_alicante
            </a>
          </div>
        </div>

        <div className="gold-divider" />
        <p className="font-body text-nude-pink/40 text-xs flex items-center justify-center gap-1 text-center">
          © {new Date().getFullYear()} Beauty & Nails. Todos los derechos reservados. Hecho con <Heart className="w-3 h-3 text-primary" /> en Alicante.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
