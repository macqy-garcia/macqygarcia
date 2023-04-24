export const SectionHeader = ({ before, title }) => {
  return (
    <h2
      className={`text-2xl font-bold text-[#ccd6f6] before:mr-1 before:font-mono before:text-sm before:font-normal before:text-[#64ffda] ${before}`}
    >
      {title}
    </h2>
  );
};
