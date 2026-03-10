import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return controls.stop;
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="serif text-5xl md:text-7xl text-amber">{display}{suffix}</p>
      <p className="sans text-xs tracking-[0.3em] uppercase text-smoke mt-3">{label}</p>
    </div>
  );
};

const MembersCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-deep" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Circle</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream">Exclusive Members</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <Counter value={347} label="Active Members" />
          <Counter value={12} label="Global Lounges" />
          <Counter value={89} label="Years of Legacy" suffix="+" />
          <Counter value={1500} label="Rare Cigars" suffix="+" />
        </div>
      </motion.div>
    </section>
  );
};

export default MembersCounters;
