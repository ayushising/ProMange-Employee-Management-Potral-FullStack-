import cred from "../Images/creditcard.png";
import "./CreditCard.css";
import Navbar from "../Navbar/Navbar";
function CreditCard() {
  return (
    <div>
      <Navbar />
      <div className="credi">
        <img className="creditImg" src={cred}></img>
        <div>
          <h2 className="sit">CreditCard</h2>
          <p className="crd">
            Credit cards are a convenient way to make immediate payments for any
            expense, in a cashless manner. Thanks to credit cards, you can
            fulfil your needs even if you don’t have ready cash on hand. There
            is no need to put off for later what you want to buy now. It could
            be buying the latest mobile phone, booking airline tickets for your
            upcoming holiday, paying for dinner at a classy restaurant with your
            family or friends or even buying your monthly groceries. Just swipe
            the card now and clear your credit card bill later! Choose from Axis
            Bank’s list of credit cards and apply for credit card that suited
            best for your needs.{" "}
          </p>
          <div className="con">
            <h3 className="sit">Which is the Best Credit Card for You?</h3>
            <p className="crd">
              The best credit card for you would be the one that you choose
              based on the credit limit as per your expenses. This, however,
              also depends on your credit score. For instance, if you have a low
              credit score resulting from failure to make credit card payment
              bills on time, then you may face some restrictions when you apply
              for credit card.
            </p>
            <p className="crd">
              But if you are a first-time credit card holder, here is how you
              can choose the best credit card for yourself:
            </p>
            <ul className="basicList">
              <li>
                <strong>Monthly expenses:</strong>
                <br></br>Choose a credit card whose limit is close to your
                monthly expenses. If you have a lower credit limit, prioritise
                only the payments which should be made through your credit card.
              </li>
              <li>
                <strong>Rewards &amp; Points:</strong>
                <br></br>You could also select a credit card that offers certain
                additional benefits such as cashback and discounts on your
                purchases or complimentary access to airport lounges.
              </li>
              <li>
                <strong>Choice of Payments:</strong>
                <br></br>While many credit cards are generally restricted to
                certain payment modes, many others can allow you to pay across
                different digital channels for online credit card payment.
              </li>
              <li>
                <strong>Card fees &amp; Charges:</strong>
                <br></br>Credit cards will have slightly different interest
                rates depending on the bank or the provider that offers the
                card. Therefore, always compare the interest rates before you
                choose a credit card.
              </li>
            </ul>
            <h3 className="sit">
              Things to Know Before Applying for a Credit Card
            </h3>
            <ul class="basicList">
              <li>
                <strong>Credit Card Statement</strong>
                <br></br>The credit card statement shows the credit card bill,
                the outstanding amount on the card, the due date and also the
                details of the transactions made throughout the month. It is
                generated every 30 or 31 days and need not necessarily be the
                1st day of each month; rather, it is the date when the card is
                issued. The credit card statement is sent on the cardholder’s
                registered email ID.
              </li>
              <li>
                <strong>Transferring of Funds</strong>
                <br></br>In India, it is not possible to transfer your funds
                from your credit card to another bank account, but you can use a
                third-party website or mobile application for this. A debit card
                enables you to transfer money from your debit card to another
                bank account through mobile or internet banking.
              </li>
              <li>
                <strong>Reward Points System</strong>
                <br></br>Every time you make a purchase on your credit card, you
                can earn reward points on the purchase. When these points
                accumulate, you can redeem them against gift vouchers, cash or
                airline miles. However, these reward points have an expiry date,
                and you need a minimum number of points to be able to redeem
                them.
              </li>
              <li>
                <strong>Factors that Affect Your Credit Score</strong>
                <br></br>Your credit card CIBIL (Credit Information Bureau
                (India) Limited) score will not be directly affected if you
                apply for a credit card online and it is rejected. However, if
                you default on your payments and your income source is unstable,
                or if you do not meet the credit card eligibility criteria, then
                such factors can impact your CIBIL score. Therefore, it is
                always important to make your credit card bill payment on time.
                In addition, one way to successfully get a credit card would be
                to reapply for a new card and avoid the mistakes made during the
                previous attempt.
              </li>
              <li>
                <strong>Credit Card Fraud</strong>
                <br></br>It is possible that your credit card details may be
                stolen when you make an online credit card payment. Online
                phishing and fraud on fake websites, suspicious calls and emails
                and any other dubious communication can lead to credit card
                fraud. In the event of such a mishap, immediately inform your
                bank or credit card company of the fraud, which can help them
                investigate the cybercrime and protect your financial data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreditCard;
