import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const endorsements = [
  { initials: "J.W.", text: "A sanctuary that understands the weight of silence and the value of time.", title: "Member since 2004" },
  { initials: "R.H.", text: "In twenty years of membership, not once has the standard faltered.", title: "Member since 2003" },
  { initials: "C.M.", text: "The last place on earth where a gentleman can truly be himself.", title: "Member since 2011" },
];

const Endorsements = () => {
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
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">Voices</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">Member Endorsements</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {endorsements.map((e, i) => (
            <motion.div
              key={e.initials}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="text-center p-10 border border-border hover:border-amber/30 transition-colors duration-700"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-amber/40 flex items-center justify-center">
                <span className="serif text-xl text-amber">{e.initials}</span>
              </div>
              <p className="serif text-base italic text-cream/80 leading-relaxed mb-6">"{e.text}"</p>
              <p className="sans text-xs tracking-[0.2em] uppercase text-smoke">{e.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Endorsements;
