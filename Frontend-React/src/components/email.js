import emailjs from "emailjs-com";
import React from "react";
import Navbar from "./Navbar/Navbar";
import "./email.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbgohwv",
        "template_xxoegxg",
        e.target,
        "ORTbhue0IiwWk-BWj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Navbar />

      <div
        className="container-email"
        style={{
          marginTop: "7rem",
          marginLeft: "24rem",
          height: "38rem",
          borderRadius: "10px",
          width: "40rem",
          backgroundColor: "#eaf1fb",
          background:
            "linear-gradient(155deg, rgb(229 199 212) 4%, rgb(224 124 168) 46%, rgb(197 144 169) 100%)",
        }}
      >
        <form onSubmit={sendEmail}>
          <div>
            <div>
              <input
                type="text"
                style={{ marginTop: "4rem", padding: "22px" }}
                className="box"
                placeholder="Name"
                name="name"
              />
            </div>
            <div>
              <input
                style={{ padding: "22px" }}
                type="email"
                className="box"
                placeholder="Recipient"
                name="email"
              />
            </div>
            <div>
              <input
                style={{ padding: "22px" }}
                type="text"
                className="box"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div>
              <textarea
                className="text"
                style={{ padding: "22px", borderRadius: "15px" }}
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="btn-email"
                value="Send Mail"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
