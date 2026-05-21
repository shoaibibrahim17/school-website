import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stats = [
  { value: 15, label: 'Years of Excellence', suffix: '+' },
  { value: 850, label: 'Happy Students', suffix: '+' },
  { value: 42, label: 'Expert Teachers', suffix: '+' },
  { value: 98, label: 'Board Pass Rate', suffix: '%' },
];

export default function HeroContent() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const watermarkYReversed = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50 z-0" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none select-none"
        style={{ y: watermarkY }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/logo.svg"
            alt=""
            className="w-[700px] sm:w-[1000px] lg:w-[1300px] xl:w-[1500px] 2xl:w-[1800px] opacity-[0.035] sm:opacity-[0.04] lg:opacity-[0.045] object-contain"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none select-none scale-150"
        style={{ y: watermarkYReversed }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/logo.svg"
            alt=""
            className="w-[900px] sm:w-[1300px] lg:w-[1700px] xl:w-[2000px] opacity-[0.015] blur-[1px] object-contain"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      <div className="absolute top-40 -right-20 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-brand-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-teal-300/10 rounded-full blur-3xl" />

      <div className="absolute inset-0 opacity-[0.012] z-[1]" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10 w-full"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm border border-brand-100">
              <motion.span
                className="w-1.5 h-1.5 bg-brand-600 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-brand-700 font-semibold text-sm">SSC Affiliated since 2011</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] mb-6">
              <span className="block">Building</span>
              <span className="block text-brand-600">Bright Futures</span>
              <span className="block text-gray-800">for Tomorrow</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold">Mother&apos;s Care High School</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Nurturing future leaders with excellence. Since 2011, we have been committed to providing quality education that empowers students to achieve their full potential and become responsible citizens.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-xl shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/30"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Enroll Now</span>
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#about"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-brand-500 hover:text-brand-600"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2 text-gray-400 group-hover:text-brand-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
                <span>Explore More</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-100">
              {stats.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix || ''}
                />
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div
              className="relative"
              style={{ y: imageY }}
              variants={itemVariants}
            >
              <div className="lg:hidden mb-8">
                <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-1.5 shadow-xl border border-white/50">
                  <PlaceholderImage type="classroom" aspect="16/9" className="rounded-xl" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                      <p className="text-gray-800 font-semibold text-xs">Quality Education</p>
                      <p className="text-gray-500 text-[10px]">Holistic Development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-brand-600/10 to-teal-600/10 rounded-3xl blur-2xl"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute top-6 -left-6 w-32 h-32 bg-brand-200/40 rounded-full blur-2xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-40 h-40 bg-teal-200/40 rounded-full blur-2xl"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-2 shadow-2xl border border-white/40">
                  <div className="rounded-2xl overflow-hidden relative">
                    <PlaceholderImage type="students" aspect="4/3" />
                    <motion.div
                      className="absolute bottom-5 left-5 right-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.6 }}
                    >
                      <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-gray-800 text-sm leading-tight">Quality Education</p>
                            <p className="text-xs text-gray-500 truncate">Holistic Development</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-teal-50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">ISO 9001:2015</p>
                      <p className="text-xs text-gray-500">Certified</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 -left-3 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-brand-50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">SSC Board</p>
                      <p className="text-xs text-gray-500">Affiliated</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
