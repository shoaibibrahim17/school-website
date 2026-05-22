import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import HeroAdmissionsCard from './HeroAdmissionsCard.jsx';

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
  { value: 300, label: 'New Admissions', suffix: '+' },
  { value: 1200, label: 'Active Students', suffix: '+' },
  { value: 99, label: 'Successful Results', suffix: '%' },
  { value: 15, label: 'Years of Excellence', suffix: '+' },
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
            src={import.meta.env.BASE_URL + '/logo.svg'}
            alt=""
            className="w-[180px] sm:w-[400px] lg:w-[800px] xl:w-[1300px] 2xl:w-[1800px] opacity-[0.025] sm:opacity-[0.035] lg:opacity-[0.045] object-contain"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 hidden sm:flex items-center justify-center z-[1] pointer-events-none select-none lg:scale-150"
        style={{ y: watermarkYReversed }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={import.meta.env.BASE_URL + '/logo.svg'}
            alt=""
            className="w-[600px] lg:w-[1300px] xl:w-[2000px] opacity-[0.015] blur-[1px] object-contain"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      <div className="absolute top-40 -right-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-36 sm:w-80 lg:w-[500px] h-36 sm:h-80 lg:h-[500px] bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-20 sm:w-40 lg:w-64 h-20 sm:h-40 lg:h-64 bg-brand-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-24 sm:w-48 lg:w-80 h-24 sm:h-48 lg:h-80 bg-brand-300/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/2 w-20 sm:w-44 lg:w-72 h-20 sm:h-44 lg:h-72 bg-teal-300/10 rounded-full blur-3xl" />

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
              <span className="text-brand-700 font-semibold text-sm">English Medium | SSC Affiliated since 2011</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] mb-4">
              <span className="block">Mother's Care</span>
              <span className="block text-brand-600">High School</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-base sm:text-lg lg:text-xl text-brand-500 font-semibold italic leading-relaxed block max-w-xl">
                &ldquo;While you take care of the world, we take care of your children&rdquo;
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-brand-500 font-semibold">Established 2011 &middot; Adilabad &middot; Telangana</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A premier English Medium school where every child is nurtured with care, guided with purpose, and prepared to lead with confidence. We don&rsquo;t just educate &mdash; we build character, spark curiosity, and create a home away from home.
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
                <span>Discover Our School</span>
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
              <div className="lg:hidden relative mb-8">
                <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-1 shadow-xl border border-white/50">
                  <PlaceholderImage type="classroom" aspect="16/9" className="rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                </div>
                <div className="absolute -bottom-4 left-2 right-2 z-10">
                  <div className="max-w-xs mx-auto">
                    <HeroAdmissionsCard />
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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-gray-800 text-sm leading-tight">Masood Chowk, Adilabad</p>
                            <p className="text-xs text-gray-500 truncate">Visit Our Campus</p>
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
                    <div className="w-11 h-11 bg-brand-50 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">English Medium</p>
                      <p className="text-xs text-gray-500">SSC Board</p>
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

              <div className="hidden lg:block">
                <div className="absolute right-0 top-[15%] w-64 xl:w-72">
                  <HeroAdmissionsCard />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
