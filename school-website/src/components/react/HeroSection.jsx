import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter.jsx';
import PlaceholderImage from './PlaceholderImage.jsx';
import HeroAdmissionsCard from './HeroAdmissionsCard.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.24 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.985, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
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
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -46]);

  return (
    <div ref={sectionRef} className="relative min-h-[86vh] lg:min-h-[calc(100vh-2.5rem)] flex items-center pt-16 lg:pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_45%,#eefdfb_100%)] z-0" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_26%_46%,rgba(15,23,42,0.07),rgba(15,23,42,0.025)_34%,transparent_58%)] pointer-events-none" />

      <motion.div
        className="absolute inset-y-0 right-[-8%] hidden lg:flex items-center justify-center z-[1] pointer-events-none select-none"
        style={{ y: watermarkY }}
      >
        <div className="relative flex items-center justify-center">
          <img
            src={(import.meta.env.BASE_URL + '/logo.svg').replace('//', '/')}
            alt=""
            className="w-[520px] xl:w-[680px] 2xl:w-[760px] opacity-[0.035] object-contain"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      <div className="absolute top-40 -right-20 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-brand-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-36 sm:w-80 lg:w-[500px] h-36 sm:h-80 lg:h-[500px] bg-teal-200/20 rounded-full blur-3xl" />

      <div className="absolute inset-0 opacity-[0.012] z-[1]" style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10 w-full"
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left relative">
            <div className="absolute -inset-x-4 -inset-y-5 sm:-inset-x-8 lg:-inset-x-10 lg:-inset-y-8 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.08),rgba(15,23,42,0.025)_42%,transparent_72%)] rounded-[2rem] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-5 shadow-sm border border-brand-100">
              <motion.span
                className="w-1.5 h-1.5 bg-brand-600 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-brand-700 font-semibold text-sm">English Medium | SSC Affiliated since 2011</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[2.25rem] max-[380px]:text-[2rem] sm:text-5xl lg:text-[3.7rem] xl:text-[4.4rem] font-bold text-gray-950 leading-[1.05] mb-4">
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

            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-[1.08rem] text-gray-700 mb-7 max-w-xl mx-auto lg:mx-0 leading-relaxed">
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

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-8 lg:mt-10 pt-5 lg:pt-6 border-t border-gray-200/70">
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
                <div className="relative -mt-8 left-0 right-0 z-10 px-2 sm:px-4">
                  <div className="max-w-[280px] sm:max-w-xs mx-auto">
                    <HeroAdmissionsCard />
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block max-w-[560px] ml-auto">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-brand-600/8 to-teal-600/10 rounded-3xl blur-2xl"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative bg-white/75 backdrop-blur-md rounded-3xl p-2 shadow-xl shadow-slate-900/10 border border-white/70">
                  <div className="rounded-2xl overflow-hidden relative">
                    <PlaceholderImage type="students" aspect="4/3" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  </div>
                </div>

                <motion.div
                  className="absolute -top-4 -right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/70"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 7, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
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
                  className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/70"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 8, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
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
                <div className="absolute right-5 bottom-5 w-56 xl:w-60">
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

