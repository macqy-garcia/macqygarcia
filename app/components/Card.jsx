import { NavLink } from "@remix-run/react";

export const Card = () => {
  return (
    <div className="flex w-full flex-col gap-7 bg-[#0C1F34] px-7 py-8 shadow-sm">
      <div>
        <p className="mb-2 font-mono text-xs font-thin tracking-wide text-[#64ffda]">
          Featured Project
        </p>
        <h3 className="text-xl font-semibold tracking-wide text-[#E6F1FF] hover:text-[#64ffda]">
          <NavLink to="/">Hyperia Theme</NavLink>
        </h3>
      </div>
      <p className="text-sm text-[#a8b2d1] lg:max-w-lg">
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
        more. Available on Visual Studio Marketplace, Package Control, Atom
        Package Manager, and npm.
      </p>
      <p className="font-mono text-xs text-[#a8b2d1]">
        VS Code Sublime Text Atom iTerm2 Hyper
      </p>
      <div className="flex items-center gap-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group cursor-pointer"
        >
          <g clipPath="url(#clip0_5_95)">
            <path
              d="M7.5 15.8334C3.33334 17.0834 3.33334 13.75 1.66667 13.3334M13.3333 18.3334V15.1084C13.3646 14.711 13.3109 14.3115 13.1759 13.9365C13.0408 13.5615 12.8274 13.2195 12.55 12.9334C15.1667 12.6417 17.9167 11.65 17.9167 7.10003C17.9165 5.93655 17.4689 4.8177 16.6667 3.97503C17.0466 2.95712 17.0197 1.83199 16.5917 0.833363C16.5917 0.833363 15.6083 0.541696 13.3333 2.0667C11.4233 1.54905 9.41 1.54905 7.5 2.0667C5.225 0.541696 4.24167 0.833363 4.24167 0.833363C3.81365 1.83199 3.78679 2.95712 4.16667 3.97503C3.35844 4.82395 2.91044 5.95292 2.91667 7.12503C2.91667 11.6417 5.66667 12.6334 8.28334 12.9584C8.00917 13.2417 7.79772 13.5795 7.66276 13.95C7.5278 14.3204 7.47234 14.7151 7.5 15.1084V18.3334"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_95">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group cursor-pointer"
        >
          <path
            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 2.5H17.5V7.5"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33334 11.6667L17.5 2.5"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export const SmallCard = () => {
  return (
    <div className="flex cursor-pointer flex-col gap-7 bg-[#0C1F34] px-5 py-8 shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-2">
      <div className="flex items-center justify-between">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.5 33.25C38.5 34.1783 38.1313 35.0685 37.4749 35.7249C36.8185 36.3813 35.9283 36.75 35 36.75H7C6.07174 36.75 5.1815 36.3813 4.52513 35.7249C3.86875 35.0685 3.5 34.1783 3.5 33.25V8.75C3.5 7.82174 3.86875 6.9315 4.52513 6.27513C5.1815 5.61875 6.07174 5.25 7 5.25H15.75L19.25 10.5H35C35.9283 10.5 36.8185 10.8687 37.4749 11.5251C38.1313 12.1815 38.5 13.0717 38.5 14V33.25Z"
            stroke="#90FBDC"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group cursor-pointer"
        >
          <path
            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 2.5H17.5V7.5"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33334 11.6667L17.5 2.5"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-wide text-[#E6F1FF] hover:text-[#64ffda]">
          <NavLink to="/">
            Integrating Algolia Search with WordPress Multisite
          </NavLink>
        </h3>
      </div>
      <p className="text-sm text-[#a8b2d1]">
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia
      </p>
      <p className="font-mono text-xs text-[#a8b2d1]">Algolia Node.js Astro</p>
    </div>
  );
};
