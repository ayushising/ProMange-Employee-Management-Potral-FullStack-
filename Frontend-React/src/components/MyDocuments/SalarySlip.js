import React from "react";
import html2pdf from "html2pdf.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
// import AxisSarallatest from './AxisSarallatest.png';
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};
function SalarySlip() {
  // const empemail="mrudula@gmail.com";
  const id = 102;
  // const month="jan";
  // const year="2023";

  const [empdata, setempdata] = useState({});
  const [salarydata, setsalarydata] = useState({});

  const datasent = useLocation().state;
  console.log(datasent);
  useEffect(() => {
    getsalarydetails();
  }, []);
  const getsalarydetails = () => {
    const url = `http://localhost:9191/SalaryDetailsByMonthAndYear/${id}/${datasent.month}/${datasent.year}`;
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        setsalarydata(res.data);
        console.log(salarydata);
        setempdata(res.data.employee);
        console.log(empdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const pdfGenerate = () => {
    const element = document.getElementById("Salaryslipdiv");
    const opt = {
      margin: 1,
      filename: "SalarySlip.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2.5 },
      jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();

    // var doc1 = new jsPDF();
    // doc1.text("SALARY SLIP", 90, 10);
    // //doc1.text("This is centred text.", 105, 80, null, null, "center");
    // doc1.autoTable({
    //     html: '#EmployeeDetails',
    //     headStyles: { fillColor: [151, 20, 77] },
    //     // theme:'grid'
    // });
    // doc1.autoTable({
    //     html: '#EmployeeEarnings_Deduction',
    //     headStyles: { fillColor: [151, 20, 77] },
    //     // theme:'grid'
    // });
    // doc1.save('SalarySlip.pdf');
  };
  return (
    <>
      {/* style={{ backgroundColor: '#97144d', color: 'white' }} */}
      {/* <img src={AxisSarallatest}/>    */}

      <Navbar />
      <div className="mx-20">
        <div id="Salaryslipdiv">
          <div>
            <h1
              className=" mt-20  mb-5  text-4xl justify-center"
              style={{ textAlign: "center" }}
            >
              Salary Slip
            </h1>
          </div>

          <div>
            <table
              style={thStyle}
              id="EmployeeDetails"
              className="w-full table-auto mb-4 align-top mt-2 border-spacing-4"
            >
              <thead
                className="border-spacing-y-2 border-spacing-x-2 "
                style={{ backgroundColor: "#97144d", color: "white" }}
              >
                <tr className="items-center border-b-2 border-[#dee2e6]">
                  <th className="py-3 px-3" colspan="2">
                    Employee Details
                  </th>
                  <th colspan="2">Payment & Leave Details</th>
                  <th colspan="2">Location Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">Emp No.</td>
                  <td>{empdata.id}</td>
                  <td>Bank Name</td>
                  <td>{salarydata.bank_name}</td>
                  <td>Location</td>
                  <td>Bangalore</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">Dsgn</td>
                  <td>{empdata.designation}</td>
                  <td>Account No</td>
                  <td>{salarydata.account_no}</td>
                  <td>Base Br</td>
                  <td>Mumbai</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">Grade</td>
                  <td>C2</td>
                  <td></td>
                  <td></td>
                  <td>Month-Year</td>
                  <td>
                    {datasent.month}-{datasent.year}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-3">PAN</td>
                  <td>{salarydata.pan}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              {/* <caption>Previously sold products</caption> */}
            </table>
          </div>

          <div className="mb-5">
            <table
              style={thStyle}
              id="EmployeeDetails"
              className="w-full  table-auto mb-4 align-top  border-spacing-4"
            >
              <thead
                className="border-spacing-y-2 border-spacing-x-2 "
                style={{ backgroundColor: "#97144d", color: "white" }}
              >
                <tr className="text-left border-b-2 border-[#dee2e6]">
                  <th className="py-3 px-3 ">Earnings</th>
                  <th>Arrears</th>
                  <th>Current</th>
                  <th>Deductions</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">Basic Salary</td>
                  <td></td>
                  <td>{salarydata.salary - 26000.0}.00</td>
                  <td>Provident Fund</td>
                  <td>2,000.00</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">House Rent Allowence</td>
                  <td></td>
                  <td>8,000.00</td>
                  <td>Professional Tax</td>
                  <td>200.00</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">Variable Allowence</td>
                  <td></td>
                  <td>8,000.00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">Personal Allowence</td>
                  <td></td>
                  <td>10,000.00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6]">
                  <td className="py-3 px-3">
                    <b> Total Earnings</b>
                  </td>
                  <td></td>
                  <td>{salarydata.salary}</td>
                  <td>
                    <b>Total Deduction</b>
                  </td>
                  <td>2,200.00</td>
                </tr>
              </tbody>
              {/* <caption>Previously sold products</caption> */}
            </table>
          </div>
        </div>

        <span
          className="mt-4 mr-5 align-middle text-right p-4"
          style={{
            backgroundColor: "#97144d",
            color: "white",
            marginLeft: "60rem",
          }}
        >
          <b className="mt-2">NET PAY: </b>
          <b className="mt-5"> ₹{salarydata.salary - 2200.0}.00</b>
        </span>

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
            Download Salary slip
          </button>
        </div>
      </div>
    </>
  );
}

export default SalarySlip;
