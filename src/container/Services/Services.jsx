import React from "react";
import { easeInOut, motion } from "framer-motion";
import { images } from "../../constants";
import wrap from "../../components/wraper/wrap.js";
import { useState } from "react";
import { useEffect } from "react";
import "./Services.scss";
import MotionWrap from "../../components/wraper/MotionWrap.js";
const Services = () => {
  return (
    <div>
      <h2 className="head-text">
        <span>
          Our Services
          <br />
        </span>
      </h2>

      <div className="app__profile ">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="about__item"
        >
          <p className="p-text " style={{ fontSize: "16px" }}>
            <span className="bold-text w-50">Mazaya Recruitment.</span> is
            dedicated to finding the right workforce for both Government and
            private sectors. At the present, Mazaya Recruitment has almost 500+
            engineers, Technicians, Administrative clerks/secretaries, hotel
            staff, oil & gas staff, aviation, shipbuilding, various construction
            and cleaning workers under our sponsorship. The principle is to
            mobilize the workers on short, medium and long term contracts as
            required by the clients.
          </p>{" "}
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="about__item text-center"
          style={{ display: "inline-block", width: "25%", padding: "5px" }}
        >
          <img src={images.img1} alt="aboutImg" />
          <p className="bold-text text-center mt-2">MANPOWER SUPPLY</p>
          <p className="p-text text-center">
            We are specialize in providing manpower for onshore & offshore, Oil
            & Gas, building construction, road construction, and all other
            sectors.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="about__item text-center"
          style={{ display: "inline-block", width: "25%", padding: "5px" }}
        >
          <img src={images.img2} alt="aboutImg" />
          <p className="bold-text text-center mt-2">HR OUTSOURCING</p>
          <p className="p-text text-center">
            {" "}
            We supply clients with highly qualified workers for all categories
            un our sponsorship. We also provide the workers with their
            Accommodation, Food allowance, Transportation while working un your
            supervision.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="about__item text-center"
          style={{ display: "inline-block", width: "25%", padding: "5px" }}
        >
          <img src={images.img3} alt="aboutImg" />
          <p className="bold-text text-center mt-2">PROJECT STAFFING</p>
          <p className="p-text text-center">
            We have a professional team for selecting and training individuals
            for specific job functions required by the client,
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default wrap(
  MotionWrap(Services, "app__Services"),
  "services",
  "app__whitebg"
);
