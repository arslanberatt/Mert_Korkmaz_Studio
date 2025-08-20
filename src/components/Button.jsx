import React from "react";

const Button = ({ styles }) => {
  return (
    <a
      href={`#hero`}
      className={`py-3 text-white rounded-lg border-red-700 px-5 bg-blue-gradient font-poppins font-medium text-[16px] outline-none ${styles}`}
    >
      Hemen Başla
    </a>
  );
};

export default Button;
