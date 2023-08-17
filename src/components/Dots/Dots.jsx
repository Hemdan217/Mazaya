import React from "react";

export default function Dots({ active }) {
  return (
    <>
      <div className="app__navigation">
        {["home", "message", "about", "services", "contact"].map(
          (item, idx) => (
            <a
              key={idx}
              className="app__navigation-dot"
              href={`#${item}`}
              style={active === item ? { backgroundColor: "blue" } : {}}
            />
          )
        )}
      </div>
    </>
  );
}
