import React, { useEffect, useState } from "react";
import "./About.scss";
import { images } from "../../constants";
import { easeInOut, motion } from "framer-motion";
import { client, urlFor } from "../../client.js";
import wrap from "../../components/wraper/wrap";
import MotionWrap from "../../components/wraper/MotionWrap";
const About = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client
      .fetch(query)
      .then((data) => {
        setdata(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <h2 className="head-text">
        <span>
          ABOUT US
          <br />
        </span>
      </h2>
      <div className="app__profile ">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="about__item"
          style={{ width: "70" }}
        >
          <p className="p-text" style={{ fontSize: "16px" }}>
            <span className="bold-text">Mazaya Recruitment.</span> Mazaya
            Recruitment is led by Chief Executive Director, Eng. Walid El
            Bahrawy. From its humble beginnings, Mazaya Recruitment has grown
            and become one of the most leading Manpower supply & Recruitment
            company in Abu Dhabi, Dubai & other Emirates. Operating in the
            United Arab Emirates, with office at Airport road chewy cafe
            building P.O Box. 31992, Abu Dhabi, UAE. se our resources with ease
            and clarity.
          </p>

          <p className="p-text" style={{ fontSize: "16px" }}>
            Mazaya Recruitment is open to all business, we offer recruitment
            solution, finding the right people at the right time with the
            qualifications and skills as per client requirement. For job
            seekers, we have a large range of short, medium and long term
            contract jobs available in each field. By sending your CV to us
            you’ll receive a prompt reply from us by Email, or by phone, keeping
            you up to date with the latest vacancies so you find the right
            career for you.
          </p>
        </motion.div>
      </div>
      <h6 className="head-text" style={{ fontSize: "20px" }}>
        <span>Eng. Walid El Bahrawy</span>
      </h6>{" "}
      <span className="bold-text">Chairman</span>
    </>
  );
};
export default wrap(MotionWrap(About, "app__about"), "about", "app__primarybg");
