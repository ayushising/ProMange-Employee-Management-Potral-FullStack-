import hom from "../Images/homeLoan.jpg";
import "./CreditCard.css";
import "./HomeLoan.css";
import Navbar from "../Navbar/Navbar";
function HomeLoan() {
  return (
    <div>
      <Navbar />
      <div className="homc">
        <img className="hom" src={hom}></img>
        <h2 className="sit">Home Loan</h2>
        <p className="crd">
          Buying a house is a financial goal and to accomplish it, a home loan
          can come to your aid. A loan provides financial resource. With an
          Equated Monthly Instalment (EMI) facility, repayments become
          comfortable. That said, before you avail of a home loan, as a prudent
          loan planning exercise, always assess how much the EMI will be. After
          all, availing a home loan is an important financial decision. The EMI
          (or Equated Monthly Instalment) of your loan consists of the principal
          portion and the interest. Therefore, EMI = principal amount + interest
          paid on the loan. The EMI, usually, remains fixed for the entire
          tenure of your loan and it is to be repaid over the tenure of the loan
          on a monthly basis. During the initial years of your loan tenure, you
          pay more towards interest. Gradually, as you repay the loan, a higher
          portion is adjusted towards the principal component. This is because
          EMIs are computed on a reducing balance method, which works in your
          favour as a borrower. Remember, the interest rate and your loan tenure
          are the vital deciding factors for your loan EMI.
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
export default HomeLoan;
