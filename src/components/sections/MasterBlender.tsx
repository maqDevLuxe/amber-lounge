import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import blenderImg from "@/assets/master-blender.jpg";

const MasterBlender = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">The Artisan</p>
          <h2 className="serif text-4xl md:text-5xl font-light text-cream mb-6">The Master Blender</h2>
          <div className="gold-line mb-8" />
          <p className="sans text-sm font-light text-smoke leading-relaxed mb-6">
            For forty-three years, our Master Blender has devoted his life to the art of the perfect blend.
            His hands have shaped over 200,000 cigars, each one a testament to patience and uncompromising craft.
          </p>
          <blockquote className="border-l-2 border-amber/40 pl-6 mb-8">
            <p className="serif text-xl italic text-cream/80 leading-relaxed">
              "A great cigar is not made. It reveals itself—through time, through care, through silence."
            </p>
            <cite className="sans text-xs tracking-[0.2em] uppercase text-amber mt-3 block not-italic">
              — Alejandro Vega, Master Blender
            </cite>
          </blockquote>
          <div className="flex gap-12">
            <div>
              <p className="serif text-3xl text-amber">43</p>
              <p className="sans text-xs tracking-wider uppercase text-smoke">Years of Mastery</p>
            </div>
            <div>
              <p className="serif text-3xl text-amber">200K+</p>
              <p className="sans text-xs tracking-wider uppercase text-smoke">Cigars Crafted</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img src={blenderImg} alt="Master Blender Alejandro Vega examining a hand-rolled cigar" className="w-full aspect-[4/5] object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default MasterBlender;
