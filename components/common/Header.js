import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

import Link from 'next/link';
import Logo from '../../assets/vectors/Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { AnimatePresence } from 'framer-motion';

const Header = ({ links, handleChangeLanguage }) => {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang');
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', duration: 1 }}
      className="pt-[2rem] flex justify-between items-center md:pt-[1rem]"
    >
      {openMobileNav && (
        <div
          className="fixed left-0 top-0 bg-black opacity-80 h-screen w-screen -z-5"
          onClick={() => setOpenMobileNav(false)}
        ></div>
      )}
      <Link href={`/?lang=${lang}`}>
        <Logo className="stroke-[--metal-100] md:w-[3rem]" />
      </Link>
      <DesktopNavigation lang={lang} links={links} />
      <div onClick={() => setOpenMobileNav(true)} className="hidden md:block">
        <svg
          width="26"
          height="11"
          viewBox="0 0 26 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5H25M1 9.5H25"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <AnimatePresence>
        {openMobileNav && (
          <MobileNavigation
            links={links}
            onClose={() => setOpenMobileNav(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
