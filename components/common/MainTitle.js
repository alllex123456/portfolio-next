import React from 'react';

const MainTitle = ({ title }) => {
  return (
    <p
      className="absolute -bottom-[10rem] -left-[10rem] text-[36rem] uppercase font-heading font-bold text-[--metal-5] -z-1 md:hidden"
      style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {title}
    </p>
  );
};

export default MainTitle;
