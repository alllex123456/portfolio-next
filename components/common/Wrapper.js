import React from 'react';

const Wrapper = (props) => {
  return (
    <section className={`section-size ${props.class} ${props.customClassName}`}>
      <div className="section-align">{props.children}</div>
    </section>
  );
};

export default Wrapper;
