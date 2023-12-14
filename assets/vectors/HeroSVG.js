import React from 'react';
import { motion } from 'framer-motion';

function HeroSVG({ className }) {
  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 238.5 547"
      className={className}
    >
      <motion.circle
        cx="169"
        cy="15"
        r="15"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      />
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.circle cx="143.5" cy="66" r="20" fill="#12403b" />
        <motion.circle cx="143.5" cy="66" r="9" fill="#fff" />
      </motion.g>
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.circle cx="108" cy="136.5" r="25" fill="#12403b" />
        <motion.circle cx="108" cy="136.5" r="9" fill="#fff" />
      </motion.g>
      <motion.rect
        x="128"
        y="129.5"
        width="70"
        height="15"
        rx="1.29"
        ry="1.29"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.circle cx="64.5" cy="212" r="25" fill="#12403b" />
        <motion.circle cx="64.5" cy="212" r="9" fill="#fff" />
      </motion.g>
      <motion.rect
        x="83.5"
        y="204"
        width="134"
        height="15"
        rx="1.79"
        ry="1.79"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.circle
        cx="225.5"
        cy="212"
        r="13"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.circle cx="18" cy="276" r="18" fill="#12403b" />
        <motion.circle cx="17.5" cy="276.5" r="6.5" fill="#fff" />
      </motion.g>
      <motion.rect
        x="31"
        y="269"
        width="176"
        height="15"
        rx="2.05"
        ry="2.05"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.circle cx="220" cy="276" r="18" fill="#12403b" />
        <motion.circle cx="220.5" cy="276.5" r="6.5" fill="#fff" />
      </motion.g>
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.circle cx="201" cy="341" r="25" fill="#12403b" />
        <motion.circle cx="201" cy="341" r="9" fill="#fff" />
      </motion.g>
      <motion.rect
        x="47"
        y="333"
        width="134"
        height="15"
        rx="1.79"
        ry="1.79"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.circle
        cx="41"
        cy="341"
        r="13"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1 }}
      />
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.circle cx="159" cy="412" r="25" fill="#12403b" />
        <motion.circle cx="159" cy="412" r="9" fill="#fff" />
      </motion.g>
      <motion.rect
        x="69"
        y="405"
        width="70"
        height="15"
        rx="1.29"
        ry="1.29"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.circle
        cx="99"
        cy="532"
        r="15"
        fill="#12403b"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <motion.g
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        <motion.circle cx="123" cy="481" r="20" fill="#12403b" />
        <motion.circle cx="123" cy="481" r="9" fill="#fff" />
      </motion.g>
    </svg>
  );
}

export default HeroSVG;
