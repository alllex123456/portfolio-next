import React from 'react';

const Button = ({ size, type, label, onClick, className }) => {
  const typeClasses =
    type === 'solid'
      ? 'bg-[--metal-100] text-[--metal-20] hover:bg-[--accent]'
      : type === 'outline'
      ? 'bg-transparent text-[--metal-100] border-2 border-[--metal-100] hover:border-[--accent] hover:text-[--accent]'
      : '';

  const sizeClass =
    size === 'small'
      ? 'text-[1.2rem] px-12 py-2'
      : 'text-[1.4rem] px-16 py-2 md:px-6 md:text-[1.4rem]';

  const ids = [1, 2, 3, 4];

  return (
    <button
      className={`${typeClasses} ${sizeClass} ${className} transition delay-100 inline-flex items-center justify-center rounded-[2px] font-bold w-fit ${
        label.length > 0 ? 'gap-4' : ''
      }`}
      onClick={onClick}
    >
      {label.map((item, index) => {
        return (
          <span
            key={typeof item === 'string' ? item : index}
            className={`${
              typeof item === 'string' && size !== 'small'
                ? 'pt-[2px]'
                : 'pt-[4px]'
            } ${typeof item !== 'string' ? 'pb-2' : ''}`}
          >
            {typeof item === 'string' ? item.toUpperCase() : item}
          </span>
        );
      })}
    </button>
  );
};

export default Button;
