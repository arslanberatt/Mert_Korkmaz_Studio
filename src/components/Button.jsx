import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-3 text-white px-5 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none ${styles}`}
    >
      Hemen Başla
    </button>
  );
};

export default Button;
