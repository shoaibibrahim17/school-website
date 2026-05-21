import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const linkVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const drawerVariants = {
  closed: { opacity: 0, x: '100%' },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', damping: 28, stiffness: 250 },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export default function AnimatedNavbar({ logo, schoolName, tagline, navLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid rgba(229, 231, 235, 0.5)' : '1px solid rgba(255,255,255,0)',
          boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <motion.a
              href="/"
              className="flex items-center gap-4 sm:gap-5 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-200/50 group-hover:shadow-xl group-hover:shadow-brand-300/50 transition-all duration-300 ring-2 ring-brand-400/20 group-hover:ring-brand-400/40">
                  <img src={logo} alt={`${schoolName} Logo`} className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 object-contain brightness-0 invert" />
                </div>
              </div>
              <div>
                <span className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 block leading-tight group-hover:text-brand-600 transition-colors">{schoolName}</span>
                <span className="text-[11px] sm:text-xs lg:text-sm text-brand-600 font-semibold tracking-wide uppercase">{tagline}</span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-600 hover:text-brand-600 font-medium text-sm transition-colors rounded-lg hover:bg-brand-50/70"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Apply Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>

            <motion.button
              className="lg:hidden p-3 text-gray-600 hover:text-brand-600 transition-colors relative z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-gray-600 hover:text-brand-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="space-y-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      custom={index}
                      variants={mobileItemVariants}
                      className="block py-3 px-4 text-gray-700 hover:text-brand-600 hover:bg-brand-50 font-medium rounded-xl transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
                <motion.a
                  href="#contact"
                  custom={navLinks.length}
                  variants={mobileItemVariants}
                  className="block py-3.5 text-center bg-gradient-to-r from-brand-600 to-teal-600 text-white font-semibold rounded-xl shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden bottom-safe"
      >
        <motion.a
          href="#contact"
          className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-brand-600 text-white font-bold rounded-full shadow-lg shadow-brand-600/30 text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Enroll Now
        </motion.a>
      </motion.div>
    </>
  );
}
