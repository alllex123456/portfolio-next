import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import AnimatedHorizontalBar from '@/assets/vectors/AnimatedHorizontalBar';
import Button from '@/components/common/Button';

import './Project.css';
import ArrowLeft from '@/assets/vectors/ArrowLeft';

const Project = ({ language, project, onClose }) => {
  const pixelateVariants = {
    hidden: { opacity: 0, x: -100, filter: 'blur(10px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  };

  const links = [
    {
      href: 'https://zent.alextanase.dev/?user=demo@user.zent&password=demoP@ssword',
      label: 'LIVE DEMO',
      customClasses: 'font-bold underline',
    },
    {
      href: 'https://github.com/alllex123456/ZenT-Freelance-frontend',
      label: 'Github - Frontend',
    },
    {
      href: 'https://github.com/alllex123456/ZenT-Freelance-backend',
      label: 'Github - Backend',
    },
  ];

  return (
    <motion.div
      variants={pixelateVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: 'tween' }}
      exit={{ x: -100, opacity: 0 }}
      className="details fixed top-0 left-0 w-[100%] h-[100%] bg-black overflow-y-auto overflow-x-hidden z-50"
    >
      <div className="max-w-[140rem] py-[4rem] px-[2rem] mx-auto md:py-10">
        <Button
          type="outline"
          label={language.buttons.back}
          onClick={onClose}
        />
        <div className="flex gap-4 flex-wrap justify-between items-center mb-10 mt-[8rem] md:mt-[3rem] md:mb-[2rem]">
          <h4 className="">{project.title}</h4>
          <div className="flex gap-4">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="rounded bg-[--metal-10] pt-3 pb-2 px-8 flex items-center md:py-2 md:px-4 md:text-[1.2rem]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ul className="flex flex-col gap-6 list-disc ml-[4rem]">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target="_blank"
                className={`text-[--accent] hover:drop-shadow-lg  ${link.customClasses}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mb-[6rem] bg-[--metal-100] py-10 md:mb-0">
        <Image
          src="/images/zent-dashboard.png"
          width={4000}
          height={4000}
          alt="Zent screenshot"
          className="w-[140rem] p-[2rem] rounded-[2px] mx-auto xl:w-screen object-cover"
          style={{ objectPosition: '50% 0%' }}
        />
      </div>

      <div className="p-[2rem] w-[140rem] mx-auto xl:w-screen">
        <div className="my-[8rem] md:my-[2rem]">
          {project.details.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr] gap-[6rem] items-center mb-[8rem] lg:grid-cols-1 md:gap-10 md:mb-[4rem]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.image}
                    alt="zent screenshot"
                    width={1000}
                    height={700}
                    className="border-[--metal-20] border-[2px] rounded-[2px]"
                  />
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <AnimatedHorizontalBar
                    classes="bg-[--metal-20] h-[1rem] rounded"
                    extent="100%"
                  />
                  <h6 className="uppercase tracking-[4px] font-bold text-[2.2rem] mb-[2rem]">
                    {item.title}
                  </h6>
                  <ul className="list-disc ml-[4rem]">
                    {item.content.map((subitem, index) => (
                      <li key={index} className="mb-4">
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
