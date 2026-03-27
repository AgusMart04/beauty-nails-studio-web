import { motion } from "framer-motion";
import { Hand, Footprints, Sparkles, Gem, Brush, Palette, Heart, Layers, Eye, Scissors, Users, Zap, Droplets } from "lucide-react";

const serviceCategories = [
  {
    category: "Uñas",
    services: [
      { icon: Gem, title: "Uñas acrílicas", description: "Extensiones acrílicas con acabado natural o artístico. Máxima duración y resistencia." },
      { icon: Sparkles, title: "Semipermanente", description: "Esmaltado de larga duración con brillo intenso y perfecta cobertura hasta 4 semanas." },
      { icon: Layers, title: "Uñas de gel", description: "Construcción y esmaltado en gel para un acabado brillante, resistente y duradero." },
      { icon: Palette, title: "Otras técnicas", description: "Kapping, structured manicure y las últimas tendencias en cuidado de uñas." },
    ],
  },
  {
    category: "Pedicura",
    services: [
      { icon: Heart, title: "Pedicura spa", description: "Experiencia relajante con exfoliación, masaje, tratamiento hidratante y acabado impecable." },
      { icon: Footprints, title: "Pedicura estética", description: "Cuidado completo de pies con limado, cutículas, hidratación y esmaltado profesional." },
    ],
  },
  {
    category: "Cejas",
    services: [
      { icon: Brush, title: "Diseño de cejas", description: "Diseño profesional adaptado a tu tipo de rostro para realzar tu mirada natural." },
      { icon: Scissors, title: "Depilación de cejas", description: "Depilación precisa con cera o hilo para definir la forma perfecta de tus cejas." },
    ],
  },
  {
    category: "Micropigmentación",
    services: [
      { icon: Eye, title: "Micropigmentación de cejas", description: "Tatuaje cosmético para cejas perfectas con efecto pelo a pelo y duración prolongada." },
    ],
  },
  {
    category: "Peinados",
    services: [
      { icon: Users, title: "Peinados para eventos", description: "Peinados elegantes y sofisticados para bodas, fiestas y ocasiones especiales." },
      { icon: Sparkles, title: "Ocasiones especiales", description: "Estilos únicos y personalizados para cualquier evento importante en tu vida." },
    ],
  },
  {
    category: "Maquillaje",
    services: [
      { icon: Palette, title: "Maquillaje profesional", description: "Maquillaje profesional para eventos, fotos o simplemente para lucir radiante." },
    ],
  },
  {
    category: "Tratamientos Corporales",
    services: [
      { icon: Zap, title: "Control de peso", description: "Programas personalizados de control de peso con seguimiento profesional." },
      { icon: Heart, title: "Masajes reductivos", description: "Masajes especializados para reducir medidas y modelar tu silueta." },
      { icon: Layers, title: "Maderoterapia", description: "Tratamiento con maderas para reafirmar, reducir celulitis y tonificar." },
      { icon: Droplets, title: "Radiofrecuencia", description: "Tratamiento estético no invasivo para reafirmar y rejuvenecer la piel." },
      { icon: Zap, title: "Ultracavitación", description: "Tratamiento avanzado para eliminación de grasa localizada (Previa cita)." },
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
            Todos nuestros servicios
          </h2>
          <div className="gold-divider" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Tu lugar para realizar tu belleza con tratamientos profesionales de uñas, cejas, maquillaje y más
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
            href="https://wa.me/34697377835?text=Hola%20Beauty%20%26%20Nails,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios%20y%20disponibilidad.%20Gracias"
            target="_blank"
            rel="noopener noreferrer"
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
