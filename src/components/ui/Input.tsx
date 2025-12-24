import { useState } from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
}

const Input = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col mb-3">
      <label className="text-gray-700 mb-1 font-medium">{label}</label>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full placeholder:text-gray-400 text-gray-700 border text-base py-2.5 px-3.5 pr-11 transition-all ease-linear duration-200 rounded-md outline-none ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-[#EDE9FE] focus:border-[#9013fe]"
          }`}
        />

        {/* 👁 Password toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <span className="text-gray-400 text-xs">Hide</span>
            ) : (
              <span className="text-gray-400 text-xs">Show</span>
            )}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
