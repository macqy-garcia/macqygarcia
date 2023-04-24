import { NavLink } from "@remix-run/react";

export const Button = ({ text, link }) => {
  return (
    <button className="relative left-0 top-0 z-10 rounded border border-[#64ffda] bg-[#0D192D] px-5 py-4 font-mono text-sm text-[#64ffda] transition duration-300 ease-in-out hover:-translate-x-[1px] hover:-translate-y-[1px] hover:border-b-4 hover:border-r-4">
      <NavLink to={link}>{text}</NavLink>
    </button>
  );
};
