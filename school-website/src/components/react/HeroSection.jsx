import React from 'react';
import { motion } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const pins = [
  { type: 'students', label: 'Our Students', aspect: '4/5' },
  { type: 'classroom', label: 'Smart Classrooms', aspect: '1/1' },
  { type: 'sports', label: 'Sports & Play', aspect: '1/1' },
  { type: 'lab', label: 'Science Lab', aspect: '4/5' },
];

function PinTile({ type, label, aspect }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <PlaceholderImage type={type} aspect={aspect} label={label} className="w-full" />
    </motion.div>
  );
}

function AdmissionsPin() {
  return (
    <motion.a
      href="#contact"
      className="relative rounded-2xl overflow-hidden bg-brand-600 p-5 flex flex-col justify-center min-h-[116px] shadow-sm"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-200">Admissions Open</span>
      <span className="text-white font-bold text-lg leading-tight mt-1">2026&ndash;27 Academic Year</span>
      <span className="text-white/80 text-sm mt-1">Limited seats &middot; Jr. KG to Class X</span>
    </motion.a>
  );
}

export default function HeroContent() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-14 lg:py-24 lg:min-h-[calc(100vh-2.5rem)]">
          <div className="lg:col-span-6 lg:pr-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="h-px w-8 bg-brand-600" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">English Medium &middot; SSC Board</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-[2.75rem] max-[380px]:text-[2.25rem] sm:text-6xl lg:text-[4.25rem] font-bold text-gray-950 leading-[1.02] tracking-[-0.02em] mb-5"
              >
                Mother&rsquo;s Care
                <span className="block text-brand-600">High School</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-500 font-medium italic mb-5"
              >
                &ldquo;While you take care of the world, we take care of your children.&rdquo;
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              >
                A caring, values-driven English Medium school in Adilabad &mdash; where every child is known, guided, and given the confidence to thrive.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Enroll Now</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#about"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-brand-400 hover:text-brand-600 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Discover Our School</span>
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-600" /> SSC Board Affiliated</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-600" /> Established 2011</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-600" /> Adilabad, Telangana</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
              {pins.map((p) => (
                <PinTile key={p.label} {...p} />
              ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 gap-4 max-w-[560px] ml-auto">
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4">
                <PinTile type="students" label="Our Students" aspect="4/5" />
                <PinTile type="classroom" label="Smart Classrooms" aspect="1/1" />
              </motion.div>
              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4 lg:mt-16">
                <PinTile type="sports" label="Sports &amp; Play" aspect="1/1" />
                <PinTile type="lab" label="Science Lab" aspect="4/5" />
                <AdmissionsPin />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
