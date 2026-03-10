import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import humidorImg from "@/assets/humidor.jpg";

const cigars = [
  { name: "The Sovereign", origin: "Nicaragua", wrapper: "Habano Oscuro", strength: "Full", age: "7 Years" },
  { name: "Midnight Reserve", origin: "Dominican Republic", wrapper: "Connecticut Broadleaf", strength: "Medium-Full", age: "5 Years" },
  { name: "Crown Imperial", origin: "Cuba", wrapper: "Corojo", strength: "Medium", age: "10 Years" },
];

const HumidorCollection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Vault</p>
          <h2 className="serif text-4xl md:text-5xl font-light text-cream mb-6">The Humidor Collection</h2>
          <div className="gold-line mb-8" />
          <p className="sans text-sm font-light text-smoke leading-relaxed mb-12">
            Each cigar in our collection is hand-selected by our Master Blender, aged to perfection
            in Spanish cedar humidors maintained at precisely 70% humidity and 70°F.
          </p>

          <div className="space-y-6">
            {cigars.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                className="border-l-2 border-amber/30 pl-6 py-3 hover:border-amber transition-colors duration-500"
              >
                <h3 className="serif text-xl text-cream mb-1">{c.name}</h3>
                <div className="flex flex-wrap gap-4 sans text-xs tracking-wider uppercase text-smoke">
                  <span>{c.origin}</span>
                  <span className="text-amber">•</span>
                  <span>{c.wrapper}</span>
                  <span className="text-amber">•</span>
                  <span>{c.strength}</span>
                  <span className="text-amber">•</span>
                  <span>{c.age}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative"
        >
          <img src={humidorImg} alt="Premium cedar humidor with hand-rolled cigars" className="w-full aspect-square object-cover" loading="lazy" />
          <div className="absolute inset-0 border border-amber/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HumidorCollection;
