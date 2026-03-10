import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const MembershipCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="membership" className="section-padding bg-charcoal-deep relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <p className="sans text-xs tracking-[0.4em] uppercase text-amber mb-4">By Invitation Only</p>
          <h2 className="serif text-4xl md:text-6xl font-light text-cream mb-6">Apply for Membership</h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="sans text-sm font-light text-smoke leading-relaxed mb-12 max-w-xl mx-auto">
            Membership is extended to those who share our reverence for tradition,
            craftsmanship, and the quiet art of living well. All applications are reviewed
            by the Members' Council.
          </p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 max-w-md mx-auto"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-transparent border border-border px-6 py-4 sans text-xs tracking-wider text-cream placeholder:text-smoke/50 focus:border-amber/50 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border border-border px-6 py-4 sans text-xs tracking-wider text-cream placeholder:text-smoke/50 focus:border-amber/50 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Referred By (Optional)"
                className="w-full bg-transparent border border-border px-6 py-4 sans text-xs tracking-wider text-cream placeholder:text-smoke/50 focus:border-amber/50 focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="magnetic-btn w-full px-10 py-4 text-amber"
              >
                Submit Application
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 border border-amber/30"
            >
              <p className="serif text-2xl text-cream mb-3">Application Received</p>
              <p className="sans text-xs text-smoke">The Members' Council will review your application within 14 business days.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="serif text-xl text-cream">
            <span className="text-amber">B</span>espoke
          </p>
          <p className="sans text-xs text-smoke tracking-wider">
            © {new Date().getFullYear()} Bespoke Cigar & Lounge Club. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="sans text-xs text-smoke hover:text-amber transition-colors cursor-pointer tracking-wider uppercase">Privacy</span>
            <span className="sans text-xs text-smoke hover:text-amber transition-colors cursor-pointer tracking-wider uppercase">Terms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;
