import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import StakeCard from "../Stake/StakeCard";
import "./Liveproject.css";

const flowchart = [
  {
    project_id: "1",
    owners_name: "Soundarya",
    email: "soundaryavl18@gmail.com",
    project_name: "Employee Management",
    project_des:
      "“Employee Management System” which will help the admin or owner of the company to manage employees in a company. In this system, we will implement the concept of Linked List and Queue. Admin will be able to search any employee by name, salary or even position. Besides, Admin can also give retirement to most senior employees if there occurs any employee overflow or the employee reaches the retirement age. Basically, the rules are simple, the first person entering the organization will be terminated in that case. Here, we will use a queue to do so. Moreover, the admin will be able to see performance of employees to promote or increase salary based on the performance. In addition, Admin can approve the leave on applications of employees. He can also record the medical report of a particular application if he wants. Lastly, the admin will be able to see the reports of employees. The system is aimed to make the management task of an admin easy, convenient and effective.",
    imageUrl: "Employee.png",
  },
  {
    project_id: "2",
    owners_name: "Ayushi",
    email: "ayushivl18@gmail.com",
    project_name: "Customer Support",
    project_des:
      " Customer service is the support that organizations offer to customers before and after purchasing a product or service. In customer service, the organization's representative values both potential and existing customers equally. Customer service representatives are the main line of contact between an organization and its customers, making CX a critical facet and the main priority of customer service teams.Addressing customer service software will be inadequate. This is because, in truth, there are software and real-life touchpoints which create a customer service system. This is why it would be better to call them Customer Servicing Platforms due to the high number of different touchpoints and several software features and components. The customer service system was built in the first place to create a wholesome experience for the customers of the company. Once a sale has been made, customers will have product-related issues that will need solving. This is where the IT Ticketing System will be best utilized. This customer service system component is used to issue tickets to customers who contact the help desk or customer service desk for their queries. ",
    imageUrl: "Customer.png",
  },
  {
    project_id: "3",
    owners_name: "Aditi",
    email: "aditi@gmail.com",
    project_name: "Leave Management",
    project_des:
      "Leave management is a primary component of the HR departments responsibilities. Managing time-off requests means juggling staffing requirements while maintaining employee satisfaction and ensuring legal and policy compliance This is easier said than done which is why having a clear leave management process is so important. A good leave management system helps HR and team managers ensure everyone is on the same page and both business and personnel needs are being met, Although some employers want to keep employees at work all the time, they need their fair share of time-off to rest and recuperate. An overworked employee is an unproductive one. Leave management is the process of managing employee time-off requests in a fair, accurate, and efficient way.The responsibility of handling employee vacation requests falls onto the shoulders of supervisors, HR staff, and workforce management staff.",
    imageUrl: "Leave.jpg",
  },
  {
    project_id: "4",
    owners_name: "Mrudula",
    email: "mrudula@gmail.com",
    project_name: "LoanRe",
    project_des:
      "An enterprise loan management system is a digital platform that helps lenders in automating the loan handling processes, right from loan application to its closing. It enables credit unions, banks, payday lenders, mortgage lenders, and other financial institutions to gather and verify customer data faster, offer new loan products, manage the current products, calculate interest rates, measure the loan return capabilities of an individual, etc. Applying for loans used to be long, tedious, and often unsatisfactory for both borrowers and lenders. With our Loan Management System that automates processes while eliminating redundant tasks using Artificial Intelligence and Machine Learning Technologies, the entire process has become more streamlined, faster, and even more secure for the borrower as well as the lender. This guarantees Banks and Financial Institutions a quick and efficient experience free of any headaches.",
    imageUrl: "LoanRe.png",
  },
];

export default function Projects() {
  const { projectId } = useParams();
  console.log({ projectId });
  return (
    <div>
      <Navbar />
      <div className=" mt-24">
        {flowchart.map((f) => {
          if (f.project_id === projectId) {
            return (
              <div key={f.project_id}>
                <p className="title ">{f.project_name}</p>
                <p className="des">{f.project_des}</p>
                <img
                  className="flow"
                  src={require("../Images/" + f.imageUrl)}
                  alt=""
                />
                {/* <p className="own">
                  Owner's Name: {f.owners_name}
                  <br></br>Email : {f.email}
                </p> */}
                <div style={{ marginLeft: "4%" }}>
                  <p className="liveproject" style={{ marginLeft: "12%" }}>
                    {" "}
                    Stakeholders{" "}
                    <hr
                      class="w-54 h-2  bg-red-700 border-0 rounded mt-1"
                      style={{
                        height: "3px",
                        width: "12rem",
                        backgroundColor: " #af356a",
                        opacity: "2",
                      }}
                    ></hr>
                  </p>
                  <div className=" mb-12 flex" style={{ marginLeft: "9%" }}>
                    <StakeCard
                      Stakename="Ayushi Singh"
                      designation="Senior Program Manager"
                      email="ayushisingh@gmail.com"
                    />
                    <StakeCard
                      Stakename="Lade Mrudula"
                      designation="Program Manager"
                      email="lademrudula@gmail.com"
                    />
                    <StakeCard
                      Stakename="Soundarya VL"
                      designation="Team Lead"
                      email="soundaryavl@gmail.com"
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
