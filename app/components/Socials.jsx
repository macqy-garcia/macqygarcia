export const Socials = () => {
  return (
    <section className="flex w-full items-center justify-center gap-8">
      {/* Github */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group cursor-pointer"
      >
        <g clipPath="url(#clip0_5_256)">
          <path
            d="M9 18.9999C4 20.4999 4 16.4999 2 15.9999M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999"
            className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_256">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* Instagram */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group cursor-pointer"
      >
        <path
          d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4078 15.9057C10.5771 15.7721 9.80976 15.3799 9.21484 14.785C8.61991 14.1901 8.22773 13.4227 8.09406 12.592C7.9604 11.7614 8.09206 10.9097 8.47032 10.1582C8.84858 9.40667 9.45418 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 6.5H17.51"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Twitter */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group cursor-pointer"
      >
        <path
          d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* LinkedIn */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group cursor-pointer"
      >
        <path
          d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9H2V21H6V9Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* CodePen */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group cursor-pointer"
      >
        <path
          d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V15.5"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 8.5L12 15.5L2 8.5"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 15.5L12 8.5L22 15.5"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2V8.5"
          className="stroke-[#CDD6F3] group-hover:stroke-[#64ffda]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </section>
  );
};
