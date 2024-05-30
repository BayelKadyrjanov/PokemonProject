import React from "react";

export const Skeletons = () => {
  return (
    <div className="w-full">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="w-full h-64 bg-gray-300 rounded mb-4 animate-pulse"
        ></div>
      ))}
    </div>
  );
};
