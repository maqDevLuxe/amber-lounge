import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import loungeImg from "@/assets/lounge-interior.jpg";
import fullLoungeImg from "@/assets/full-lounge.jpg";
import humidorImg from "@/assets/humidor.jpg";
import whiskeyImg from "@/assets/whiskey.jpg";

const images = [
  { src: loungeImg, label: "The Private Parlour", alt: "Luxury leather lounge interior" },
  { src: fullLoungeImg, label: "The Grand Hall", alt: "Full leather lounge with chandelier" },
  { src: humidorImg, label: "The Cedar Room", alt: "Humidor collection" },
  { src: whiskeyImg, label: "The Tasting Bar", alt: "Premium whiskey on leather" },
];

const LoungeAmbiance = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="lounge" className="section-padding bg-charcoal-deep" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Sanctuary</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">Lounge Ambiance</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="relative aspect-[3/4] overflow-hidden group"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 transition-opacity duration-700 group-hover:bg-background/20" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hoveredIdx === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <p className="sans text-xs tracking-[0.3em] uppercase text-amber">{img.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoungeAmbiance;
