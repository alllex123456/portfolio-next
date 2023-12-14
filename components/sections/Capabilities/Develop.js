import { motion } from 'framer-motion';

import Wrapper from '@/components/common/Wrapper';
import SectionTitle from '@/components/common/SectionTitle';
import AnimatedVerticalBar from '@/assets/vectors/AnimatedVerticalBar';
import AnimatedHorizontalBar from '@/assets/vectors/AnimatedHorizontalBar';

import './Develop.css';

const Develop = ({ develop }) => {
  const { frontend, backend, database, tools } = develop;

  return (
    <Wrapper class="develop" customClassName="flex items-center">
      <div className="grid grid-cols-[1fr_1fr] gap-10 justify-between lg:grid-cols-1">
        <div className="relative">
          <SectionTitle>{develop.title.toUpperCase()}</SectionTitle>
          <AnimatedVerticalBar
            classes="absolute left-2.5 top-[7.6rem] w-[2rem] bg-[--accent] lg:hidden"
            extent="80%"
          />
          <AnimatedVerticalBar
            classes="absolute left-2.5 top-[7.6rem] w-[2rem] bg-[--metal-40] lg:hidden"
            extent="90%"
            delay={0.5}
          />
          <AnimatedVerticalBar
            classes="absolute left-[4rem] top-[7.6rem] w-[2rem] bg-[--metal-80] lg:hidden"
            extent="70%"
            delay={0.5}
          />
          <AnimatedHorizontalBar
            classes="absolute left-0 top-[7rem] h-[2rem] bg-[--accent] hidden md:block"
            extent="100vw"
          />
          <AnimatedHorizontalBar
            classes="absolute left-0 top-[7rem] h-[2rem] bg-[--metal-20] hidden md:block"
            extent="100vw"
            delay={1}
          />
        </div>
        <ul className="flex flex-col gap-[10rem] md:gap-[4rem] md:py-[3rem]">
          {[frontend, backend, database, tools].map((item, index) => (
            <motion.li
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true }}
              key={index}
              className="flex gap-[3rem] justify-between md:flex-col md:gap-[1rem] bg-[--metal-10] rounded-[2px] p-10"
            >
              <h5 className="flex-1 leading-tight border-r-[2px] border-[--metal-40]">
                {item.title.toUpperCase()}
              </h5>
              <ul className="flex-1 w-[40rem] md:w-auto">
                {item.content.map((subitem, index) => (
                  <li key={index}>{subitem}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Develop;
