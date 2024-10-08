import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      type="button" // Ensure it behaves correctly in forms
      aria-pressed={isSelected} // Accessibility feature
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`} // Add transition effects
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
