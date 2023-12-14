import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Logo from '@/assets/vectors/Logo';
import ArrowUp from '@/assets/vectors/ArrowUp';
import Close from '@/assets/vectors/Close';
import LanguageIcon from '@/assets/vectors/LanguageIcon';

const MobileNavigation = ({
  language,
  links,
  onClose,
  handleChangeLanguage,
}) => {
  const [activehash, setActivehash] = useState('');

  useEffect(() => {
    setActivehash(window.location.hash);
  }, []);

  const activeClass = (hash) =>
    activehash === hash ? 'border-b border-[--metal-80]' : '';

  const handleHashChange = (hash) => {
    window.location.hash = hash;
    setActivehash(hash);
    onClose();
  };

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="fixed left-0 top-0 h-screen w-[80%] bg-white z-10 p-10 flex flex-col justify-between shadow-lg"
    >
      <div className="flex items-center">
        <div className="relative flex items-center justify-center">
          <LanguageIcon
            width={60}
            height={60}
            className="absolute opacity-10"
            fill="#127369"
          />
          <button
            className="relative z-10 font-heading text-[--accent] text-[1.8rem] text-[--accent] font-bold cursor-pointer"
            onClick={handleChangeLanguage}
          >
            {language === 'en' ? 'RO' : 'EN'}
          </button>
        </div>
        <div className="ml-auto" onClick={onClose}>
          <Close />
        </div>
      </div>
      <ul className="flex gap-[2rem] flex-col my-auto uppercase font-heading text-[--metal-80] font-bold">
        <li
          className={`text-[3rem] flex gap-[2rem] items-center ${activeClass(
            ''
          )}`}
          onClick={() => handleHashChange('')}
        >
          <span>TOP</span>
          <ArrowUp />
        </li>
        {links.map((link, index) => (
          <li
            key={index}
            className={`text-[3rem] ${activeClass(link.href)}`}
            onClick={() => handleHashChange(link.href)}
          >
            <Link href={link.href} className="">
              {link.label[0].toUpperCase() + link.label.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <Logo className="ml-auto mt-auto stroke-[--metal-20]" />
    </motion.div>
  );
};

export default MobileNavigation;
