import { motion } from "framer-motion";
import { Hand, Footprints, Sparkles, Gem, Brush, Palette, Heart, Layers } from "lucide-react";

const serviceCategories = [
  {
    category: "Manos",
    services: [
      { icon: Hand, title: "Manicura clásica", description: "Limado, cutículas, hidratación y esmaltado perfecto para unas manos cuidadas." },
      { icon: Gem, title: "Uñas acrílicas", description: "Extensiones acrílicas con acabado natural o artístico. Máxima duración y resistencia." },
      { icon: Sparkles, title: "Uñas de gel", description: "Construcción y esmaltado en gel para un acabado brillante, resistente y duradero." },
      { icon: Layers, title: "Extensiones de uñas", description: "Alarga y moldea tus uñas con técnicas profesionales para un look impecable." },
      { icon: Palette, title: "Nail art / Decoración", description: "Diseños exclusivos, decoración a mano y las últimas tendencias para cada estilo." },
    ],
  },
  {
    category: "Pies",
    services: [
      { icon: Footprints, title: "Pedicura clásica", description: "Cuidado completo de pies con exfoliación, hidratación y esmaltado profesional." },
      { icon: Heart, title: "Pedicura spa", description: "Experiencia relajante con masaje, tratamiento hidratante y acabado impecable." },
    ],
  },
  {
    category: "Combinados",
    services: [
      { icon: Brush, title: "Manos + Pies", description: "El pack completo para lucir perfecta de manos a pies con descuento especial." },
    ],
  },
];

const ServicesSection = () => {
  let globalIndex = 0;

  return (
    <section id="servicios" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Nuestros servicios</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Lo que ofrecemos
          </h2>
          <div className="gold-divider" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Cada servicio está pensado para ofrecerte la mejor experiencia y resultados impecables
          </p>
        </motion.div>

        {/* Service Categories */}
        {serviceCategories.map((cat) => (
          <div key={cat.category} className="mb-12 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-gold inline-block" />
              {cat.category}
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service) => {
                const idx = globalIndex++;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                    className="group relative bg-background rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 cursor-default"
                  >
                    <div className="w-14 h-14 rounded-xl bg-nude-pink flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                      <service.icon className="w-6 h-6 text-primary transition-colors" />
                    </div>

                    <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/20 transition-colors duration-500 pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="tel:+34697377835"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-body font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Reserva tu cita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
