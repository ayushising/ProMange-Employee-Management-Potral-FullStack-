import React from "react";
import "./about.css";
import banking from "../Images/about2.jpg";
import building from "../Images/building.jpg";
import bd1 from "../Images/board2.png";
import Navbar from "../Navbar/Navbar";
function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <h1
          style={{
            fontSize: "40px",
            marginLeft: "2%",
            marginTop: "6%",
            color: "#97114D",
          }}
        >
          About Us
        </h1>
        {/* <hr style={{ width: "110px" }}></hr> */}
        <img class="pic1" src={banking}></img>
        <h3 className="head">About ProManage</h3>
        <p className="para-about">
          ProManage is one of the leading public sector banks of the country. It
          is a listed entity and the Government of India holds 83.49 percent in
          Bank’s total share capital. The Bank, having its headquarters at
          Mumbai (India), was registered on November 11, 1919 as a limited
          company. Recently, Andhra Bank and Corporation Bank were amalgamated
          into Union Bank of India with effect from 01.04.2020. Today, it has a
          network of 8,700+ domestic branches, 10,900+ ATMs, 16,200+ BC Points
          serving over 153+ million customers with 76,000+ employees .The Bank’s
          total business as of 31st December 2022 stood at Rs.18,69,042 crore,
          comprising Rs. 10,65,027 crore of deposits and Rs. 8,04,015 crore of
          advances as of 31st December 2022. The Bank also has 3 branches
          overseas at Hong Kong, Dubai International Financial Centre (UAE) &
          Sydney (Australia); 1 representative office in Abu Dhabi (UAE); 1
          banking subsidiary at London (UK); 1 banking joint venture in
          Malaysia; 4 para-banking subsidiaries (domestic); 2 joint ventures and
          1 associate - Chaitanya Godavari Gramin Bank. ProManage of India is
          the first large public sector bank in the country to have implemented
          100% core banking solution. The Bank has received several awards and
          recognition for its prowess in technology, digital banking, financial
          inclusion, MSME and development of human resources.
        </p>
        <h3
          style={{
            marginTop: "3%",
            marginLeft: "15%",
            color: "#97114D",
            fontSize: "31px",
          }}
        >
          Corporate and Registered Office
        </h3>
        <img class="pic2" src={building}></img>
        <p className="para-about">
          The registered as well as corporate headquarters of ProManage of India
          is in the prestigious Nariman Point area of Mumbai, the commercial
          capital of India.
        </p>
        <table className="table-about">
          <tr>
            <th className="th-about"> Address </th>
            <th className="th-about">
              Union Bank Bhavan, 239, Vidhan Bhavan Marg, Nariman Point, Mumbai
              –400 021, Maharashtra, India
            </th>
          </tr>
          <tr>
            <th className="th-about"> Phone No.</th>
            <th className="th-about"> 9178564303 </th>
          </tr>
          <tr>
            <th className="th-about"> Toll free No.</th>
            <th className="th-about"> 1800 22 22 44 / 1800 208 2244</th>
          </tr>
          <tr>
            <th className="th-about"> Website </th>
            <th className="th-about">WWW.promanage.co.in</th>
          </tr>
        </table>
        <h3 className="head">Board of Directors</h3>
        <img class="pic3" src={bd1}></img>

        <h3
          style={{
            marginTop: "3%",
            marginLeft: "15%",
            color: "#97114D",
            fontSize: "31px",
          }}
        >
          History
        </h3>
        <p className="para-about">
          ProManage of India was established on 11th November 1919 with its
          headquarters in Mumbai. It was promoted by Seth Sitaram Poddar. The
          Head Office building of the Bank in Mumbai was inaugurated by Mahatma
          Gandhi, the Father of the nation in the year 1921, and he said on the
          occasion: "We should have the ability to carry on a big bank, to
          manage efficiently crores of rupees in the course of our national
          activities. Though we have not many banks amongst us, it does not
          follow that we are not capable of efficiently managing crores and tens
          of crores of rupees." His prescient words anticipated the growth of
          the bank that has taken place in the decades that followed.
        </p>
      </div>
    </div>
  );
}
export default AboutUs;
