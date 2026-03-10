import { motion, useScroll, useTransform } from "framer-motion";

const SmokeBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full animate-slow-pulse"
        aria-hidden
      >
        <div className="h-full w-full rounded-full smoke-overlay opacity-30 blur-3xl" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute top-2/3 right-1/4 h-[500px] w-[500px] rounded-full animate-slow-pulse"
        aria-hidden
      >
        <div className="h-full w-full rounded-full smoke-overlay opacity-20 blur-3xl" style={{ animationDelay: "2s" }} />
      </motion.div>
    </div>
  );
};

export default SmokeBackground;
