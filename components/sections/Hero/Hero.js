import { motion } from 'framer-motion';

import Button from '@/components/common/Button';
import ArrowDown from '@/assets/vectors/ArrowDown';
import Header from '@/components/common/Header';
import Link from 'next/link';
import HeroSVG from '@/assets/vectors/HeroSVG';

import './Hero.css';

const Hero = ({ heading, cta, links, language, handleChangeLanguage }) => {
  const formattedTitle =
    language === 'en'
      ? heading
          .split(' ')
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(' ')
      : heading.slice(0, 1).toUpperCase() + heading.slice(1);

  const splitTitle = formattedTitle.split(' ');

  const variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen w-[100%] lg:min-h-0 hero overflow-hidden">
      <div className="max-w-[140rem] mx-auto px-[2rem]">
        <Header links={links} handleChangeLanguage={handleChangeLanguage} />
        <div className="h-[90vh] grid grid-cols-[2fr_1fr] gap-10 items-center justify-between md:grid-cols-1 md:items-start">
          <div className="md:text-center md:mt-[15vh]">
            <h1>
              {splitTitle.map((word, index) => (
                <motion.span
                  key={word}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ display: 'inline-block', marginRight: '16px' }}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <Link href="#capabilities">
                <Button customClassName="mt-10" type="outline" label={cta} />
              </Link>
            </motion.div>
          </div>
          <HeroSVG className="justify-self-end w-[30rem] md:opacity-5 md:absolute md:left-[50%] md:translate-x-[-50%] md:w-[80vw] md:h-[90vh]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
