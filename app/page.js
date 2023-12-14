'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

import About from '@/components/sections/About/About';
import Design from '@/components/sections/Capabilities/Design';
import Develop from '@/components/sections/Capabilities/Develop';
import Hero from '@/components/sections/Hero/Hero';
import Contact from '@/components/sections/Contact/Contact';
import Projects from '@/components/sections/Work/Projects';
import Divider from '@/components/common/Divider';
import Footer from '@/components/sections/Footer/Footer';

import en from '../language/en';
import ro from '../language/ro';

export default function Home() {
  const lang = useSearchParams();
  const [language, setLanguage] = useState(lang.get('lang'));
  const router = useRouter();

  useEffect(() => {
    router.push(
      Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Bucharest'
        ? '?lang=ro'
        : '?lang=en'
    );

    setLanguage(
      Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Bucharest'
        ? ro
        : en
    );
  }, []);

  const handleChangeLanguage = (lang) =>
    lang === 'en' ? setLanguage(en) : setLanguage(ro);

  if (typeof language !== 'object' || language === null) return;

  return (
    <div>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#3924a4',
            },
          },
        }}
      />
      <Hero
        heading={language.hero.title}
        cta={language.hero.cta}
        links={language.navigation.links}
        language={language.label}
        handleChangeLanguage={handleChangeLanguage}
      />
      <Divider id="capabilities" />
      <Design title={language.titles.capabilities} design={language.design} />
      <Divider />
      <Develop develop={language.develop} />
      <Divider id="work" />
      <Projects title={language.titles.work} language={language} />
      <Divider id="about" />
      <About title={language.titles.about} aboutme={language.aboutme} />
      <Divider />
      <Contact
        title={language.titles.contact}
        contactme={language.contactme}
        cta={language.buttons.send}
      />
      <Divider />
      <Footer footer={language.footer} />
    </div>
  );
}
