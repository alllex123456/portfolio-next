import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHorizontalBar = ({ classes, extent, delay }) => (
  <motion.div
    className={classes}
    initial={{ width: 0 }}
    whileInView={{ width: extent, transition: { duration: 1, delay } }}
    viewport={{ once: true }}
  ></motion.div>
);

export default AnimatedHorizontalBar;
