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
              Tu centro de belleza de confianza en el centro de la ciudad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-nude-pink mb-3">Contacto</h4>
            <div className="space-y-2">
              <a href="https://api.whatsapp.com/send/?phone=34624537879&text=Hola%21+Me+gusto+tu+demo+de+salon+de+belleza&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-nude-pink/60 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                +34 624 53 78 79
              </a>
              <p className="flex items-center gap-2 font-body text-sm text-nude-pink/60">
                <MapPin className="w-4 h-4" />
                Calle Principal, 123, 28001 Madrid
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-nude-pink mb-3">Síguenos</h4>
            <a
              href="https://www.instagram.com/beautynails_demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-nude-pink/60 hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @beautynails_demo
            </a>
          </div>
        </div>

        <div className="gold-divider" />
        <p className="font-body text-nude-pink/40 text-xs flex items-center justify-center gap-1 text-center">
          © {new Date().getFullYear()} Beauty & Nails. Todos los derechos reservados. Hecho con <Heart className="w-3 h-3 text-primary" /> para tu belleza.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
