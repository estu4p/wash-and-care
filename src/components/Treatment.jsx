import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Treatment = (props) => {
  const { icon, title, desc } = props;
  return (
    <div className="flexCenter flex-col border-b-2 border-biru-100 py-4 max-w-40 text-center">
      <FontAwesomeIcon
        icon={icon}
        // style={{ width: "48px", height: "48px" }}
        className="text-biru-700 w-8 h-8 sm:w-12 sm:h-12 "
      />
      <span className="text-biru-700 text-base sm:text-lg font-semibold">
        {title}
      </span>
      <p className="text-xs text-biru-200 leading-none">{desc}</p>
    </div>
  );
};

export default Treatment;
