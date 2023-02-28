import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Liveproject.css";

const flowchart = [
  {
    job_id: "1",
    job_name: "UI Designer",
    proj: "Customer Support",
    job_des:
      "We are looking for a creative, skilled UI developer to design websites with functionality and aesthetics in mind. The UI developer will work with back-end developers and web developers to ensure that the website is optimized for several devices and presented in an attractive way.To be successful as a UI developer you should have excellent knowledge of HTML, JavaScript, and CSS. In addition to this, you must work well in a team as there are several individuals involved in the development process.",
    skills: (
      <ul className="skill">
        <li>"Proficiency in HTML, JavaScript, jQuery, and CSS.</li>{" "}
        <li>Knowledge of Adobe Illustrator.</li>
        <li>Good interpersonal skills.</li>
        <li>
          {" "}
          Understanding of key design principles.Good problem-solving skills.
        </li>
      </ul>
    ),
  },
  {
    job_id: "2",
    job_name: "ServiceNow  Engineer",
    proj: "Employemnet Management",
    job_des:
      "We are looking for highly skilled, driven to learn and proactive individuals who can gather user requirements, define system functionality, document and write code revolving around the Python ecosystem. If you’re someone familiar with the software development life cycle from preliminary system analysis to tests and deployment, and love building high-quality, innovative and fully performing software that complies with coding standards and technical design.",
    skills: (
      <ul className="skill">
        <li>
          {" "}
          At least 2-3 years of experience building applications using Python.
        </li>
        <li>Strong knowledge of web scraping and its technologies</li>
        <li>
          Strong knowledge of how SEO works and APIs used (Moz, Majestic, etc.){" "}
        </li>
        <li>Knowledgeable in Python frameworks (Django, Flask)</li>
        <li>
          {" "}
          Knowledgeable in messaging brokers such as Rabbit MQ Strong knowledge
          in OOP, MVC, and design patterns
        </li>
        <li>
          Familiarity with relational databases (MySQL, Postgres) and NoSQL
          databases Familiarity with version control tools (GIT)
        </li>
        <li>
          Experience integrating various APIs and RESTful Web Services (Google,
          Facebook, Twitter, etc.)
        </li>
        <li>
          Experience in optimizing page and server response speed, load
          balancing, security and authentication
        </li>
      </ul>
    ),
  },
  {
    job_id: "3",
    job_name: "Frontend Developer",
    proj: "Leave Management",
    job_des:
      "We are looking for an experienced candidate with excellent academic credentials from good institutes to work in development of the front-end of our websites , . and integrating it with the server back-end written in PHP. You will be responsible for the complete designing of the website, and for creating a modern dynamic website.",
    skills: (
      <ul className="skill">
        <li>
          At least 2 years of experience of front-end development in Angular.js,
          React.js or Vue.js
        </li>
        <li>
          {" "}
          Website development skills, including capability to add scientific
          contents to the websites
        </li>
        <li>
          {" "}
          Strong working knowledge of HTML, CSS, JAVASCRIPT, JSON, JQuery,
          Bootstrap etc.
        </li>
        <li>
          {" "}
          A successful candidate must have excellent written and verbal
          communication skills in English with ability to clearly communicate
          and present technical details and results to colleagues, clients, and
          must be able to work independently.
        </li>
      </ul>
    ),
  },
  {
    job_id: "4",
    job_name: "Software Manager",
    proj: "Leave Management",
    job_des:
      " Account & Relationship Management, Strategy Formulation, Client Liaison, Team & Resource Management, Consensus building, Crisis Management, Negotiations and Contracts. Monitoring project status during the course of periodic project review meetings",
    skills: (
      <ul className="skill">
        <li>
          IT Program / Account Management Professional with 6 + years of
          experience in IT industry with a strong focus on software projects
          delivery.5 years of project management experience Java
        </li>
        <li>JavaScript</li>
        <li>Unix</li>
        <li>HTML</li>
        <li>SQL</li>
        <li>.NET</li>
        <li>PHP</li>
        <li>ASP</li>
        <li>C++</li>
      </ul>
    ),
  },
  {
    job_id: "5",
    job_name: "React Developer",
    proj: "Loan",
    job_des:
      "Use coding languages to create user-friendly web pages and applications. Constantly maintain pages and update them to improve the user journey and aesthetics. Testing and analysing existing code to improve the experience. Diagnosing and debugging any errors in code. Communicating with design and development teams to align on-site vision.Help to create and maintain templates and guideline documents for future pages.Streamlining communication between stakeholders in design and back end development.Staying up to date on changes or trends in the Front End Development industry.",
    skills: (
      <ul className="skil">
        <li>
          "ReactJs, HTML, CSS, JavaScript, D3.js, JSON, Redux, React Hook Forms,
          JSX, Typescript, Material UI{" "}
        </li>
        <li>
          Experience level: Must be coding in ReactJs for at least 2 years
          dedicatedly
        </li>
        <li> Education: B.E, B.Tech in CS/IT preferred but not mandatory"</li>
      </ul>
    ),
  },
];

export default function JobOpportunities() {
  const { jobId } = useParams();
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        {flowchart.map((f) => {
          if (f.job_id === jobId) {
            return (
              <div className="ni" key={f.job_id}>
                <p className="title">{f.job_name}</p>
                <h2 className="jdes">Job Description</h2>
                <p className="de">{f.job_des}</p>
                <br></br>
                <br></br>
                <h2 className="jdes">Required Candidate Profile</h2>
                <p className="de">{f.skills}</p>
                <br></br>
                <div className="flex">
                  <h2 className="jdes">Project :-</h2>
                  <h3 className="jde"> {f.proj}</h3>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
