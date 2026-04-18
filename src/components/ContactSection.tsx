import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Instagram, Navigation, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Contacto</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Visítanos o llámanos
          </h2>
          <div className="gold-divider" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            También puedes venir sin cita, atendemos por orden de llegada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-nude-pink flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Dirección</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Calle Principal, 123<br />Centro de la Ciudad<br />28001 Madrid
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-nude-pink flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Teléfono</h3>
                <a href="https://api.whatsapp.com/send/?phone=34624537879&text=Hola%21+Me+gusto+tu+demo+de+salon+de+belleza&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                  +34 624 53 78 79
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-nude-pink flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Horario</h3>
                <div className="font-body text-sm text-muted-foreground space-y-1">
                  <p>Lunes a Jueves: 10:00–14:00 / 17:00–21:00</p>
                  <p>Viernes: 10:00–21:00</p>
                  <p>Sábado: 10:00–20:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=34624537879&text=Hola%21+Me+gusto+tu+demo+de+salon+de+belleza&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/search/salones+de+belleza+/@38.3620893,-0.5415219,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border hover:border-gold text-foreground px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
              <a
                href="https://www.instagram.com/beautynails_demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border hover:border-gold text-foreground px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card min-h-[400px]"
          >
            <iframe
              title="Ubicación Beauty & Nails Centro de Belleza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1845378337435!2d-3.705790084604484!3d40.41677537936556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjAiTiAzwrA0MjQwLjAiRQ!5e0!3m2!1ses-419!2ses!4v1678886400000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
