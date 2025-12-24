import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "button",
  loading = false,
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full h-12 lg:h-13.75 gap-2 flex justify-center text-base items-center p-2.75 text-center bg-[#9013FE] text-white font-medium border-none transition-colors ease-linear duration-200 rounded-[100px] hover:bg-[#6D28D9] ${
        disabled || loading
          ? "opacity-60 cursor-not-allowed hover:bg-gray-400"
          : ""
      } ${className}`}
    >
      {loading ? "Processing..." : children}
    </button>
  );
};

export default Button;
