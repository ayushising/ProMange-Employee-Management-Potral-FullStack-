import React from "react";
import html2pdf from "html2pdf.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { getGlobal } from "../globals";
import Navbar from "../Navbar/Navbar";
function AppointmentLetter() {
  const id = getGlobal("empId");
  console.log("EmpIDDD", id);

  const url = `http://localhost:9191/Appointmentdetails/${id}`;
  const [empdata, setempdata] = useState({});
  const [appointmentdata, setappointmentdata] = useState({});
  useEffect(() => {
    getappointmentdetails();
  }, []);
  const getappointmentdetails = () => {
    axios
      .get(url)
      .then((res) => {
        setappointmentdata(res.data);
        setempdata(res.data.employee);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const pdfGenerate = () => {
    const element = document.getElementById("appointmentletterid");
    const opt = {
      margin: 1,
      filename: "AppointmentLetter.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2.5 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "40px", marginTop: "84px" }}>
        <div id="appointmentletterid">
          {/* <img src={AxisSarallatest}/> */}
          <h1 className="text-4xl text-center ">Appointment letter</h1>
          {/* <hr
          class="w-32 h-2 my-4 mx-auto bg-red-700  border-0 rounded mt-1"
          style={{
            height: "3px",
            width: "21rem",
            backgroundColor: " #af356a",
            opacity: "2",
          }}
        /> */}
          <p text-lg>
            Date:
            <span className="  ml-2">{appointmentdata.offer_date}</span>
            <br />
            Candidate Name: <span className="  ml-2">{empdata.firstName}</span>
            <br />
            Contact: <span className="  ml-2">{empdata.number}</span>
            <br />
            Email: <span className="  ml-2">{empdata.email}</span>
            <br />
          </p>
          <hr className="my-2" />
          <b>Subject: </b>Appointment for post of <b>{empdata.designation}</b>
          <p>
            Dear {empdata.firstName},
            <br />
            &emsp; &emsp;&nbsp;We are pleased to offer you, the position of{" "}
            {empdata.designation} with Axis Bank. This is to notify you that
            your application and the subsequent interviews you have done with
            our company (Axis Bank) results in your selection for the position
            of {empdata.designation} in our company. You will get an annual CTC
            of INR:{appointmentdata.ctc}/annum.This amount includes all fixed
            and variable salary components. If you are truly interested in this
            job, kindly express your objectives about this offer. You need to
            accomplish the formalities by attaching the required documents. For
            any further queries, you can contact our HR department. We will be
            delighted to have you in our company.
          </p>
          <b>Joining Location:</b>
          <br />
          Axis Bank
          <br />
          B 99, Sector 63, Bangalore
          <br />
          TamilNadu,India
          <br />
          <br />
          <b>Contact Person:</b> Mr. James (HR) phno:1234234523
          <br />
          <br />
          <b>List of documents required at the time of joining:</b>
          <ul className="box-border pl-8 list-disc">
            <li>2 latest passport size photographs</li>
            <li>
              Government ID proof,Address Proof (Photocopy + Original for
              reference)
            </li>
            <li>
              10th, 12th, Graduation and Post Graduation (if any) education
              certificates (Photocopy + Original for reference only)
            </li>
            <li>
              Additional qualification certificate photocopies (if available).
            </li>
            <li>
              Also bring previous work experience and relieving letters
              (Photocopy + Original for reference)
            </li>
          </ul>
          <div style={{ textAlign: "right", marginRight: "20px" }}>
            ___________________
            <br />
            Signature
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "#97144d",
              color: "white",
              borderColor: "#97144d",
            }}
            onClick={pdfGenerate}
          >
            Download Appointment Letter
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentLetter;
