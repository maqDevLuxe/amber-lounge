import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import fullLoungeImg from "@/assets/full-lounge.jpg";

const FullLoungeImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={fullLoungeImg} alt="Grand leather lounge with crystal chandelier" className="h-full w-full object-cover scale-110" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="serif text-3xl md:text-5xl lg:text-6xl text-cream/80 text-center italic font-light px-6">
          "Silence is the truest luxury."
        </p>
      </div>
    </section>
  );
};

export default FullLoungeImage;
