import { NavLink } from "@remix-run/react";
import { ListItem } from "./ListItem";

export const WorkItem = ({ job, currentJob, setCurrentJob }) => {
  const { title, company, dateRange, descriptions } = job;

  return (
    currentJob === job.id && (
      <div>
        <div className="space-y-1 pt-2">
          <h3>
            <span className="text-xl text-[#ccd6f6]">{title}</span>
            <span className="mx-1 text-[#64ffda]">@</span>
            <NavLink
              to="https://joyride.com.ph/"
              className="mx-1 text-xl text-[#64ffda]"
            >
              {company}
            </NavLink>
          </h3>
          <p className="font-mono text-xs text-[#8892b0]">{dateRange}</p>
        </div>
        <ul className="relative flex flex-col gap-4 p-5 text-sm font-light">
          {descriptions.map((description, index) => (
            <ListItem key={index} text={description} />
          ))}
        </ul>
      </div>
    )
  );
};
