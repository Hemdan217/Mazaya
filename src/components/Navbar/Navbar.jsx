import React, { useState } from "react";
import "./Navbar.scss";

import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "message", "about", "services", "contact"].map(
          (item, idx) => (
            <li key={idx} className="p-text app__flex ">
              <div />
              <a href={`#${item}`} style={{ fontSize: "16px" }}>
                {item}
              </a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menue">
        <AiOutlineMenu
          onClick={() => {
            settoggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AiOutlineClose
              onClick={() => {
                settoggle(false);
              }}
            />
            <ul>
              {["home", "message", "about", "services", "contact"].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className="p-text app__flex"
                    onClick={() => {
                      settoggle(false);
                    }}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
