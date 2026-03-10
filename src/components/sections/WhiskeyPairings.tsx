import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import whiskeyImg from "@/assets/whiskey.jpg";

const pairings = [
  { whiskey: "Macallan 25 Year", cigar: "The Sovereign", notes: "Dried fruit, oak, dark chocolate" },
  { whiskey: "Yamazaki 18 Year", cigar: "Midnight Reserve", notes: "Mizunara oak, honey, cinnamon" },
  { whiskey: "Glenfiddich 30 Year", cigar: "Crown Imperial", notes: "Marmalade, toasted almonds, gentle smoke" },
];

const WhiskeyPairings = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="whiskey" className="section-padding bg-charcoal-deep" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="order-2 lg:order-1"
        >
          <img src={whiskeyImg} alt="Crystal whiskey glass on leather" className="w-full aspect-square object-cover" loading="lazy" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Pairing</p>
          <h2 className="serif text-4xl md:text-5xl font-light text-cream mb-6">Premium Whiskey</h2>
          <div className="gold-line mb-8" />
          <p className="sans text-sm font-light text-smoke leading-relaxed mb-12">
            Our sommelier curates each pairing to amplify the character of both cigar and spirit—
            a dialogue between smoke and amber.
          </p>

          <div className="space-y-8">
            {pairings.map((p, i) => (
              <motion.div
                key={p.whiskey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="border-l-2 border-amber/30 pl-6 py-2 hover:border-amber transition-colors duration-500"
              >
                <h3 className="serif text-lg text-cream">{p.whiskey}</h3>
                <p className="sans text-xs tracking-wider uppercase text-amber mb-1">paired with {p.cigar}</p>
                <p className="sans text-xs text-smoke italic">{p.notes}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhiskeyPairings;
