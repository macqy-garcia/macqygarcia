import { NavLink } from "@remix-run/react";

export const Tabs = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <ul className="mb-7 flex w-80 overflow-x-scroll text-center font-mono text-xs font-medium text-gray-500 sm:w-full lg:hidden ">
      {jobs.map((job, index) => (
        <li
          key={index}
          onClick={() => setCurrentJob(job.id)}
          className={`cursor-pointer hover:bg-blue-900/10
          ${
            currentJob === job.id
              ? "active inline-block whitespace-nowrap rounded-t border-b-2 border-[#64ffda] p-4 text-[#64ffda]"
              : "inline-block whitespace-nowrap rounded-t p-4 hover:text-[#64ffda]"
          }
          `}
        >
          {job.company}
        </li>
      ))}
    </ul>
  );
};
