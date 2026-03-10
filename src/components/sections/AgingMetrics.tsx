import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Humidity", value: "70%", desc: "Precisely maintained" },
  { label: "Temperature", value: "70°F", desc: "Year-round constant" },
  { label: "Aging Period", value: "5–15 Yrs", desc: "Patient perfection" },
  { label: "Cedar Rooms", value: "12", desc: "Climate-controlled vaults" },
];

const AgingMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Science</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">Aging & Curing</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="text-center p-8 border border-border hover:border-amber/30 transition-all duration-700"
            >
              <p className="serif text-4xl md:text-5xl text-amber mb-2">{m.value}</p>
              <p className="sans text-xs tracking-[0.2em] uppercase text-cream mb-1">{m.label}</p>
              <p className="sans text-xs text-smoke">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgingMetrics;
