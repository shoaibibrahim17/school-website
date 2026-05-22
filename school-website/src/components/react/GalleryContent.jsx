import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlaceholderImage from './PlaceholderImage.jsx';

const galleryItems = [
  { title: 'Smart Classroom', category: 'Academic', type: 'classroom' },
  { title: 'Annual Sports Day', category: 'Sports', type: 'sports' },
  { title: 'Art & Craft Exhibition', category: 'Creative', type: 'music' },
  { title: 'Science Fair', category: 'Academic', type: 'science' },
  { title: 'Music & Dance', category: 'Creative', type: 'music' },
  { title: 'Annual Day Celebration', category: 'Events', type: 'event' },
];

const categories = ['All', 'Academic', 'Sports', 'Creative', 'Events'];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 34, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -24,
    filter: 'blur(8px)',
    transition: { duration: 0.55, ease: [0.4, 0, 1, 1] },
  },
};

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              category === activeCategory
                ? 'bg-brand-600 text-white shadow-sm'
                : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-600 border border-gray-200'
            }`}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.title}
              className="scroll-reveal-item group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <PlaceholderImage type={item.type} aspect="4/3" className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-700/30 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 flex items-end sm:items-center justify-start sm:justify-center p-4 sm:p-0"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-left sm:text-center transform translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{item.title}</p>
                  <p className="text-brand-200 text-sm">{item.category}</p>
                </div>
              </motion.div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                <span className="text-xs font-medium text-brand-600">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

