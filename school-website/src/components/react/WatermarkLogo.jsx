import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WatermarkLogo({ className = '', opacity = 'opacity-[0.05]', blur = 'blur-[2px]', size = 'w-[200px] sm:w-[400px] lg:w-[600px] 2xl:w-[800px]' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div ref={ref} className={`absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="flex items-center justify-center">
        <img
          src={import.meta.env.BASE_URL + '/logo.svg'}
          alt=""
          className={`${size} ${opacity} ${blur} object-contain`}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
