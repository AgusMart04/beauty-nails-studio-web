import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Hacen unas uñas muy bien hechas y bonitas, además de un trato buenísimo.",
    author: "María G.",
  },
  {
    text: "Estoy encantada con ellas y con su profesionalidad. Siempre salgo feliz.",
    author: "Laura P.",
  },
  {
    text: "Servicio 10/10, puedes venir sin cita. Siempre quedan perfectas.",
    author: "Ana R.",
  },
  {
    text: "Mis uñas se mantienen perfectas durante semanas. Las mejores de Alicante.",
    author: "Carmen S.",
  },
];

const TestimonialsSection = () => {
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
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Opiniones</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <div className="gold-divider" />
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-body text-base font-semibold text-foreground">4,7/5</span>
            <span className="font-body text-sm text-muted-foreground">· +100 reseñas</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/60 rounded-2xl p-6 relative group hover:shadow-card transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-3" />
              <p className="font-body text-sm text-foreground leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                — {t.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
