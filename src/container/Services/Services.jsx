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
        console.log(data);
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
    <section id="services">
      <div className="container">
        <h2 className="head-text">Our Services</h2>

        <div
        className="py-4"
        >
          <p className="p-text" style={{ fontSize: "16px" }}>
            <span className="bold-text fs-5">Mazaya Recruitment</span> is dedicated
            to finding the right workforce for both Government and private
            sectors. At the present, Mazaya Recruitment has almost 500+
            engineers, Technicians, Administrative clerks/secretaries, hotel
            staff, oil & gas staff, aviation, shipbuilding, various construction
            and cleaning workers under our sponsorship. The principle is to
            mobilize the workers on short, medium and long term contracts as
            required by the clients.
          </p>
        </div>
      
      <div className="position-relative">
        <div className="clips d-none d-md-block"></div>
      <div className="row  mb-2">
          <div className="col-md-8 col-sm-12">
            <div className="d-flex gap-2 align-items-center">
              <div className="fs-2 raduis w-10 text-primary">01</div>
              <p className="w-90">
                <h4 className="text-primary">MANPOWER SUPPLY</h4>
                We are specialize in providing manpower for onshore & offshore, Oil
& Gas, building construction, road construction, and all other
sectors.
              </p>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mb-2">
          <div className="col-2 d-md-block d-none"></div>
          <div className="col-md-8 col-sm-12">
            <div className="d-flex gap-2">
              <div className="fs-3 raduis w-10 text-primary">02</div>
              <p className="w-90">
                <h4 className="text-primary">
                HR OUTSOURCING
                </h4>
                We supply clients with highly qualified workers for all categories un
our sponsorship. We also provide the workers with their
Accommodation, Food allowance, Transportation while working un
your supervision.
              </p>
            </div>
          </div>
          <div className="col-2 d-md-block d-none"></div>
        </div>
        <div className="row w-100 mb-2">
          <div className="col-4 d-md-block d-none"></div>

          <div className="col-md-8">
            <div className="d-flex gap-2">
              <div className="fs-3 raduis w-10 text-primary">03</div>
              <p className="w-90">
                <h4 className="text-primary">
                PROJECT STAFFING
                </h4>
                We have a professional team for
selecting and training individuals
for specific job functions
required by the client,
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default wrap(
  MotionWrap(Services, "app__Services"),
  "services",
  "app__whitebg"
);
