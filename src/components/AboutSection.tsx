import { motion } from "framer-motion";
import { Heart, Clock, Sparkles, Smile } from "lucide-react";
import aboutImage from "@/assets/about-nails.jpg";

const features = [
  { icon: Heart, label: "Trato cercano y profesional" },
  { icon: Sparkles, label: "Resultados duraderos" },
  { icon: Smile, label: "Asesoramiento personalizado" },
  { icon: Clock, label: "Gama completa de servicios" },
];

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Beauty & Nails - Tu lugar para realizar tu belleza"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Sobre nosotros</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 leading-tight">
              Tu lugar para realizar tu belleza
            </h2>
            <div className="gold-divider-left" />

            <p className="font-body text-muted-foreground leading-relaxed mb-4 text-base">
              En Beauty & Nails somos tu lugar para realizar tu belleza. Ofrecemos una gama completa de servicios
              profesionales que van desde uñas acrílicas y semipermanentes hasta tratamientos corporales avanzados.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 text-base">
              Nos caracterizamos por el trato cercano, el asesoramiento personalizado y resultados duraderos en todos
              nuestros tratamientos: uñas, cejas, micropigmentación, peinados, maquillaje y tratamientos estéticos.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-nude-pink flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/10">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-body text-sm text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
