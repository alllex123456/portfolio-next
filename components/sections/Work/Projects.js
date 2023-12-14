import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import Wrapper from '@/components/common/Wrapper';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import AnimatedHorizontalBar from '@/assets/vectors/AnimatedHorizontalBar';
import Project from './Project';

import './Projects.css';
import MainTitle from '@/components/common/MainTitle';

const Projects = ({ title, language }) => {
  const [openProject, setOpenProject] = useState({
    show: false,
    payload: { stack: [], details: [] },
  });

  const handleOpenProject = (payload) =>
    setOpenProject({ show: true, payload });

  useEffect(() => {
    if (openProject.show) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [openProject.show]);

  return (
    <div>
      <AnimatePresence>
        {openProject.show && (
          <Project
            key="projectPage"
            language={language}
            project={openProject.payload}
            onClose={() =>
              setOpenProject({
                show: false,
                payload: { stack: [], details: [] },
              })
            }
          />
        )}
      </AnimatePresence>
      {language.selectedwork.map((project, index) => {
        return (
          <Wrapper
            key={index}
            class="work relative"
            customClassName="flex items-center"
          >
            <MainTitle title={title} />
            <div className="mb-[8rem] md:mb-[5rem]">
              <SectionTitle className="lg:!pb-0">
                {language.selectedWorkTitle.toUpperCase()}
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

            <div className="relative z-10 flex items-center gap-5 justify-between md:flex-wrap md:items-center">
              <div className="md:mb-10">
                <h5>{project.title}</h5>
                <p className="mb-[5rem] md:mb-[2rem]">{project.subtitle}</p>
                <p className="font-bold capitalize">{project.highlights}</p>
                <ul className="mb-[5rem] list-disc pl-[3rem] md:mb-[2rem]">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button
                  type="solid"
                  label={[language.buttons.details]}
                  onClick={() => {
                    handleOpenProject(project);
                  }}
                />
              </div>

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
                className="w-[70%] md:mx-auto md:w-[100%]"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={4000}
                  height={4000}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Projects;
