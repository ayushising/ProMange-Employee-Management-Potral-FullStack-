import img2 from "../Images/life.png";
import img3 from "../Images/health.png";
import img4 from "../Images/Loan.png";
import img5 from "../Images/home.png";
import img6 from "../Images/car.png";
import img7 from "../Images/credit.png";
import img8 from "../Images/fund.png";
import img9 from "../Images/edu.png";
import "./Products.css";
function Products() {
  return (
    <div>
      <p className="para">Our Products</p>
      <hr
        class="w-54 h-2 mx-auto bg-red-700 border-0 rounded mt-1"
        style={{
          height: "3px",
          width: "16rem",
          backgroundColor: " #af356a",
          opacity: "2",
        }}
      ></hr>
      <div id="productsList">
        <div class="row">
          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img2}></img>
              <br></br>
              <span class="life">
                Protect your family against the unknown and take care of their
                financial needs by buying life insurance as per your
                requirements and life-stage.
              </span>
              Life Insurance
            </div>
          </div>

          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img3}></img>
              <br></br>
              <span class="heal">
                Stay financially prepared for medical or accident emergencies
                with our health insurance plans
              </span>
              Health Insurance
            </div>
          </div>

          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img5}></img>
              <br></br>
              <span class="homel">
                Choose from a wide range of home loans depending on your needs
              </span>
              Home Loan
            </div>
          </div>

          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img4}></img>
              <br></br>
              <span class="personal">
                Avail personal loan for holiday, home renovation & marriage at
                attractive interest rates
              </span>
              Personal loan
            </div>
          </div>
          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img6}></img>
              <br></br>
              <span class="life">Benefit from a high Loan To Value ratio</span>
              Car loan
            </div>
          </div>
          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img7}></img>
              <br></br>
              <span class="cred">
                Cards Choose from a series of credit cards, tailor made to meet
                your needs and desires. Enjoy the unmatched privileges, gift
                vouchers, eDGE reward points and much more.
              </span>
              Credit Card
            </div>
          </div>
          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img8}></img>
              <br></br>
              <span class="life">
                It is a trust that collects money from a number of investors who
                share a common investment objective and invests the same in
                equities, bonds, money market instruments and/or other
                securities.
              </span>
              Mutual Fund
            </div>
          </div>
          <div class="columnOurProducts">
            <div class="card">
              <img className="imgcenter" src={img9}></img>
              <br></br>
              <span class="life">
                Education is a long-term personal investment that has the
                potential to generate returns like none other.
              </span>
              Educational Loan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
