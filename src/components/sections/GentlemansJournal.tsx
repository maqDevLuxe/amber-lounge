import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  { title: "The Lost Art of the After-Dinner Smoke", date: "February 2026", category: "Tradition" },
  { title: "Pairing Cognac with Maduro Wrappers", date: "January 2026", category: "Pairings" },
  { title: "A Visit to the Vuelta Abajo Valley", date: "December 2025", category: "Travel" },
];

const GentlemansJournal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">Knowledge</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">The Gentleman's Journal</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              className="p-8 border border-border hover:border-amber/30 transition-all duration-700 group"
            >
              <p className="sans text-xs tracking-[0.2em] uppercase text-amber mb-4">{a.category}</p>
              <h3 className="serif text-xl text-cream mb-4 group-hover:text-amber transition-colors duration-500">{a.title}</h3>
              <p className="sans text-xs text-smoke">{a.date}</p>
              <div className="mt-6 gold-line-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GentlemansJournal;
