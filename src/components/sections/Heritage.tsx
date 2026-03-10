import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const affiliations = [
  { name: "The Royal Tobacco Society", year: "1887" },
  { name: "Habana Cigar Guild", year: "1923" },
  { name: "The Mayfair Gentlemen's Circle", year: "1952" },
  { name: "International Sommelier Association", year: "1971" },
];

const Heritage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" className="section-padding bg-charcoal-deep relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">Since 1887</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">Heritage & Affiliations</h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="sans text-sm font-light text-smoke max-w-2xl mx-auto leading-relaxed">
            For over a century, Bespoke has been the silent custodian of gentlemanly tradition—
            a lineage woven through the finest tobacco houses and private societies the world over.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {affiliations.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i, ease: "easeOut" }}
              className="text-center p-8 border border-border hover:border-amber/30 transition-colors duration-700"
            >
              <p className="serif text-3xl text-amber mb-3">{a.year}</p>
              <p className="sans text-xs tracking-[0.2em] uppercase text-smoke">{a.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heritage;
