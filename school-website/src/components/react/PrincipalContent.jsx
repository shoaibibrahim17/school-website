import React from 'react';
import { motion } from 'framer-motion';

const principal = {
  title: "Principal's Message",
  message: [
    "Welcome to Mother's Care High School. It is with great pride and enthusiasm that we lead this institution, where every child is nurtured to reach their full potential.",
    'Our mission is to provide an environment where students develop not just academic excellence, but also strong character, critical thinking, and a lifelong love for learning. We believe in holistic education that prepares our students to face the challenges of tomorrow with confidence and competence.',
    'Our dedicated faculty works tirelessly to ensure that each student receives personalized attention and guidance. Together, we are building a community of learners who are compassionate, innovative, and ready to make a positive impact on the world.',
    'We invite you to be part of our journey in shaping the leaders of tomorrow.',
  ],
  experience: 'Excellence in Education',
};

const paraVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function PrincipalContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative px-4 sm:px-0">
        <motion.div
          className="relative bg-white rounded-3xl p-1 border border-gray-100 shadow-xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="bg-white rounded-[22px] p-3">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 to-teal-50">
                <div className="text-center">
                  <motion.div
                    className="w-28 h-28 sm:w-32 sm:h-32 bg-brand-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
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
          className="absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-6 bg-white rounded-2xl p-3 sm:p-5 shadow-lg border border-gray-100"
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          animate={{ y: [0, -5, 0] }}
        >
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-brand-600">20+</div>
            <div className="text-[10px] sm:text-xs font-medium text-gray-600">Years Excellence</div>
          </div>
        </motion.div>

        <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 h-16 sm:h-20 bg-brand-200/40 rounded-full" />
        <div className="hidden sm:block absolute top-1/2 -left-8 w-16 h-16 bg-teal-200/40 rounded-full" />
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-5 py-2 bg-brand-50 text-brand-700 font-semibold text-sm rounded-full mb-4 border border-brand-100">
            Principal's Message
          </span>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
            Nurturing Excellence
          </h2>
          <p className="text-lg text-brand-600 font-medium mb-6">
            Building Tomorrow's Leaders Today
          </p>
        </motion.div>

        <div className="space-y-5 text-gray-600 leading-relaxed">
          {principal.message.map((para, i) => (
            <motion.p
              key={i}
              className="bg-brand-50/50 rounded-xl px-5 py-4 hover:bg-brand-100/50 transition-colors"
              variants={paraVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true, margin: '-30px' }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 group">
            <motion.div
              className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <div>
              <p className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Principal</p>
              <p className="text-gray-500 text-sm">Mother's Care High School</p>
              <p className="text-brand-600 text-xs font-medium mt-1">{principal.experience}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
