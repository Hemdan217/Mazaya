import React, { useEffect, useState } from "react";
import "./Message.scss";
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="0.99"
          d="M0,160L60,144C120,128,240,96,360,117.3C480,139,600,213,720,234.7C840,256,960,224,1080,224C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <h2 className="head-text">
        <span>
          Chairman’s Message
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
            Greetings to all from{" "}
            <span className="bold-text">Mazaya Recruitment.</span> Hope that the
            details provided in the following pages would help you use our
            resources with ease and clarity.
          </p>

          <p className="p-text" style={{ fontSize: "16px" }}>
            We believe that the strength of every company large or small is
            directly proportional to the quality and efficiency of its employees
          </p>

          <p className="p-text" style={{ fontSize: "16px" }}>
            We adhere to this principle in our own company. Such values have
            helped us to grow to the level of one of the most dependable
            Manpower service provider in UAE in a short period. The depth of our
            infrastructure enables us to recruit highly qualified personnel,
            locally and internationally
          </p>

          <p className="p-text" style={{ fontSize: "16px" }}>
            Through <span className="bold-text">Mazaya Recruitment.</span> you
            can enjoy a single point of responsibility for your project
            requirements with the highest quality standards and industry leading
            techniques. Our entire team is committed to our core values, which
            enables us to facilitate full satisfaction to our clients and
            partners.
          </p>

          <p className="p-text" style={{ fontSize: "16px" }}>
            We thank you for your patronage in the past and looking forward to
            be at your service in future.
          </p>
        </motion.div>
      </div>
      <h6 className="head-text" style={{ fontSize: "20px" }}>
        <span>Engr. Walid El Bahrawy</span>
      </h6>{" "}
      <span className="bold-text">Chairman</span>
    </>
  );
};
export default wrap(MotionWrap(About, "app__about"), "message", "app__whitebg");
