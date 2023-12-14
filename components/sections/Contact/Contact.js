import { useState } from 'react';
import toast from 'react-hot-toast';

import Wrapper from '@/components/common/Wrapper';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import AnimatedHorizontalBar from '@/assets/vectors/AnimatedHorizontalBar';

import './Contact.css';
import MainTitle from '@/components/common/MainTitle';

const Contact = ({ title, contactme, cta }) => {
  const [inputs, setInputs] = useState({
    email: { value: '', isValid: false },
    name: { value: '', isValid: false },
    message: { value: '', isValid: true },
  });

  const [touched, setTouched] = useState({
    email: false,
    name: false,
    message: false,
  });

  const handleChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: { value: e.target.value },
    });
  };

  const handleFieldValid = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    setTouched({
      ...touched,
      [fieldName]: true,
    });

    if (fieldName === 'name') {
      const isValid = value.length >= 2;
      setInputs({
        ...inputs,
        [fieldName]: { value, isValid },
      });
    } else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      setInputs({
        ...inputs,
        [fieldName]: { value, isValid },
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loadingToast = toast.loading(contactme.formMessages.loading);

    const request = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(
        Object.keys(inputs).reduce((acc, key) => {
          acc[key] = inputs[key].value;
          return acc;
        }, {})
      ),
      headers: { 'Content-Type': 'application/json' },
    });

    if (request.ok) {
      toast.success('Thanks for reaching me. Will get back to you shortly!', {
        id: loadingToast,
      });
      setInputs({
        email: { value: '', isValid: false },
        name: { value: '', isValid: false },
        message: { value: '', isValid: true },
      });
      setTouched({
        email: false,
        name: false,
        message: false,
      });
    } else {
      toast.error('Message failed!', {
        id: loadingToast,
      });
    }
  };

  return (
    <Wrapper class="contact relative" customClassName="flex items-center">
      <MainTitle title={title} />
      <div id="contact" className="mb-[8rem] md:mb-[4rem]">
        <SectionTitle className="lg:!pb-0">
          {contactme.title.toUpperCase()}
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
      <div className="relative z-10 grid grid-cols-2 gap-[8rem] md:grid-cols-1 md:gap-[4rem]">
        <form
          className="flex-1 mt-[8px] flex flex-col gap-12"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="email"
              name="email"
              className={`rounded-sm border-[1px] border-[--metal-20] py-6 px-4 w-[100%] focus:outline-[--metal-60] ${
                !inputs.email.isValid && touched.email
                  ? 'border-[2px] border-red-600'
                  : ''
              }`}
              placeholder={contactme.labels.email}
              value={inputs.email.value}
              onChange={handleChangeInput}
              onBlur={handleFieldValid}
            />
            {!inputs.email.isValid && touched.email && (
              <p className="absolute -bottom-8 left-2 text-red-600 text-[12px]">
                {contactme.formMessages.errorEmail}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              name="name"
              className={`rounded-sm border-[1px] border-[--metal-20] py-6 px-4 w-[100%] focus:outline-[--metal-60] ${
                !inputs.name.isValid && touched.name
                  ? 'border-[2px] border-red-600'
                  : ''
              }`}
              placeholder={contactme.labels.name}
              value={inputs.name.value}
              onChange={handleChangeInput}
              onBlur={handleFieldValid}
            />
            {!inputs.name.isValid && touched.name && (
              <p className="absolute -bottom-8 left-2 text-red-600 text-[12px]">
                {contactme.formMessages.errorName}
              </p>
            )}
          </div>
          <textarea
            rows="6"
            name="message"
            className="rounded-sm border-[1px] border-[--metal-20] py-6 px-4 w-[100%] focus:outline-[--metal-60]"
            placeholder={contactme.labels.message}
            value={inputs.message.value}
            onChange={handleChangeInput}
          />
          <Button type="solid" label={[cta]} customClassName="w-max" />
        </form>
        <ul className="flex-1">
          {contactme.content.map((item, index) => {
            if (item.includes(':')) {
              const splitContent = item.split(':');
              return (
                <li key={index} className="mb-[3rem]">
                  {splitContent[0].trim()}:
                  <ul className="list-disc pl-[3rem]">
                    {splitContent[1].split('*').map((subitem, index) => (
                      <li key={index}>{subitem.trim()}</li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={index} className="mb-[3rem]">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Contact;
