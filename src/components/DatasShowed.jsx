import React from "react";

const DatasShowed = ({ dataToShow, nameToShow, urlPicture }) => {
  return (
    <div className="data-show">
      <img src={urlPicture} width="64" height="64" loading="lazy" alt="logo" />
      <div className="infos">
        {nameToShow === "Calories" ? (
          <span>{dataToShow}kCal</span>
        ) : (
          <span>{dataToShow}g</span>
        )}
        <p>{nameToShow}</p>
      </div>
    </div>
  );
};

export default DatasShowed;
