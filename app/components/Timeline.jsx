import { NavLink } from "@remix-run/react";

export const Timeline = () => {
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
    <ul className="mb-7 hidden w-44 font-mono text-xs font-medium text-gray-500 lg:relative lg:flex lg:flex-col lg:gap-3">
      {jobs.map((job, index) => (
        <NavLink
          key={index}
          to={job.url}
          className={({ isActive }) =>
            isActive
              ? "active z-10 inline-block whitespace-nowrap border-l-2 border-[#64ffda] px-6 py-3 text-[#64ffda]"
              : "inline-block whitespace-nowrap px-6 py-3 hover:text-[#64ffda]" +
                " hover:bg-blue-900/10"
          }
        >
          {job.company}
        </NavLink>
      ))}
    </ul>
  );
};
