export const Base = ({ text, variant }) => (
  <span
    className={`mr-1 text-sm ${
      variant === "primary" ? "text-[#8892b0]" : "text-[#64ffda]"
    }`}
  >
    {text}
  </span>
);
