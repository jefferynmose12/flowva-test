import React from "react";

interface PaperProps {
  children: React.ReactNode;
  highlight?: boolean;
}

const Paper = ({ children, highlight = false }: PaperProps) => {
  return (
    <div
      className={`
        shadow-[0_5px_15px_rgba(0,0,0,0.05)]
        transition-all
        rounded-2xl
        hover:translate-y-1.25
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]
        border
        overflow-hidden
        duration-200
        ${
          highlight
            ? "border-[#f3f4f6] hover:border-[#9013fe]"
            : "border-[#f3f4f6]"
        }
      `}
    >
      {children}
    </div>
  );
};

export default Paper;
