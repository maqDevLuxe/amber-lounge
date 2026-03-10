import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, .magnetic-btn").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .magnetic-btn").forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{ background: "hsl(var(--amber) / 0.8)" }}
        animate={{
          x: pos.x - (hovering ? 16 : 4),
          y: pos.y - (hovering ? 16 : 4),
          width: hovering ? 32 : 8,
          height: hovering ? 32 : 8,
          opacity: hovering ? 0.3 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
        style={{ borderColor: "hsl(var(--amber) / 0.3)" }}
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          width: 40,
          height: 40,
          scale: hovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
