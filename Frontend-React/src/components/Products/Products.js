import img2 from "../Images/life.png";
import img3 from "../Images/health.png";
// import img4 from './images/Loan.png';
import img5 from "../Images/home.png";
import img6 from "../Images/car.png";
import img7 from "../Images/credit.png";
import img8 from "../Images/fund.png";
import img9 from "../Images/edu.png";
import gol from "../Images/goldloan.png";
import po from "../Images/po.jpg";

import "./Products.css";
import CreditCard from "./CreditCard";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <img
          src={po}
          alt=""
          style={{
            height: "20rem",
            width: "75rem",
            marginTop: "19px",
            marginLeft: "9%",
          }}
        />

        <p className="p1 mt-4">Our Products</p>
        <hr className="hr1" style={{ height: "4px" }}></hr>
        <div id="productsList">
          <div className="row1">
            <div className="column1">
              <Link className="ser" to="/LifeInsurance">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img2}
                    alt="shii"
                  ></img>
                  <br></br>
                  Life Insurance
                </div>
              </Link>
            </div>

            <div className="column1">
              <Link to="/HealthInsurance" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img3}
                    alt=""
                  ></img>
                  <br></br>
                  Health Insurance
                </div>
              </Link>
            </div>

            <div className="column1">
              <Link to="/HomeLoan" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img5}
                    alt=""
                  ></img>
                  <br></br>
                  Home Loan
                </div>
              </Link>
            </div>

            <div className="column1">
              <Link to="/PersonalLoan" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img5}
                  ></img>
                  <br></br>
                  Personal loan
                </div>
              </Link>
            </div>
            <div className="column1">
              <Link to="/CarLoan" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img6}
                  ></img>
                  <br></br>
                  Car loan
                </div>
              </Link>
            </div>
            <div className="column1">
              <Link className="ser" to="/CreditCard">
                <div className="card1" onClick={CreditCard}>
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img7}
                  ></img>
                  <br></br>
                  Credit Card
                </div>
              </Link>
            </div>
            <div className="column1">
              <Link to="/MutualFunds" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img8}
                  ></img>
                  <br></br>
                  Mutual Fund
                </div>
              </Link>
            </div>
            <div className="column1">
              <Link to="/EduLoan" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={img9}
                  ></img>
                  <br></br>
                  Educational Loan
                </div>
              </Link>
            </div>
            <div className="column1">
              <Link to="/EduLoan" className="ser">
                <div className="card1">
                  <img
                    className="prod"
                    style={{ marginLeft: "40px" }}
                    src={gol}
                  ></img>
                  <br></br>
                  Gold Loan
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
