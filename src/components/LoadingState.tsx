import React from "react";

const LoadingState: React.FC = () => {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center">
      <img
        src="https://app.flowvahub.com/assets/flowva_logo-xVpZI3-U.png"
        alt="logo"
        className="w-80 h-32 mb-6"
      />

      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>

      <p className="text-white text-lg font-medium">Loading, please wait...</p>
    </div>
  );
};

export default LoadingState;
