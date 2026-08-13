import React from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const pins = [
  { type: 'students', label: 'Student Life', aspect: '4/5', className: 'mt-8 sm:mt-12' },
  { type: 'sports', label: 'Sports', aspect: '1/1', className: '' },
  { type: 'classroom', label: 'Smart Classrooms', aspect: '1/1', className: '' },
  { type: 'assembly', label: 'Activities', aspect: '4/5', className: '-mt-8 sm:-mt-12' },
];

function PinTile({ type, label, aspect, className }) {
  return (
    <motion.div
      className={`relative rounded-3xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 ${className}`}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <PlaceholderImage type={type} aspect={aspect} label={label} className="w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
        <span className="text-white font-medium p-4 sm:p-6 text-sm sm:text-base">{label}</span>
      </div>
    </motion.div>
  );
}

export default function HeroContent() {
  return (
    <section className="relative bg-white overflow-hidden py-10 lg:py-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:min-h-[calc(100vh-5rem)]">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-5 lg:pr-4 pt-10 sm:pt-16 lg:pt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-8 sm:mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-700">Admissions Open 2026-27</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-heading text-[2.8rem] min-[400px]:text-[3.25rem] sm:text-6xl lg:text-[4.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6"
              >
                Nurturing <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Curious Minds.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mb-10"
              >
                Providing quality English Medium education in Adilabad since 2011. We build strong foundations for your child's successful future.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enroll Your Child</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Campus
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 flex items-center justify-center lg:justify-start gap-8"
              >
                <div>
                  <div className="font-heading text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">Years Exp.</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <div className="font-heading text-2xl font-bold text-gray-900">SSC</div>
                  <div className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">Board</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Pinterest Style Masonry */}
          <div className="lg:col-span-7 pb-10 lg:pb-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                <PinTile {...pins[0]} />
                <PinTile {...pins[1]} />
              </motion.div>
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                <PinTile {...pins[2]} />
                <PinTile {...pins[3]} />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
