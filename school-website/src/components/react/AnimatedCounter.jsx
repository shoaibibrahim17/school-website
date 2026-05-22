import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCounter({ value, label, suffix = '' }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return undefined;

    let frameId;
    const duration = 1800;

    const animateCounter = () => {
      setHasAnimated(true);
      const startTime = performance.now();

      const tick = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(eased * value));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      animateCounter();
      return () => cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [hasAnimated, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.055 }}
      className="text-center"
    >
      <div className="text-3xl lg:text-4xl font-bold text-brand-600">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </motion.div>
  );
}

