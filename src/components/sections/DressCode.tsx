import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rules = [
  { icon: "◆", title: "Formal Attire Required", desc: "Tailored suits, sport coats, and dress shoes at all times." },
  { icon: "◆", title: "No Photography", desc: "Discretion is paramount. Personal devices remain silenced." },
  { icon: "◆", title: "Members Only", desc: "Guests permitted only with prior written approval." },
  { icon: "◆", title: "Absolute Privacy", desc: "What is spoken within these walls, remains within these walls." },
];

const DressCode = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-deep" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Protocol</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">Dress Code & Privacy</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {rules.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="flex gap-5 p-6 border border-border hover:border-amber/30 transition-colors duration-700"
            >
              <span className="text-amber text-xs mt-1">{r.icon}</span>
              <div>
                <h3 className="serif text-lg text-cream mb-1">{r.title}</h3>
                <p className="sans text-xs text-smoke leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;
