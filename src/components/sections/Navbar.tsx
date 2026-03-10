import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Heritage", "Collection", "Lounge", "Whiskey", "Journal", "Membership"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="serif text-2xl md:text-3xl font-light tracking-wider text-cream">
          <span className="text-amber">B</span>espoke
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="sans text-xs font-medium tracking-[0.25em] uppercase text-smoke hover:text-amber transition-colors duration-500"
            >
              {link}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("Membership")}
          className="hidden md:block magnetic-btn px-6 py-2.5 text-amber"
        >
          Apply
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5">
          <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-cream transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="sans text-xs font-medium tracking-[0.25em] uppercase text-smoke hover:text-amber transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
