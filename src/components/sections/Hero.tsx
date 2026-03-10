import { motion } from "framer-motion";
import heroCigar from "@/assets/hero-cigar.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroCigar} alt="Glowing cigar tip with swirling smoke" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 gradient-smoke" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="sans text-xs tracking-[0.5em] uppercase text-amber mb-8">
            Est. 1887 — By Invitation Only
          </p>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-cream mb-8">
            Where Legacy<br />
            <span className="italic font-light text-amber">Meets Leisure</span>
          </h1>
          <div className="gold-line mx-auto mb-8" />
          <p className="sans text-sm md:text-base font-light text-smoke max-w-lg mx-auto leading-relaxed mb-12">
            An exclusive sanctuary for the discerning gentleman.<br />
            Hand-rolled excellence. Timeless ritual.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic-btn px-10 py-4 text-amber"
          >
            Request Membership
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12" style={{ background: "linear-gradient(180deg, hsl(var(--amber) / 0.5), transparent)" }} />
      </motion.div>
    </section>
  );
};

export default Hero;
