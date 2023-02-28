import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Annoucement.css";
import announcementIcon from "../Images/announcementIcon.png";
const Announcement = () => {
  let [announcement, setAnnouncement] = useState([
    {
      announcement:
        "Quarterly Business Review Meeting on March 15th, 2023 from 10:00 AM - 12:00 PM at Conference Room B",
    },
    {
      announcement:
        "Marketing Strategy Planningon February 28th, 2023 from 2:00 PM - 3:30 PM",
    },
    {
      announcement:
        "All Staff Meeting on March 5th, 2023 from 09:00 AM - 12:00 PM at Conference Room B",
    },
    {
      announcement:
        "Company Volunteer Event on March 2th, 2023 from 09:00 AM - 12:00 PM at Conference Room D",
    },
    // {
    //   announcement: "Office Closureon February 25th, 2023, National Holiday",
    // },
    {
      announcement:
        "RSVP for Annual Company Dinneron March 10th, 2023 from 6:00 PM - 10:00 PM at Marriott Hotel",
    },
    {
      announcement:
        "HR Compliance Training on March 1st, 2023 from 1:00 PM - 3:00 PM at HR Conference Room",
    },
  ]);
  let { turn } = true;
  //   useEffect(() => {
  //     fetch("http://localhost:8080/Announcement/announcement/getAll")
  //       .then((response) => response.json())
  //       // 4. Setting dogImage to the image url that we received from the response above
  //       .then((data) => setAnnouncement(data));
  //   }, []);
  return (
    <div className="container">
      <div className="card-title" style={{ display: "flex" }}>
        <p
          style={{
            fontSize: "28px",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          Announcement{" "}
        </p>
        <img
          className="h-12 w-12"
          style={{ marginTop: "14px", marginLeft: "10px" }}
          src={announcementIcon}
          alt=""
        />
      </div>
      <div className="card-a" style={{ backgroundColor: "F9F4F4" }}>
        <div className="card-body">
          {announcement &&
            announcement.map((abc) => {
              if (turn) {
                turn = false;
                return (
                  <div className="color2">
                    <p style={{ color: "black" }}>{abc.announcement}</p>
                    <br />
                  </div>
                );
              } else {
                turn = true;
                return (
                  <div className="color1">
                    <p style={{ color: "black" }}>{abc.announcement}</p>
                    <br />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
