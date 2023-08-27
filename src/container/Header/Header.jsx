import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DraftsIcon from "@mui/icons-material/Drafts";
import wrap from "../../components/wraper/wrap";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <>
      <div className="app__header">
        <div className="app__header-box">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" app__header-badge mb-5 start-md-0"
            style={{
              justifyContent: "center",
              position: "relative",
              left: "100%",
              backgroundColor: "rgb(35,50,57)",
            }}
          >
            <img src={images.logo2} alt="img" style={{ width: "280px" }} />
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" app__header-badge"
          >
            <span>👋</span>
            <div>
              <p> hello !</p>
              <h1>Mazaya Recruitment.</h1>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" app__header-info w-70"
          >
            <h4>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Contact Us")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </h4>
            <h5>
              <PhoneAndroidIcon className="mx-2" />
              02-4433622
            </h5>
            <h5>
              <DraftsIcon className="mx-2" />
              <a
                href="mailto:info@mazayaad.com"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                info@mazayaad.com
              </a>
            </h5>
          </motion.div>
        </div>
        <motion.img
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ scale: [0, 1] }}
          className="app__header-circle"
          src={images.circle}
          alt="circle"
        />
      </div>
    </>
  );
};
export default wrap(Header, "home");
