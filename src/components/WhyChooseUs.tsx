import { motion } from "framer-motion";
import { Award, Clock, CalendarCheck, BadgePercent } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Alta profesionalidad",
    description: "Técnicas actualizadas y formación continua para un resultado siempre impecable.",
  },
  {
    icon: CalendarCheck,
    title: "Atención sin cita",
    description: "Ven cuando quieras, atendemos por orden de llegada sin necesidad de reservar.",
  },
  {
    icon: Clock,
    title: "Resultados duraderos",
    description: "Usamos productos de primera calidad para que tus uñas luzcan perfectas semanas.",
  },
  {
    icon: BadgePercent,
    title: "Calidad-precio",
    description: "Servicio premium a precios justos. La mejor relación calidad-precio de Alicante.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">¿Por qué elegirnos?</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            La diferencia está en los detalles
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-nude-pink flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
