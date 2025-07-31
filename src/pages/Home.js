import React from 'react';
import ExpenseChart from '../components/ExpenseChart';
import { motion } from 'framer-motion';

const Home = () => {
  return (

    <div className="min-h-screen bg-teal-100 p-6">
      <motion.h2 
        className="text-3xl font-bold text-center text-blue-700 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dashboard
      </motion.h2>

      <motion.div 
  className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
  style={{ minHeight: '300px' }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
>
  <ExpenseChart />
</motion.div>

    </div>
  );
};

export default Home;
