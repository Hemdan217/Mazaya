import React from "react";
import { easeInOut, motion } from "framer-motion";
import { client, urlFor } from "../../client.js";
import wrap from "../../components/wraper/wrap.js";
import { useState } from "react";
import { useEffect } from "react";
import "./Services.scss";
import MotionWrap from "../../components/wraper/MotionWrap.js";
const Services = () => {
  const [Services, setServices] = useState([]);
  const [experience, setexperience] = useState([]);
  useEffect(() => {
    const queryServices = '*[_type=="Services"]';
    const queryExperience = '*[_type=="experiences"]';
    client
      .fetch(queryServices)
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    client
      .fetch(queryExperience)
      .then((data) => {
        setexperience(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <h2 className="head-text">Our Services</h2>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="about__item"
        style={{ width: "70" }}
        whileHover={{ scale: [1, 0.9] }}
      >
        <p className="p-text" style={{ fontSize: "16px" }}>
          <span className="bold-text">Mazaya Recruitment</span> is dedicated to
          finding the right workforce for both Government and private sectors.
          At the present, Mazaya Recruitment has almost 500+ engineers,
          Technicians, Administrative clerks/secretaries, hotel staff, oil & gas
          staff, aviation, shipbuilding, various construction and cleaning
          workers under our sponsorship. The principle is to mobilize the
          workers on short, medium and long term contracts as required by the
          clients.
        </p>
      </motion.div>

      <div className="row w-70  mb-2">
        <div className="col-8">
          MANPOWER SUPPLY We are specialize in providing manpower for onshore &
          offshore, Oil & Gas, building construction, road construction, and all
          other sectors.
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row w-70  mb-2">
        <div className="col-2"></div>
        <div className="col-8">
          {" "}
          MANPOWER SUPPLY We are specialize in providing manpower for onshore &
          offshore, Oil & Gas, building construction, road construction, and all
          other sectors.
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row w-100 mb-2">
        <div className="col-4"></div>

        <div className="col-8">
          {" "}
          MANPOWER SUPPLY We are specialize in providing manpower for onshore &
          offshore, Oil & Gas, building construction, road construction, and all
          other sectors.
        </div>
      </div>

      <div class="custom-shape-divider-bottom-1692252277">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default wrap(
  MotionWrap(Services, "app__Services"),
  "services",
  "app__whitebg"
);
