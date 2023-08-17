/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/Container";
import Header from "./headerSection";
import Background from "./Picture2.png";
import "./Landing.css";
const LandingSection = () => {
  return (
    <>
      <div>
        <Container
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "round",
            minHeight: "100vh",
          }}
        >
          <Header></Header>
          <div className="row">
            <div className="col-4">h</div>
            <div className="col-4 pb-5">
              <img className="img-responsive mw-100" src="./Picture4.png" />
            </div>
            <div className="col-2"></div>
            <div className="col-2"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingSection;
