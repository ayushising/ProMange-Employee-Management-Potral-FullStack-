import React from "react";
import html2pdf from "html2pdf.js";
import "./Mydocuments.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { getGlobal, getId } from "../globals";
import Navbar from "../Navbar/Navbar";

const offerdate = "12-01-2022";
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};
function JoiningLetter() {
  const id = getGlobal("empId");
  const empemail = "mrudula12@gmail.com";
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
    const element = document.getElementById("joiningletter");
    const opt = {
      margin: 1,
      filename: "JoiningLetter.pdf",
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
        {/* <img src={AxisSarallatest}/>    */}
        <div id="joiningletter">
          {/* <div className="flex items-center justify-center"> */}
          <h1 className="text-4xl text-center ">Joining letter</h1>
          {/* <hr
          class="w-32 h-2 my-4 mx-auto bg-red-700  border-0 rounded mt-1"
          style={{
            height: "3px",
            width: "15rem",
            backgroundColor: " #af356a",
            opacity: "2",
          }}
        /> */}
          {/* <button className='px-2 py-0 h-8 ml-96'  onClick={pdfGenerate}> Download Joining Letter </button> ml-96 mr-70*/}
          {/* </div> */}
          {/* <div style={{objectFit:'cover'}}> style={{ backgroundColor: '#97144d', color: 'white' }}
                <img src={axisheader}/>
                </div> */}

          {/* <p>
                    <img src={axisheader}/>
                </p> */}
          <br />

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

          {/* <br /> */}
          <hr className="my-4" />

          <p>
            Dear {empdata.firstName},
            <br />
            <br />
            &emsp;&emsp;&emsp;Thank you for exploring career opportunities with
            Axis Bank.You have successfully cleared our initial selection
            process and we are pleased to make you an offer of employment. This
            offer is based on your profile and performance in the selection
            process.
            <br />
            You have been selected for the position of {empdata.designation}.
            <br />
            <br />
            During your probation period of 12 months, which includes your
            training program, you will be entitled to an Annual Total
            Remuneration (ATR) of INR 806,988/-. This includes an annual target
            incentive of INR 22,500 /- as well as Axis's contribution of INR
            19,500/- towards benefits such as Medical, Accident and Life
            Insurance. The incentive amount may vary, depending on Axis's
            performance and your performance. The other details about your
            compensation are detailed in Compensation and Benefits. Your
            compensation is highly confidential and if the need arises, you may
            discuss it only with your Manager.
            <br />
            <br />
            On successful completion of the probation period, clearing the
            required training assessments and subject to you being part of a
            delivery project, your Annual Total Remuneration (ATR) would stand
            revised to INR Rs.450,740/-. This includes an annual target
            incentive of INR 22,500/- as well as Axis's contribution towards
            benefits such as Medical, Accident and Life Insurance, as
            applicable.
            <br />
            <br />
            Your appointment will be governed by the terms and conditions of
            employment as presented in Employment Agreement. You will also be
            governed by the other rules, regulations and practices in vogue and
            those that may change from time to time.
            <br />
            <br />
            This offer of employment is subject to your fulfillment of other
            pre-requirements as detailed in this letter and other communications
            shared with you. <br />
            <br />
            <br />
            Please note:
            <ol class="mt-3 mb-8 pl-8 list-decimal box-border">
              <li>
                This appointment is subject to satisfactory professional
                reference checks and you securing a minimum of 60% aggregate
                (all subjects taken into consideration) with no standing arrears
                in your Graduation/Post- Graduation.
                <br />
                This offer from Axis is valid for 3 months and hence you are
                expected to accept or decline the offer through the company's
                online portal within this time-period. In case we do not receive
                any response from you within this time-period, this Offer shall
                stand withdrawn and will be considered as void. Any extension to
                the offer validity will be at the sole discretion of Axis
              </li>
              <br />
              <li>
                Prior to commencing employment with Axis you must provide Axis
                with evidence of your right to work in India and other such
                documents as Axis may request.
              </li>
              <br />
              <li>
                Prior to joining Axis, you must successfully complete the
                prescribed Internship or Continuous Skill Development (CSD)
                program as detailed below:
                <br />
                <br />
                At Axis, we invest in skill and capability development of our
                campus selects even before they join us. This is through Axis
                Internship and Continuous Skill Development (CSD) program. These
                programs focuses primarily on technical skills development. You
                could enroll in either of these as per your college processes
                while in the final semester and continue with skill building
                until you join Axis. This forms a critical part of your
                employment with Axis. Your onboarding with Axis would be
                prioritized based on the successful completion of same. In event
                of non-completion of the Internship or Continuous Skill
                Development program, Axis may at its sole discretion revoke this
                offer of employment.
                <ol className="mt-0 mb-4 pl-8 list-decimal box-border">
                  <br />
                  <li>
                    Axis Internship:
                    <ul className="box-border pl-8 list-disc">
                      <li>
                        Axis Internship is for approximately 3 to 6 months based
                        on business skilling requirements. The performance
                        during Internship would be monitored through formal
                        evaluations and rewarded with monthly stipend. The
                        stipend details would be notified upon your registration
                        for Internship.
                      </li>
                      <li>
                        Interns are covered under Axis's calendar holidays and
                        need to adhere with attendance requirements and
                        pre-approvals are to be sought towards unavoidable leave
                        or break requests from the program.
                      </li>
                      <br />
                    </ul>
                  </li>
                  <li>
                    Continuous Skill Development (CSD) Program:
                    <ul className="box-border pl-8 list-disc">
                      <br />
                      <li>
                        CSD program is offered through a platform based
                        engagement model combined with integrated skill
                        assessment and certifications as the CSD program
                        completion criteria. Upon meeting the completion
                        criteria of the CSD program, enrolled candidates would
                        be eligible for a one-time Axis CSD rewards post joining
                        Axis. The Axis CSD reward details would be provided
                        after your enrollment into the program.
                      </li>
                      <li>
                        There would be zero tolerance to malpractices and
                        misconduct during Internship and CSD engagement. Any
                        such misconduct would lead to appropriate disciplinary
                        action including the revocation of this employment
                        offer. Axis reserves clauses regarding IT
                        infrastructure, if applicable and access to information
                        and material of Axis during the period and could modify
                        or amend the Axis Internship and CSD program terms and
                        conditions from time to time.
                      </li>
                      <br />
                    </ul>
                  </li>
                  <li>
                    Axis Training Post joining:
                    <ul className="box-border pl-8 list-disc">
                      <br />
                      <li>
                        Axis continues to invest in skill building of the
                        entry-level talent and Axis training is a formal on-
                        the-job training offered to trainees based on the
                        business specific skilling needs. The terms and
                        conditions of this training will be governed by Axis
                        Axis program guidelines.
                      </li>
                      <li>
                        The Axis Internship or the Continuous Skill Development
                        (CSD) completion qualify as the entry criteria to the
                        Axis training and is used as basis towards your
                        allocation to projects/roles.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
            We look forward to you joining us. Should you have any further
            questions or clarifications, please log into Axis Portal
            <br />
            <br />
            Yours Sincerely,
            <br />
            Manushi Roy
            <br />
            <b>Vice President</b>
            <br />
            <br />
            I have read the offer, understood and accept the above mentioned
            terms and conditions.
            <br />
          </p>
          <br />
          <div class="row">
            <div class="column">
              <br />
              <b>Signature:</b>
              <br />
              <br />
            </div>
            <div class="column" style={{ paddingLeft: "530px" }}>
              <b>Date:</b>
            </div>
          </div>
          <hr />
          <br />
          <br />
          <div>
            <p
              className=" mt-0 mb-4 box-border"
              style={{ textAlign: "center" }}
            >
              <b>Compensation and Benefits</b>
            </p>
            <table
              className="w-full table-auto mb-4 align-top  border-spacing-4"
              style={thStyle}
              id="EmployeeDetails"
            >
              <thead
                className="border-spacing-y-2 border-spacing-x-2 "
                style={{ backgroundColor: "#97144d", color: "white" }}
              >
                <tr className="items-center border-b-2 border-[#dee2e6]">
                  <th className="py-3 px-3" colspan="2">
                    Name: {empdata.firstName}
                  </th>
                  <th colspan="2">Designation:{empdata.designation}</th>
                </tr>
                <tr className="text-left ">
                  <th className="py-3 px-3">S.No</th>
                  <th>Description</th>
                  <th>Monthly</th>
                  <th>Yearly</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b-2 border-[#dee2e6] box-border ">
                  <td className="py-3 px-3">1</td>
                  <td>Basic</td>
                  <td>10500</td>
                  <td>126,00</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3">2</td>
                  <td>HRA*</td>
                  <td>6300</td>
                  <td>75,600</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3">3</td>
                  <td>Conveyance Allowance*</td>
                  <td>800</td>
                  <td>9,600</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3">4</td>
                  <td>Medical Allowance*</td>
                  <td>1250</td>
                  <td>15,000</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3">5</td>
                  <td>Company's contribution of PF #</td>
                  <td>1800</td>
                  <td>21,600</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3">6</td>
                  <td>Advance Statutory Bonus***</td>
                  <td>2000</td>
                  <td>24,000</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3">7</td>
                  <td>Special Allowance*</td>
                  <td>7349</td>
                  <td>88,188</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3">
                    <b>Annual Gross Compensation </b>
                  </td>
                  <td></td>
                  <td>
                    <b>359,988</b>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3">
                    Incentive Indication (per annum)**{" "}
                  </td>
                  <td></td>
                  <td>22,500</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3">
                    <b>Annual Total Compensation </b>
                  </td>
                  <td></td>
                  <td>
                    <b>382,488</b>
                  </td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3">
                    Company's contribution towards benefits (Medical, Accident
                    and Life Insurance){" "}
                  </td>
                  <td></td>
                  <td>19,500</td>
                </tr>
                <tr className="border-b-2 border-[#dee2e6] box-border">
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3">
                    <b>Annual Total Remuneration</b>
                  </td>
                  <td></td>
                  <td>
                    <b>401,988</b>
                  </td>
                </tr>
              </tbody>
              {/* <caption>Previously sold products</caption> */}
            </table>
            <br />
            <p>
              As an associate you are also entitled to the following additional
              benefits:
              <ul className="box-border pl-8 list-disc mt-3">
                <li>Floating Medical Insurance Coverage</li>
                <li>
                  Round the Clock Group Personal Accident Insurance coverage
                </li>
                <li>Group Term Life Insurance</li>
                <li>
                  Employees' Compensation Insurance benefit as per the
                  Employees' Compensation Act, 2010
                </li>
                <li>
                  Gratuity, on separation after 4 years and 240 calendar days of
                  continuous service, payable as per Payment of Gratuity Act
                </li>
              </ul>
              <br />
              <b>Leave & Vacation:</b>
              <br />
              <ul className="box-border pl-8 mt-3 list-disc">
                <li>
                  From the Date of your Joining, you will be entitled with the
                  below mentioned leaves as per your eligibility in line with
                  the statutory requirements. You shall be entitled to avail the
                  leaves only with prior approval from your Manager
                </li>
                <br />
                <table
                  className="w-full table-auto mb-4 align-top  border-spacing-4"
                  style={thStyle}
                >
                  <thead className="border-spacing-y-2 border-spacing-x-2 ">
                    <tr className=" border-b-2 border-[#dee2e6] box-border text-left ">
                      <th className="py-3 px-3">SL No.</th>
                      <th>Category of Leave</th>
                      <th>No. of leave days</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border-b-2 border-[#dee2e6] box-border ">
                      <td className="py-3 px-3">1</td>
                      <td>Earned Leave </td>
                      <td>18</td>
                    </tr>
                    <tr className=" border-b-2 border-[#dee2e6] box-border ">
                      <td className="py-3 px-3">2</td>
                      <td>Sick Leave </td>
                      <td>12</td>
                    </tr>
                    <tr className=" border-b-2 border-[#dee2e6] box-border">
                      <td className="py-3 px-3">3</td>
                      <td>Casual Leave </td>
                      <td>6</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <li>
                  From date of joining, women associates will be entitled to
                  maternity leave based on eligibility as specified in the
                  Maternity Benefit Act
                </li>
                <li>
                  In addition to the above, as per Axis policy, you are eligible
                  for child adoption leave and paternity leave by adhering to
                  the conditions as specified in the Axis India Leave policy
                </li>
                <br />
                <b>Provident Fund Wages:</b>
                <br />
                <br />
                <li>
                  For the purpose of computing PF Wages to Provident Fund,
                  Pension Fund & EDLI Scheme, PF Wages shall be Monthly Gross
                  Salary as per Annexure A of this letter excluding "Advance
                  Statutory Bonus" & "House Rent Allowance" will be considered.
                  This does not include payments made through "Special Payout".
                </li>
                <li>
                  Determination of PF Wages for the purpose of contribution: PF
                  contribution shall be payable on the earned PF wages or PF
                  wages as per this letter, whichever is lesser
                </li>
                <br />
                <br />
                <b>Employees State Insurance:</b>
                <li>
                  Eligibility to ESI shall be decided by deducting the Advanced
                  Statutory Bonus, Employer PF & ESI contribution from the
                  monthly Gross Compensation (AGC/12) as per Annexure A of this
                  letter.
                </li>
                <li>
                  Monthly ESI contribution will be computed on total
                  remuneration paid to an Associate in a particular month which
                  includes any recurring (or) adhoc special payouts during the
                  month
                </li>
                <li>
                  ESI shall be continued till end of the contribution period
                  (Apr to Sep & Oct to Mar), if the Associate contributes even
                  for one month in the said contribution period.
                </li>
              </ul>
              <b>* Flexible Benefit Plan:</b>Your compensation has been
              structured to ensure that you are adequately empowered to
              apportion components of your salary in a manner that suits you the
              best. This plan will enable you to
              <ol class="mt-3 mb-8 pl-8 list-decimal box-border">
                <li>Choose from a bouquet of allowance or benefits</li>
                <li>
                  Redefine your salary structure within prescribed guidelines
                </li>
                <li>Optimize your earnings</li>
              </ol>
              <b>** Incentive Indication:</b>Incentive amount may be higher,
              lower, or nil as per the terms described herein. The incentive
              program is discretionary, subject to change, and based on
              individual and company performance. It is prorated to the duration
              spent with Axis India for the calendar year and will be paid to
              you only if you are active on Axis's payroll on the day of
              incentive payout.
              <br />
              <b>*** Advance Statutory Bonus</b>is in line with the provisions
              of Payment of Bonus Act, 1965.
              <br />
              <b>
                <u>Note:</u>
              </b>
              : Any statutory revision of Provident Fund/ESI Contribution or any
              other similar statutory benefits will result in a change in the
              Net take home salary and the Annual Gross Compensation will remain
              the same. Axis has made this offer in good faith after expending
              significant time and resources in the hiring process. We hope you
              will join us, but appreciate your right to pursue another path.
              Your formal commitment to joining us forms the basis of further
              planning and client communication at Axis. If you renege on the
              commitment and decide not to join us after signing the offer
              letter, Axis reserves the right to not consider you for future
              career opportunities in the company. We look forward to welcoming
              you to Axis.
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            id="downloadjoiningletter"
            className="btn btn-primary"
            style={{
              backgroundColor: "#97144d",
              color: "white",
              borderColor: "#97144d",
            }}
            onClick={pdfGenerate}
          >
            Download Joining Letter
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoiningLetter;

// Old monolithic-style usage:
// html2pdf(element, opt);
// html2canvas(document.querySelector("#joiningletter"), {
//     allowTaint: true,
//     useCORS: true,
//     scale: 1,
//     width: 2480,
// height: 3508
// }).then(canvas => {
//     //  document.body.appendChild(canvas)
//     var img = canvas.toDataURL("img/png");
//     var doc = new jsPDF();
//     doc.setFont('Arial');
//     // doc.setFontType("normal");
//     doc.setFontSize(50);
//     // doc.getFontSize(30);
//     doc.addImage(img, 'PNG', 7, 13, 195, 105);
//     doc.save("JoiningLetter.pdf");
// })
