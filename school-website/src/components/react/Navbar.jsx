import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const linkVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.035, y: -1 },
  tap: { scale: 0.97 },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: 28, filter: 'blur(8px)' },
  open: (i) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.07, duration: 0.62, ease: [0.16, 1, 0.3, 1] },
  }),
};

const drawerVariants = {
  closed: { opacity: 0, x: '100%', filter: 'blur(10px)' },
  open: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', damping: 32, stiffness: 170, mass: 0.9 },
  },
  exit: {
    opacity: 0,
    x: '100%',
    filter: 'blur(8px)',
    transition: { duration: 0.42, ease: [0.4, 0, 1, 1] },
  },
};

export default function AnimatedNavbar({ logo, schoolName, tagline, navLinks }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

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

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
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
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 flex items-center justify-center flex-shrink-0">
                <img src={logo} alt={`${schoolName} Logo`} className="w-full h-full object-contain drop-shadow-sm" />
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
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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

      <motion.a
        href="https://wa.me/919154408383"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: footerVisible ? 0.9 : 1, opacity: footerVisible ? 0 : 1 }}
        style={{ pointerEvents: footerVisible ? 'none' : 'auto' }}
        transition={{ delay: footerVisible ? 0 : 1.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-4 bottom-24 sm:right-6 sm:bottom-28 lg:bottom-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
        whileHover={{ scale: 1.055, y: -4 }}
        whileTap={{ scale: 0.96 }}
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.051 2C6.529 2 2.05 6.477 2.05 12c0 1.76.46 3.475 1.333 4.992L2 22l5.13-1.344A9.941 9.941 0 0012.05 22h.004c5.522 0 10-4.477 10-10s-4.478-10-10.003-10z" />
        </svg>
      </motion.a>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: footerVisible ? 0.9 : 1, opacity: footerVisible ? 0 : 1 }}
        style={{ pointerEvents: footerVisible ? 'none' : 'auto' }}
        transition={{ delay: footerVisible ? 0 : 1.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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

