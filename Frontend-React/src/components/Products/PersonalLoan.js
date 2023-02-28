import peri from "../Images/personaLoan.jpg";
import Navbar from "../Navbar/Navbar";
import "./OurProducts.css";
function PersonalLoan() {
  return (
    <div>
      <Navbar />

      <div className="perl">
        <img className="per" src={peri} />
        <h2 className="sit">Personal Loan</h2>
        <p className="crd">
          A Personal Loan is a form of financial assistance provided by
          different banks and NBFCs. It can be used for personal needs such as
          medical emergencies, higher education, marriage expenses, holiday
          plans, and many more. There is no constraint on how the borrowed
          amount is actually used, unlike certain other types of loans; the
          borrower has complete freedom to use the money for whatever reason
          they choose.
        </p>
        <h3 className="sit">What is Home Loan EMI?</h3>
        <p className="crd">
          EMI’s or Equated Monthly instalments are a systematized and
          comfortable approach to repaying loans availed. The amount repayable
          (amount borrowed + amount payable towards interest) is divided
          throughout the tenor of the loan with uniform amounts payable per
          month. Each such monthly amount repayable is called an EMI To allocate
          amount paid towards the interest and principal, applicants are
          provided an amortization schedule which indicates corresponding
          balance amounts per year.
        </p>
        <h3 className="sit">What is a Home Loan Amortization Schedule?</h3>
        <p className="crd">
          Though the EMIs remain largely uniform throughout the tenure of their
          loan, the amounts repaid are credited towards the principal and
          interest to be repaid. Typically the initial instalments contribute
          more towards the interest amount with later instalments going towards
          the principal. An amortization schedule provides the break-up of these
          amounts repaid towards principal and interest along with their
          respective balances through every year of the loan. Simply put, an
          amortization schedule is the road map towards the repayment of your
          home loan denoting the milestones and the ideal points you should be
          at through the cycle.
        </p>
        <h3 className="sit">Who can apply for a home loan?</h3>
        <p className="crd">
          <ul class="emiBenf">
            <li>
              Salaried individuals (working in government and private sector)
            </li>
            <li>
              Professionals (i.e. doctors, engineers, dentists, architects,
              chartered accountants, cost accountants, company secretary,
              management consultants, etc.)
            </li>
            <li>Self-employed in business and filing Income-Tax Returns</li>
            <li>
              Individuals over 21 years of age and ideally not over 60-65 years.{" "}
            </li>
          </ul>
        </p>
        <h3 className="sit">
          Typically, what documents are needed to avail a home loan?
        </h3>
        <p className="crd">
          <ul class="emiBenf">
            <li>Income statements</li>
            <li>Salary slips and Form 16</li>
            <li>Bank statements</li>
            <li>Latest Income-Tax Returns</li>
            <li>Credit report</li>
            <li>
              Age proof (Aadhaar, Passport, PAN card, Driving License, etc.)
            </li>
            <li>
              Address proof (Aadhaar, Passport, Driving License, electricity
              bill, telephone bill, ration card, etc.)
            </li>
            <li>
              Photo identification proof (Aadhaar, Passport, PAN card, Voter id,
              Driving license, etc.)
            </li>
            <li>
              Property documents (Sale deed, agreement of sale with the builder,
              Land and building tax paid receipts, certified copy of the
              sanctioned plan of the property, possession certificate, original
              receipts of the advance paid for purchase, detail of estimated
              cost of construction, No Objection Certificate (NOC) from the
              housing society or builder, letter from the
              builder/society/housing board stating their bank account details
              for remittances)
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
export default PersonalLoan;
