import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/vectors/Logo';

const Footer = ({ footer }) => {
  const links = [
    {
      href: 'mailto:alex@arx-logicwave.ro',
      icon: footer.mailLogo,
      label: 'alex@arx-logicwave.ro',
    },
    {
      href: 'tel:40749324651',
      icon: footer.phoneLogo,
      label: '+40-749-324-651',
    },
    {
      href: 'https://www.linkedin.com/in/alexandru-tanase-40709727a/',
      icon: footer.linkedinLogo,
      label: footer.myLinkedin,
    },
    {
      href: 'https://github.com/alllex123456',
      icon: footer.githubLogo,
      label: 'Github',
    },
  ];
  return (
    <footer className="relative z-10 bg-[--metal-100] text-white lg:py-[2rem] md:py-[1rem]">
      <div className="max-w-[140rem] min-h-[20rem] mx-auto xl:w-screen p-[2rem] grid grid-cols-2 items-center md:justify-start md:text-[1.6rem] md:grid-cols-1 md:justify-items-start md:gap-10">
        <div className="flex flex-col gap-10">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              className="flex gap-4 items-center"
            >
              <Image src={link.icon} width={30} height={30} alt={link.label} />
              <span className="mt-2">{link.label}</span>
            </Link>
          ))}
        </div>
        <Logo className="ml-auto stroke-[--metal-20]" />
      </div>
    </footer>
  );
};

export default Footer;
