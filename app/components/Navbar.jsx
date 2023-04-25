import { useEffect, useCallback } from "react";
import { NavLink } from "@remix-run/react";

export const Navbar = ({ isActive, setisActive }) => {
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
    <nav className="fixed -top-7 left-0 z-50 hidden w-full items-center justify-between bg-[#0D192D]/50 backdrop-blur-sm backdrop-filter lg:flex lg:px-12 lg:py-3">
      <NavLink to="/">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
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
      </NavLink>

      <ul className="flex items-center justify-evenly gap-7">
        {links.map((link, index) => (
          <li
            key={link.text}
            className="flex cursor-pointer items-center justify-center gap-1 font-mono font-thin"
          >
            <span className="text-xs tracking-widest text-[#64ffda]">
              0{index + 1}.
            </span>
            <span className="text-xs font-thin tracking-widest text-[#ccd6f6] hover:text-[#64ffda]">
              {link.text}
            </span>
          </li>
        ))}
        <a
          className="rounded border border-[#64ffda] bg-[#0D192D] px-10 py-4 font-mono text-sm text-[#64ffda] transition duration-300 ease-in-out hover:-translate-x-[1px] hover:-translate-y-[1px] hover:border-b-4 hover:border-r-4 lg:px-4 lg:py-2"
          href="https://drive.google.com/uc?export=download&id=16teuKsMcmUX23Oe7Xcjc3Xe9AvtFSEJH"
          target="_blank"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
};
