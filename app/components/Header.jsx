export const Header = ({ text, variant }) => (
  <h2
    className={`text-3xl font-bold sm:text-[43.5px] sm:leading-none sm:tracking-wide md:text-[51.5px] lg:text-[70px] ${
      variant === "primary" ? "text-[#ccd6f6]" : "text-[#8892b0]"
    }`}
  >
    {text}
  </h2>
);
