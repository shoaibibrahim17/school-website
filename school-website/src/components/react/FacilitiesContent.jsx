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
    color: 'from-indigo-500 to-blue-600',
    gradient: 'from-indigo-50 to-blue-100/50',
    size: 'large',
  },
  {
    icon: 'Sparkles',
    title: 'Activity-Based Learning',
    description: 'Hand-on activities, group projects, and experiential learning that develop critical thinking and creativity in every student.',
    color: 'from-emerald-500 to-teal-600',
    gradient: 'from-emerald-50 to-teal-100/50',
    size: 'small',
  },
  {
    icon: 'Monitor',
    title: 'Modern Computer Lab',
    description: '50+ workstations with high-speed internet, coding software, and guided digital literacy programs.',
    color: 'from-sky-500 to-indigo-600',
    gradient: 'from-sky-50 to-indigo-100/50',
    size: 'small',
  },
  {
    icon: 'Presentation',
    title: 'Digital Classrooms',
    description: 'Interactive smart boards, projectors, and audio-visual tools that make every lesson engaging and immersive.',
    color: 'from-violet-500 to-indigo-600',
    gradient: 'from-violet-50 to-indigo-100/50',
    size: 'small',
  },
  {
    icon: 'GraduationCap',
    title: 'Well-Trained & Qualified Staff',
    description: 'Experienced, caring educators who nurture every child with personalized attention and modern teaching methods.',
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-50 to-orange-100/50',
    size: 'medium',
  },
  {
    icon: 'Mic',
    title: 'Assembly Activity Sessions',
    description: 'Daily assembly with public speaking, leadership activities, moral education, and talent showcase opportunities.',
    color: 'from-rose-500 to-pink-600',
    gradient: 'from-rose-50 to-pink-100/50',
    size: 'medium',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safe & Secure Environment',
    description: 'Child-safe campus with strict visitor protocols, secure entry, and a nurturing atmosphere where children thrive.',
    color: 'from-green-500 to-emerald-600',
    gradient: 'from-green-50 to-emerald-100/50',
    size: 'small',
  },
  {
    icon: 'Camera',
    title: 'CCTV Surveillance',
    description: '24/7 CCTV monitoring across all areas with dedicated safety staff and emergency response protocols.',
    color: 'from-cyan-500 to-sky-600',
    gradient: 'from-cyan-50 to-sky-100/50',
    size: 'small',
  },
  {
    icon: 'Trophy',
    title: 'Spacious Playground',
    description: 'Large outdoor playground with sports facilities for cricket, football, athletics, and free play in a safe green environment.',
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-50 to-red-100/50',
    size: 'medium',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.975, filter: 'blur(10px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { delay: i * 0.09, duration: 1.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function FacilitiesContent() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 auto-rows-auto">
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
              className={`scroll-reveal-item hover-lift group relative p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-500 overflow-hidden ${spanClass}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: false, margin: '-50px' }}
              whileHover={{ y: -6, scale: 1.006, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.08)' }}
            >
              <div className="relative h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 ${facility.size === 'large' ? 'lg:w-14 lg:h-14' : ''} bg-brand-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
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

