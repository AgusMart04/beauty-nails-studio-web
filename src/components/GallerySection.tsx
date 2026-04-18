import { motion } from "framer-motion";
import { useState } from "react";
import GalleryLightbox from "./GalleryLightbox";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Diseño de uñas elegante" },
  { src: gallery2, alt: "Manicura francesa perfecta" },
  { src: gallery3, alt: "Nail art creativo" },
  { src: gallery4, alt: "Interior del salón Beauty & Nails" },
  { src: gallery5, alt: "Uñas acrílicas con decoración" },
  { src: gallery6, alt: "Pedicura profesional" },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Galería</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Nuestros trabajos y servicios
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-square"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-soft-black/0 group-hover:bg-soft-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="font-body text-sm text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox */}
      <GalleryLightbox
        images={images}
        currentIndex={lightboxIndex || 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrevious={() => setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : prev)}
        onNext={() => setLightboxIndex((prev) => prev !== null && prev < images.length - 1 ? prev + 1 : prev)}
      />
    </section>
  );
};

export default GallerySection;
