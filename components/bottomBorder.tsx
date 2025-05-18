'use client'
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useInView } from "framer-motion";

interface BottomBorderProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  delay?: number;
}

const BottomBorder = ({
  width = 80,
  height = 5,
  color = 'var(--accent)',
  className = '',
  delay = 0.3,
}: BottomBorderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className={`mx-auto mb-6 ${className}`}
      style={{ backgroundColor: color, height: `${height}px` }}
      initial={{ width: 0 }}
      animate={isInView ? { width: width } : { width: 0 }}
      transition={{ duration: 0.8, delay: delay }}
      ref={ref}
    />
  );
};

export default BottomBorder;