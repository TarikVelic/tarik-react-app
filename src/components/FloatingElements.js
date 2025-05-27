import React from 'react';
import { motion } from 'framer-motion';
import { FaShopify, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';

const FloatingElements = () => {
  const elements = [
    { icon: FaShopify, color: 'text-green-500', size: 'text-4xl', delay: 0 },
    { icon: FaReact, color: 'text-cyan-400', size: 'text-3xl', delay: 0.5 },
    { icon: FaNodeJs, color: 'text-green-400', size: 'text-3xl', delay: 1 },
    { icon: SiTypescript, color: 'text-blue-500', size: 'text-3xl', delay: 1.5 },
    { icon: FaAws, color: 'text-orange-400', size: 'text-3xl', delay: 2 },
    { icon: SiMysql, color: 'text-blue-600', size: 'text-3xl', delay: 2.5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className={`absolute ${Element.color} ${Element.size} opacity-1`}
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: 0
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
            ],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Element.delay
          }}
        >
          <Element.icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements; 