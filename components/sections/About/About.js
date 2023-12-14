import Wrapper from '@/components/common/Wrapper';
import React from 'react';

import SectionTitle from '@/components/common/SectionTitle';
import AnimatedHorizontalBar from '@/assets/vectors/AnimatedHorizontalBar';
import Logo from '@/assets/vectors/Logo';

import './About.css';
import MainTitle from '@/components/common/MainTitle';

const About = ({ title, aboutme }) => {
  return (
    <Wrapper class="about relative" customClassName="flex items-center">
      <MainTitle title={title} />
      <div className="mb-[8rem] lg:mb-0 md:mb-[4rem]">
        <SectionTitle className="lg:!pb-0">
          {aboutme.title.toUpperCase()}
        </SectionTitle>
        <div className="relative h-[2rem]">
          <AnimatedHorizontalBar
            classes="absolute h-[2rem] bg-[--accent]"
            extent="100vw"
          />
          <AnimatedHorizontalBar
            classes="absolute h-[2rem] bg-[--metal-20]"
            extent="100vw"
            delay={1}
          />
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-2 justify-between gap-[8rem] lg:grid-cols-1 lg:gap-0">
        <div className="basis-[60%]">
          {aboutme.content.map((p, index) => (
            <p key={index} className="mb-[3rem]">
              {p}
            </p>
          ))}
        </div>
        {/* <Image
          src={aboutme.image}
          width={1000}
          height={1000}
          alt=""
          className="w-[100%] object-cover"
        /> */}
        <Logo className="ml-auto my-auto w-[70%] h-[70%] stroke-[--metal-100] md:w-[50%]" />
      </div>
    </Wrapper>
  );
};

export default About;
