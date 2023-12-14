const SectionTitle = ({ children, className }) => {
  return (
    <h2
      className={`font-heading break-word leading-none text-[--metal-100] text-[7.6rem] font-bold lg:pt-[2rem] lg:pb-[4rem] md:pt-[2rem] md:pb-[4rem] ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
