export const ListItem = ({ text }) => {
  return (
    <li className="max-w-[270px] leading-relaxed text-[#8892b0] before:absolute before:left-6 before:mr-4 before:text-sm before:text-[#64ffda] before:content-['▹'] lg:ml-2 lg:max-w-lg lg:text-base lg:before:left-0">
      {text}
    </li>
  );
};
