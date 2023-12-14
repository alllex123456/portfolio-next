import React from 'react';
import { motion } from 'framer-motion';

function Line({ customClassName, fill }) {
  return (
    <motion.svg
      className={customClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="20"
      animate={{ width: 713 }}
      transition={{ duration: 1 }}
      fill="none"
      viewBox="0 0 713 20"
    >
      <motion.rect width="713" height="20" fill={fill || '#8AA6A3'} />
    </motion.svg>
  );
}

export default Line;
