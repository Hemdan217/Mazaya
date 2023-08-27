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
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">Tel : </span>+971 2 4433 622
      </p>
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">Mobile : </span>+971 505 311 556
      </p>
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">Fax : </span>+971 2 4433 623
      </p>
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">P.O Box : </span>31992
      </p>
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">Office Address : </span>31992
      </p>
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">Office Address : </span> Al Nahian camp
        - Al mamourh - Al saada tower- 6th floor- office 604, Abu Dhabi UAE.
      </p>
      <p className="p-text" style={{ fontSize: "16px" }}>
        <span className="bold-text fs-5">GENERAL ENQURIES : </span>

        <a
          href="mailto:info@mazayaad.com"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          info@mazayaad.com
        </a>
      </p>

      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d226.97024986324303!2d54.3853647534438!3d24.467294791559265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDI4JzAyLjAiTiA1NMKwMjMnMDcuOSJF!5e0!3m2!1sen!2seg!4v1693168153408!5m2!1sen!2seg"
          style={{ width: "100%", height: "400px", margin: "auto" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default wrap(
  MotionWrap(Contacts, "app__contact"),
  "contact",
  "app__primarybg"
);
