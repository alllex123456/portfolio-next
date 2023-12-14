import React from 'react';
import { motion } from 'framer-motion';

const AnimatedVerticalBar = ({ classes, extent, delay }) => (
  <motion.div
    className={classes}
    initial={{ height: 0 }}
    whileInView={{ height: extent, transition: { duration: 1.5, delay } }}
    viewport={{ once: true }}
  ></motion.div>
);

export default AnimatedVerticalBar;
