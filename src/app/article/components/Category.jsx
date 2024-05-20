import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = ({ title, color, arrow }) => {
  return (
    <div
      className={`py-2 pl-4 pr-2 rounded-md w-fit cursor-pointer
            ${color}`}
    >
      <span className="">{title}</span>
      {arrow && <FontAwesomeIcon icon={faArrowRight} width={32} height={32} />}
    </div>
  );
};

export default Category;
