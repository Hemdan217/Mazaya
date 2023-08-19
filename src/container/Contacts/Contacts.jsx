/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Contacts.scss";
import { images } from "../../constants";
import wrap from "../../components/wraper/wrap";
import MotionWrap from "../../components/wraper/MotionWrap";
import { useState } from "react";
import { client } from "../../client.js";

const Contacts = () => {
  const [formInputs, setformInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isloading, setisloading] = useState(false);
  const [issubmetted, setissubmetted] = useState(false);
  const { name, email, message } = formInputs;
  const handelInputsChange = (e) => {
    const { name, value } = e.target;
    setformInputs({ ...formInputs, [name]: value });
  };
  const handelSubmit = () => {
    setisloading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setisloading(false);
      setissubmetted(true);
    });
  };
  return (
    <>
      <h2 className="head-text">Contact Us</h2>

      <div
        className="container"
      >
        <div >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3631.530051751217!2d54.38563537597656!3d24.467084884643555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e662be8851fcd%3A0xf228ba3cf396fa30!2s7%20Al%20Bathniyyah%20St%20-%20Al%20Nahyan%20-%20E25%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1692257640401!5m2!1sen!2seg"
            style={{ width: "100%", height: "400px", margin: "auto" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default wrap(
  MotionWrap(Contacts, "app__contact"),
  "contact",
  "app__primarybg"
);
