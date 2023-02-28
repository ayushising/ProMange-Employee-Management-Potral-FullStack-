import logo from "./logo.svg";
import "./App.css";
import News from "./components/News";
// import Card from "./components/Card";
import NewsFeed from "./components/NewsFeed";
import Carousell from "./components/Carousell/Carousell";
import Footer1 from "./components/Footer/Footer1";
// import Products from "./components/OurProducts/Products";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Announcement from "./components/Annoucement/Announcement";
import LearningPage from "./components/MyLearnings/LearningPage";
import EmployeeProfile from "./components/MyProfile/EmployeeProfile";
import MyDocuments from "./components/MyDocuments/MyDocuments";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JoiningLetter from "./components/MyDocuments/JoiningLetter";
import AppointmentLetter from "./components/MyDocuments/AppointmentLetter";
import SalarySlip from "./components/MyDocuments/SalarySlip";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import PeersPage from "./components/PeersInfo/PeersPage";
import PeersProfile from "./components/PeersInfo/PeersProfile";
import Organisation from "./components/Organisation/Organisation";
import Pdf from "./components/Organisation/Pdf";
import LiveProject from "./components/LiveProject/Liveproject";
import Projects from "./components/LiveProject/projects";
import JobOpportunities from "./components/LiveProject/JobOpportunities";
import GoldLoan from "./components/Products/GoldLoan";
import EduLoan from "./components/Products/EduLoan";
import MutualFunds from "./components/Products/MutualFunds";
import HomeLoan from "./components/Products/HomeLoan";
import PersonalLoan from "./components/Products/PersonalLoan";
import LifeInsurance from "./components/Products/LifeInsurance";
import HealthInsurance from "./components/Products/HealthInsurance";
import CarLoan from "./components/Products/CarLoan";
import CreditCard from "./components/Products/CreditCard";
import Products from "./components/Products/Products";
import ContactUs from "./components/email";
import SendMessage from "./components/Whatsappmsgs/SendMessage";
import AboutUs from "./components/About/aboutUs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/employeeprofile" element={<EmployeeProfile />}></Route>
          <Route path="/mylearning" element={<LearningPage />}></Route>
          <Route path="/news" element={<NewsFeed />}></Route>
          <Route path="/joiningletter" element={<JoiningLetter />}></Route>
          <Route path="/announce" element={<Announcement />}></Route>

          <Route path="/mydocuments" element={<MyDocuments />}></Route>
          <Route
            path="appointmentletter"
            element={<AppointmentLetter />}
          ></Route>
          {/* <Route path="/products" element={<OurProducts />}></Route> */}

          <Route path="salaryslip" element={<SalarySlip />}></Route>
          <Route path="peersInfo" element={<PeersPage />}></Route>
          <Route path="peersprofile" element={<PeersProfile />}></Route>
          <Route path="/organization" element={<Organisation />}></Route>
          <Route path="/pdf" element={<Pdf />}></Route>
          <Route path="/liveProject" element={<LiveProject />}></Route>
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/job/:jobId" element={<JobOpportunities />} />

          <Route path="/Products" element={<Products />}></Route>
          <Route path="/GoldLoan" element={<GoldLoan />}></Route>
          <Route path="/EduLoan" element={<EduLoan />}></Route>
          <Route path="/MutualFunds" element={<MutualFunds />}></Route>
          <Route path="/CarLoan" element={<CarLoan />}></Route>
          <Route path="/PersonalLoan" element={<PersonalLoan />}></Route>
          <Route path="/HomeLoan" element={<HomeLoan />}></Route>
          <Route path="/HealthInsurance" element={<HealthInsurance />}></Route>
          <Route path="/LifeInsurance" element={<LifeInsurance />} />
          <Route path="/CreditCard" element={<CreditCard />} />
          <Route path="/email" element={<ContactUs />} />
          <Route path="/sendmsg" element={<SendMessage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <MyDocuments /> */}

      {/* <NewsFeed /> */}

      {/* <Footer1 /> */}
      {/* <Navbar />
      <Carousell />
      <Products />
      <Footer1 /> */}
      {/* <Announcement /> */}
      {/* <Navbar /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
