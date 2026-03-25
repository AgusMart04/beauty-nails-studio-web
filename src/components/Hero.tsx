import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Salón de uñas Beauty & Nails en Alicante"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soft-black/80 via-soft-black/60 to-soft-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Beauty & Nails — Alicante
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-primary-foreground mb-6"
        >
          Salón de uñas en Alicante que cuida cada detalle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-nude-pink max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Manicura, pedicura y uñas acrílicas con resultados duraderos y un trato cercano en Las Carolinas
        </motion.p>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 5 ? "text-gold fill-gold" : "text-gold/30"}`}
              />
            ))}
          </div>
          <span className="font-body text-sm text-primary-foreground/80">
            4,7/5 — más de 100 reseñas
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+34697377835"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Llamar ahora
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 border border-gold-light/40 text-primary-foreground/90 hover:bg-primary-foreground/10 px-8 py-4 rounded-full font-body font-medium text-base transition-all duration-300 hover:border-gold-light"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold-light"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
