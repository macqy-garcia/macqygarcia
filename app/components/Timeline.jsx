export const Timeline = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <ul className="mb-7 hidden w-44 font-mono text-xs font-medium text-gray-500 lg:relative lg:flex lg:flex-col lg:gap-3">
      {jobs.map((job, index) => (
        <li
          key={index}
          to={job.url}
          onClick={() => setCurrentJob(job.id)}
          className={`cursor-pointer hover:bg-blue-900/10 ${
            currentJob === job.id
              ? "active z-10 inline-block whitespace-nowrap border-l-2 border-[#64ffda] px-6 py-3 text-[#64ffda]"
              : "inline-block whitespace-nowrap px-6 py-3 hover:text-[#64ffda]"
          }`}
        >
          {job.company}
        </li>
      ))}
    </ul>
  );
};
