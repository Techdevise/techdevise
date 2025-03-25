import React, {useState} from "react";
import TouchModal from "./TouchModal";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-[172px] h-[56px] bg-white border-2  text-green-700 text-lg font-bold rounded-xl shadow-md hover:text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
      >
        Get in Touch
      </button>

      {isModalOpen && <TouchModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Button;

