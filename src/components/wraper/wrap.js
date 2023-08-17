import React from "react";
import Dots from "../Dots/Dots";

export const wrap = (Component, idName, className) =>
  function HOC() {
    return (
      <>
        <div id={idName} className={`app__container ${className}`}>
          <div className="app__wrapper app__flex">
            <Component />
          </div>
          <Dots active={idName} />
        </div>
      </>
    );
  };
export default wrap;
