export const Base = ({ text, variant }) => (
  <span
    className={`mr-1 text-sm sm:text-base sm:leading-none ${
      variant === "primary" ? "text-[#8892b0]" : "text-[#64ffda]"
    }`}
  >
    {text}
  </span>
);
