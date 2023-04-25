export const SectionHeader = ({ before, title }) => {
  return (
    <div className="flex w-full items-center gap-2 py-7">
      <h2
        className={`whitespace-nowrap text-2xl font-bold text-[#ccd6f6] before:mr-1 before:font-mono before:text-sm before:font-normal before:text-[#64ffda] sm:text-3xl sm:before:mr-2 sm:before:text-base ${before}`}
      >
        {title}
      </h2>
      <div className="h-[1px] w-full rounded-full bg-gray-200/10" />
    </div>
  );
};
