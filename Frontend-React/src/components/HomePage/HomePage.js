import React from "react";
import Products from "../OurProducts/Products";
import Carousell from "../Carousell/Carousell";
import Footer1 from "../Footer/Footer1";
import Card from "../Card";
import Navbar from "../Navbar/Navbar";
import Announcement from "../Annoucement/Announcement";
import { useLocation } from "react-router-dom";
import { setGlobal, getGlobal } from "../globals";
import { useEffect, useState } from "react";

import axios from "axios";
import { getGlobal1, setGlobal1 } from "../globalId";
import SendMessage from "../Whatsappmsgs/SendMessage";

const HomePage = () => {
  const email = useLocation().state;
  console.log(email);

  console.log(getGlobal("empemail"));

  const url = `http://localhost:9191/employeeByemail/${email}`;
  const [empdata, setempdata] = useState({});
  useEffect(() => {
    getlatestleave();
  }, []);
  const getlatestleave = () => {
    axios
      .get(url)
      .then((res) => {
        setempdata(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(empdata);

  setGlobal({ empemail: email, empId: empdata.id });

  console.log(getGlobal1("empId"));

  console.log("Myyy--", empdata);

  return (
    <div>
      <Navbar />
      <Carousell />
      <div style={{ marginLeft: "100px", display: "flex" }}>
        <Announcement />
        <div
          style={{
            marginRight: "140px",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <Card
            name={empdata.firstName + " " + empdata.lastName}
            dob={empdata.dateofbirth}
            email={empdata.email}
            contactNo={empdata.number}
            designation={empdata.designation}
            department={empdata.department}
          />
        </div>
      </div>
      <Products />
      <SendMessage />
      <Footer1 />
    </div>
  );
};

export default HomePage;
