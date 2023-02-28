import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import PeersCard from "./PeersCard";
import Navbar from "../Navbar/Navbar";
const PeersPage = () => {
  const url = `http://localhost:9191/employees`;
  const [employeesdata, setemployeesdata] = useState([]);

  useEffect(() => {
    getemployeedetails();
  }, []);
  const getemployeedetails = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setemployeesdata(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className=" bg-slate-50 ">
      <Navbar />
      <p className=" text-4xl text-center" style={{ marginTop: "69px" }}>
        Peers Info
      </p>

      <hr
        class="w-54 h-2 mx-auto  bg-red-700  border-0 rounded mt-1"
        style={{
          height: "3px",
          width: "10rem",
          backgroundColor: " #af356a",
          opacity: "2",
        }}
      />

      <div className=" p-2 mx-32 my-12 ">
        <Row>
          {employeesdata.map((employee, i) => {
            return (
              <Col md={4} lg={4} sm={4} xs={12} key={i} className="mb-2">
                <PeersCard peerdata={employee} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default PeersPage;
