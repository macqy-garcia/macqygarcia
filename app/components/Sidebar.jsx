import { useState, useEffect, useCallback } from "react";

export const Sidebar = ({ isActive, setisActive }) => {
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setisActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const links = [
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Experience",
      url: "/experience",
    },
    {
      text: "Work",
      url: "/work",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-[#0D192D] p-7 transition duration-500 ease-in-out lg:hidden">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group z-50 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:transition hover:duration-300 hover:ease-in-out"
      >
        <path
          d="M23.125 2.52591C24.2853 1.85603 25.7147 1.85603 26.875 2.52591L43.5256 12.1392C44.6859 12.809 45.4006 14.047 45.4006 15.3868V34.6132C45.4006 35.953 44.6859 37.191 43.5256 37.8608L26.875 47.4741C25.7147 48.144 24.2853 48.144 23.125 47.4741L6.47437 37.8608C5.31411 37.191 4.59937 35.953 4.59937 34.6133V15.3868C4.59937 14.047 5.31411 12.809 6.47436 12.1392L23.125 2.52591Z"
          stroke="#90FBDC"
          strokeWidth="2.5"
          className="stroke-[#64ffda]"
        />
        <path
          d="M17.1378 18.9091H20.5511L24.1562 27.7045H24.3097L27.9148 18.9091H31.3281V32H28.6435V23.4794H28.5348L25.147 31.9361H23.3189L19.9311 23.4474H19.8224V32H17.1378V18.9091Z"
          fill="#90FBDC"
        />
      </svg>

      <div
        onClick={() => setisActive(!isActive)}
        className="z-50 flex cursor-pointer flex-col gap-2"
      >
        <div
          className={`h-[2px] w-7 bg-[#64ffda] ${
            isActive
              ? "translate-y-1.5 -rotate-45 transition"
              : "translate-y-0 rotate-0 transition"
          }`}
        />
        <div
          className={`h-[2px] w-7 bg-[#64ffda] ${
            isActive
              ? "-translate-y-1 rotate-45 transition"
              : "translate-y-0 rotate-0 transition"
          }`}
        />
      </div>

      <ul
        className={`fixed right-0 top-0 z-40 flex h-screen w-3/4 flex-col items-center justify-center gap-10 bg-[#112240] shadow-lg ${
          isActive
            ? "-translate-x-0 transition duration-300 ease-in-out"
            : "translate-x-full transition duration-300 ease-in-out"
        }`}
      >
        {links.map((link, index) => (
          <li
            key={link.text}
            className="flex cursor-pointer flex-col items-center justify-center gap-1 font-mono font-thin"
          >
            <span className="text-sm tracking-widest text-[#64ffda]">
              0{index + 1}.
            </span>
            <span className="text-sm font-thin tracking-widest text-[#ccd6f6] hover:text-[#64ffda]">
              {link.text}
            </span>
          </li>
        ))}
        <a
          href="https://drive.google.com/uc?export=download&id=16teuKsMcmUX23Oe7Xcjc3Xe9AvtFSEJH"
          target="_blank"
          className="relative left-0 top-0 z-10 mt-5 rounded border border-[#64ffda] bg-[#112240] px-10 py-4 font-mono text-sm text-[#64ffda] transition duration-300 ease-in-out hover:-translate-x-[1px] hover:-translate-y-[1px] hover:border-b-4 hover:border-r-4"
        >
          Resume
        </a>
      </ul>
      <div
        onClick={() => setisActive(!isActive)}
        className={`fixed left-0 top-0  bg-gray-400 bg-opacity-10 bg-clip-padding backdrop-blur-sm backdrop-filter
        ${
          isActive
            ? "h-screen w-screen opacity-100 transition duration-300 ease-in-out"
            : "-z-50 h-0 w-0 opacity-0 transition duration-100 ease-in-out"
        }}
        `}
      />
    </nav>
  );
};
