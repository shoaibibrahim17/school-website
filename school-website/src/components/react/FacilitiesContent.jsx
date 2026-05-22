import React from 'react';
import { motion } from 'framer-motion';
import {
  ToyBrick,
  Sparkles,
  Monitor,
  Presentation,
  GraduationCap,
  Mic,
  ShieldCheck,
  Camera,
  Trophy,
} from 'lucide-react';

const iconMap = {
  ToyBrick,
  Sparkles,
  Monitor,
  Presentation,
  GraduationCap,
  Mic,
  ShieldCheck,
  Camera,
  Trophy,
};

const facilities = [
  {
    icon: 'ToyBrick',
    title: 'Playway Method for Pre-Primary',
    description: 'Research-based playful learning approach with blocks, shapes, and interactive activities that make early education joyful and effective.',
    color: 'from-brand-500 to-brand-600',
    gradient: 'from-brand-50 to-brand-100/50',
    size: 'large',
  },
  {
    icon: 'Sparkles',
    title: 'Activity-Based Learning',
    description: 'Hand-on activities, group projects, and experiential learning that develop critical thinking and creativity in every student.',
    color: 'from-teal-500 to-teal-600',
    gradient: 'from-teal-50 to-teal-100/50',
    size: 'small',
  },
  {
    icon: 'Monitor',
    title: 'Modern Computer Lab',
    description: '50+ workstations with high-speed internet, coding software, and guided digital literacy programs.',
    color: 'from-brand-500 to-brand-600',
    gradient: 'from-brand-50 to-brand-100/50',
    size: 'small',
  },
  {
    icon: 'Presentation',
    title: 'Digital Classrooms',
    description: 'Interactive smart boards, projectors, and audio-visual tools that make every lesson engaging and immersive.',
    color: 'from-teal-500 to-teal-600',
    gradient: 'from-teal-50 to-teal-100/50',
    size: 'small',
  },
  {
    icon: 'GraduationCap',
    title: 'Well-Trained & Qualified Staff',
    description: 'Experienced, caring educators who nurture every child with personalized attention and modern teaching methods.',
    color: 'from-brand-500 to-brand-600',
    gradient: 'from-brand-50 to-brand-100/50',
    size: 'medium',
  },
  {
    icon: 'Mic',
    title: 'Assembly Activity Sessions',
    description: 'Daily assembly with public speaking, leadership activities, moral education, and talent showcase opportunities.',
    color: 'from-teal-500 to-teal-600',
    gradient: 'from-teal-50 to-teal-100/50',
    size: 'medium',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe & Secure Environment',
    description: 'Child-safe campus with strict visitor protocols, secure entry, and a nurturing atmosphere where children thrive.',
    color: 'from-brand-400 to-brand-500',
    gradient: 'from-brand-50 to-brand-100/50',
    size: 'small',
  },
  {
    icon: 'Camera',
    title: 'CCTV Surveillance',
    description: '24/7 CCTV monitoring across all areas with dedicated safety staff and emergency response protocols.',
    color: 'from-teal-500 to-teal-600',
    gradient: 'from-teal-50 to-teal-100/50',
    size: 'small',
  },
  {
    icon: 'Trophy',
    title: 'Spacious Playground',
    description: 'Large outdoor playground with sports facilities for cricket, football, athletics, and free play in a safe green environment.',
    color: 'from-brand-500 to-brand-600',
    gradient: 'from-brand-50 to-brand-100/50',
    size: 'medium',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function FacilitiesContent() {
  return (
    <>
      <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
        {facilities.map((facility, index) => {
          const LucideIcon = iconMap[facility.icon];
          return (
            <motion.div
              key={facility.title}
              className="group relative p-5 bg-white rounded-2xl border border-gray-100 transition-all duration-500 overflow-hidden snap-start shrink-0 w-[280px] sm:w-[320px]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -3, scale: 1.01, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.1)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-[0.04] rounded-full blur-2xl transition-opacity duration-700" />
              <div className="relative h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <motion.div
                    className={`flex-shrink-0 w-11 h-11 bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center shadow-md`}
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LucideIcon className="text-white w-5 h-5" strokeWidth={1.5} />
                  </motion.div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-base leading-snug">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{facility.description}</p>
              </div>
            </motion.div>
          );
        })}
        <div className="snap-start shrink-0 w-4" />
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 auto-rows-auto">
        {facilities.map((facility, index) => {
          const LucideIcon = iconMap[facility.icon];
          const spanClass =
            facility.size === 'large'
              ? 'md:col-span-2 md:row-span-2'
              : facility.size === 'medium'
              ? 'xl:col-span-2 xl:row-span-1'
              : 'md:col-span-1 md:row-span-1';

          return (
            <motion.div
              key={facility.title}
              className={`group relative p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-500 overflow-hidden ${spanClass}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -5, scale: 1.01, boxShadow: '0 24px 48px rgba(79, 70, 229, 0.12)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-[0.04] rounded-full blur-2xl transition-opacity duration-700" />
              <div className="relative h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 ${facility.size === 'large' ? 'lg:w-14 lg:h-14' : ''} bg-gradient-to-br ${facility.color} rounded-xl flex items-center justify-center shadow-md shadow-${facility.color.split(' ')[0].replace('from-', '')}/20 group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LucideIcon className={`text-white ${facility.size === 'large' ? 'w-6 h-6 lg:w-7 lg:h-7' : 'w-5 h-5'}`} strokeWidth={1.5} />
                  </motion.div>
                </div>
                <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors ${facility.size === 'large' ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}`}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{facility.description}</p>
                <motion.div
                  className="mt-4 flex items-center gap-1 text-brand-600 font-medium text-sm"
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
