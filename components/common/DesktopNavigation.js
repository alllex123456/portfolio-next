import React from 'react';
import Link from 'next/link';

const DesktopNavigation = ({ links, lang }) => {
  return (
    <ul className="flex gap-[8rem] justify-evenly items-center md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="font-bold transition delay-100 hover:text-[--accent]"
          >
            {link.label[0].toUpperCase() + link.label.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;
