import React from 'react';
import { motion } from 'framer-motion';

const principal = {
  name: 'Naser Bin Easa',
  title: 'Principal',
  message: [
    'I am truly excited about the possibilities that lie ahead for our students and our school community. Let us work together to make this school year a memorable and enriching experience for everyone.',
    'Wishing you and your family a wonderful school year filled with growth, learning, and success.',
  ],
  experience: 'Leading with Care & Excellence',
};

const paraVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.18, duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PrincipalContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="relative px-0 sm:px-4">
        <motion.div
          className="relative bg-white rounded-3xl p-1 border border-gray-100 shadow-xl"
          initial={{ opacity: 0, scale: 0.94, y: 34, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ duration: 1.055, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-white rounded-[22px] p-3">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 to-teal-50">
                <div className="text-center">
                  <motion.div
                    className="w-28 h-28 sm:w-32 sm:h-32 bg-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg className="w-14 h-14 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </motion.div>
                  <p className="text-gray-600 font-medium">Principal's Photo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-3 right-1 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-2 sm:p-5 shadow-lg border border-gray-100"
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          animate={{ y: [0, -7, 0] }}
        >
          <div className="text-center">
            <div className="text-base sm:text-2xl font-bold text-brand-600">15+</div>
            <div className="text-[10px] sm:text-xs font-medium text-gray-600">Years of Excellence</div>
          </div>
        </motion.div>

        <div className="hidden sm:block absolute -top-6 -left-6 w-20 h-20 bg-brand-200/40 rounded-full" />
        <div className="hidden sm:block absolute top-1/2 -left-8 w-16 h-16 bg-teal-200/40 rounded-full" />
      </div>

      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false }}
          transition={{ duration: 0.955 }}
        >
          <span className="inline-block px-5 py-2 bg-brand-50 text-brand-700 font-semibold text-sm rounded-full mb-4 border border-brand-100">
            Principal's Message
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
            A Word from Our Principal
          </h2>
          <p className="text-base sm:text-lg text-brand-600 font-medium">
            {principal.name} &middot; {principal.title}
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute -top-10 -left-2 text-[9rem] sm:text-[13rem] text-brand-600/10 font-serif leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</div>
          <div className="relative z-10 space-y-4 sm:space-y-6 text-gray-600 leading-relaxed pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-brand-300">
            {principal.message.map((para, i) => (
              <motion.p
                key={i}
                className="text-sm sm:text-base lg:text-lg italic leading-relaxed"
                variants={paraVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: false, margin: '-30px' }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-2 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 group">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.08, rotate: 4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <div>
              <p className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors text-sm sm:text-lg">{principal.name}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{principal.title}, Mother's Care High School</p>
              <p className="text-brand-600 text-[11px] sm:text-xs font-medium mt-0.5 sm:mt-1">{principal.experience}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

