import React from "react";
import axios from "axios";
import "./CardProfile.css";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { setGlobal, getGlobal } from "../globals";

function EmployeeProfile() {
  const empemail = getGlobal("empemail");
  console.log("Employee-----", empemail);
  const url = `http://localhost:9191/employeeByemail/${empemail}`;
  const [empdata, setempdata] = useState({});
  const [project, setproject] = useState({});
  const [manager, setmanager] = useState({});
  useEffect(() => {
    getlatestleave();
  }, []);
  const getlatestleave = () => {
    axios
      .get(url)
      .then((res) => {
        setempdata(res.data);
        setmanager(res.data.manager);
        setproject(res.data.project);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="items-center mt-20 ">
        <div className="font-semibold flex text-4xl  justify-center ">
          <p className="mt-4">
            Your Profile
            <hr
              class="w-54 h-2 mx-auto mb-5  bg-red-700  border-0 rounded mt-1"
              style={{
                height: "3px",
                width: "10rem",
                backgroundColor: " #af356a",
                opacity: "2",
              }}
            />{" "}
          </p>
        </div>
        <div className="flex mt-2">
          <div
            className="Card-profile rounded-[12px]"
            style={{ marginLeft: "5%" }}
          >
            <div className="image-container mt-14">
              <img
                className="  h-40 w-40 mb-2 mt-4 ml-2"
                // =" rounded-full h-12 w-12 b object-contain"
                src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
                alt=""
                height="100px"
                width="100px"
              />
            </div>
            <div className="Container-profile">
              <div className=" mb-4">
                <div className=" font-semibold  text-4xl">
                  {empdata.firstName} {empdata.lastName}
                </div>
                <div className=" text-xl  mt-1"> {empdata.dateofbirth}</div>
                <div className="  text-xl  mt-1"> {empdata.email} </div>
              </div>
            </div>
          </div>

          <div style={{ width: "10px" }}></div>
          <div className="Card-profile-medium flex flex-col   rounded-[12px]">
            <div
              className="my-4 mx-6 flex items-center "
              style={{ backgroundColor: "white", height: "50px" }}
            >
              <p className=" text-2xl ml-10">
                Mobile No :{" "}
                <span className=" text-xl ml-2">{empdata.number}</span>
              </p>
            </div>
            <div
              className="mx-6 flex items-center "
              style={{ backgroundColor: "#dfe6ec", height: "50px" }}
            >
              <p className=" text-xl ml-10">
                Designation :{" "}
                <span className=" text-xl ml-2">{empdata.designation}</span>
              </p>
            </div>
            <div
              className="my-4 mx-6 flex items-center "
              style={{ backgroundColor: "white", height: "50px" }}
            >
              <p className=" text-xl ml-10">
                Department :{" "}
                <span className=" text-lg ml-2">{empdata.department}</span>
              </p>{" "}
            </div>
            <div
              className="mx-6 flex items-center"
              style={{ backgroundColor: "#dfe6ec", height: "50px" }}
            >
              <p className=" text-xl ml-10">
                Address :{" "}
                <span className=" text-xl ml-2">{empdata.address}</span>
              </p>{" "}
            </div>
            <div
              className="my-4 mx-6 flex items-center "
              style={{ backgroundColor: "white", height: "50px" }}
            >
              <p className=" text-xl ml-10">
                Skills : <span className=" text-lg ml-2">{empdata.skills}</span>
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: "15px" }}></div>
        <div
          className="Card-Profile-large flex flex-col  rounded-[12px]"
          style={{ marginLeft: "5%" }}
        >
          <div
            className="my-4 mx-6 flex items-center "
            style={{ backgroundColor: "white", height: "70px" }}
          >
            <p className=" text-xl ml-4">
              Project Name : {project.projectName}
            </p>
          </div>
          <div
            className="mx-6 flex items-center "
            style={{ backgroundColor: "#dfe6ec", height: "70px" }}
          >
            <p className=" text-xl ml-4">
              Project Description :{" "}
              <span className=" text-xl">{project.projectDescription}</span>
            </p>
          </div>
          <div
            className="my-4 mx-6 flex items-center "
            style={{ backgroundColor: "white", height: "70px" }}
          >
            <p className=" text-xl ml-4">
              Manager Name :{" "}
              <span className=" text-lg">{manager.firstName}</span>
            </p>{" "}
          </div>
          <div
            className="mx-6 flex items-center "
            style={{ backgroundColor: "#dfe6ec", height: "70px" }}
          >
            <p className=" text-xl ml-4">
              Manager Email : <span className=" text-xl">{manager.email}</span>
            </p>{" "}
          </div>
          <div
            className="my-4 mx-6 flex items-center "
            style={{ backgroundColor: "white", height: "70px" }}
          >
            <p className=" text-xl ml-4">
              Manager Contact :{" "}
              <span className=" text-lg">{manager.number}</span>
            </p>
          </div>
        </div>
        <div style={{ height: "20px" }}></div>
      </div>
    </div>
  );
}
export default EmployeeProfile;
