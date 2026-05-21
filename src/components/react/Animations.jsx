import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export function FloatingImage({ src, alt, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-2xl" />
      </motion.div>
    </motion.div>
  );
}

export function ParallaxSection({ children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * staggerDelay }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function AnimatedGalleryItem({ src, alt, category, title }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
          <p className="text-gray-800 font-semibold text-center">{title}</p>
          <p className="text-gray-500 text-sm text-center">{category}</p>
        </div>
      </motion.div>
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs font-medium text-indigo-600">{category}</span>
      </div>
    </motion.div>
  );
}

export function AnimatedFeatureCard({ icon, title, description, color }) {
  return (
    <motion.div
      className="group relative p-6 bg-white rounded-2xl border border-gray-100"
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
      <div className="relative">
        <motion.div
          className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4`}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </motion.div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <motion.div
        className="absolute bottom-4 right-4 w-8 h-8 bg-gray-100 group-hover:bg-indigo-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        whileHover={{ x: 3 }}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>
    </motion.div>
  );
}