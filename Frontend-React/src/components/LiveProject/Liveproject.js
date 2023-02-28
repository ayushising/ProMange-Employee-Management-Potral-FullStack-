import { useEffect, React, useState } from "react";
import { json, Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./Liveproject.css";
import "./JobOpportunities";
import { Nav } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

function Liveproject() {
  const [Liveproject, setLiveproject] = useState([]);
  const url = "http://localhost:8083/getLiveprojects";

  const [JobOpportunities, setJobOpportunities] = useState([]);
  const url1 = "http://localhost:8083/getJobOpportunities";

  const [Support, setSupport] = useState([]);
  const url2 = "http://localhost:8083/getSupports";

  const { id } = useParams();
  useEffect(() => {
    axios.get(url).then((res) => {
      setLiveproject(res.data);
    });
    axios.get(url1).then((res) => {
      setJobOpportunities(res.data);
    });

    axios.get(url2).then((res) => {
      setSupport(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" mt-20">
        <p className="liveproject">
          {" "}
          Live Projects
          <hr
            class="w-54 h-2 mx-auto bg-red-700 border-0 rounded mt-1"
            style={{
              height: "1px",
              width: "72rem",
              backgroundColor: " #af356a",
              opacity: "2",
            }}
          ></hr>
        </p>
        <table id="liveproject-table">
          <thead>
            <tr>
              <th> ID </th>
              <th> Project Name </th>
              <th> Description</th>
              <th> Owner's name</th>
              <th> Ownern's email</th>
            </tr>
          </thead>
          <tbody>
            {Liveproject.map((c) => (
              <tr key={c.project_id}>
                <td>{c.project_id}</td>
                <td>
                  {" "}
                  <Link
                    className="df"
                    to={{ pathname: "/projects/" + c.project_id }}
                    state={c.project_id}
                  >
                    {" "}
                    {c.project_name}
                  </Link>{" "}
                </td>
                <td>{c.project_desc}</td>
                <td>{c.owner_name}</td>
                <td>{c.owner_email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="liveproject">
          {" "}
          Job Opportunities
          <hr
            class="w-54 h-2 mx-auto bg-red-700 border-0 rounded mt-1"
            style={{
              height: "1px",
              width: "72rem",
              backgroundColor: " #af356a",
              opacity: "2",
            }}
          ></hr>
        </p>

        <table id="JobOpportunity-table">
          <thead>
            <tr>
              <th>ID</th>
              <th> Job Name </th>
              <th> Description</th>
              <th> Project</th>
            </tr>
          </thead>
          <tbody>
            {JobOpportunities.map((d) => (
              <tr key={d.job_id}>
                <td>{d.job_id}</td>
                <td>
                  <Link
                    className="df"
                    to={{ pathname: "/job/" + d.job_id }}
                    state={d.job_id}
                  >
                    {d.job_name}
                  </Link>
                </td>
                <td>{d.job_desc}</td>
                <td>{d.project["project_name"]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="liveproject">
          {" "}
          Support{" "}
          <hr
            class="w-54 h-2 mx-auto bg-red-700 border-0 rounded mt-1"
            style={{
              height: "1px",
              width: "72rem",
              backgroundColor: " #af356a",
              opacity: "2",
            }}
          ></hr>
        </p>

        <table id="Support-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Support Dept. </th>
              <th> Name</th>
              <th> Email</th>
              <th> Project </th>
            </tr>
          </thead>
          <tbody>
            {Support.map((e) => (
              <tr key={e.support_id}>
                <td>{e.support_id}</td>
                <td>{e.support_department}</td>
                <td>{e.support_name}</td>
                <td>{e.support_email}</td>
                <td>{e.project["project_name"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liveproject;
