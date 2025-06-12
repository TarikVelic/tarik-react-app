import React from 'react';
import { motion } from 'framer-motion';
import { FaShopify, FaUsers, FaCode, FaTrophy } from 'react-icons/fa';

const QuickStats = () => {
  const stats = [
    {
      icon: FaShopify,
      number: "4+",
      label: "Shopify Apps",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: FaUsers,
      number: "10k+",
      label: "Merchants Served",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: FaCode,
      number: "3+",
      label: "Years Experience",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: FaTrophy,
      number: "Frontend lead",
      label: "Leadership Role",
      color: "text-yellow-500",
      bgColor: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-500/30"
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.1 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={`bg-gradient-to-r ${stat.bgColor} backdrop-blur-xl rounded-2xl p-6 border ${stat.borderColor} text-center group hover:scale-105 transition-transform duration-300`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <stat.icon className={`${stat.color} text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
          <div className={`${stat.color} text-2xl font-black mb-2`}>{stat.number}</div>
          <div className="text-gray-300 text-sm font-semibold">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default QuickStats; 