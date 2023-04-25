import { NavLink } from "@remix-run/react";

export const Tabs = () => {
  const jobs = [
    {
      company: "JoyRide PH",
      url: "/",
    },
    {
      company: "DILG PH",
      url: "/dilg",
    },
    {
      company: "Informatics",
      url: "/informatics",
    },
    {
      company: "APSAS",
      url: "/apsas",
    },
    {
      company: "AFILIATE",
      url: "/afiliate",
    },
  ];
  return (
    <ul className="mb-7 flex w-80 overflow-x-scroll text-center font-mono text-xs font-medium text-gray-500 ">
      {jobs.map((job, index) => (
        <NavLink
          key={index}
          to={job.url}
          className={({ isActive }) =>
            isActive
              ? "active inline-block whitespace-nowrap rounded-t border-b-2 border-[#64ffda]  p-4 text-[#64ffda]"
              : "inline-block whitespace-nowrap rounded-t p-4 hover:text-[#64ffda]" +
                " hover:bg-blue-900/10"
          }
        >
          {job.company}
        </NavLink>
      ))}
    </ul>
  );
};
