import lif from "../Images/insur.jpg";
import "./LifeInsurance.css";
import "./CreditCard.css";

import Navbar from "../Navbar/Navbar";
function LifeInsurance() {
  return (
    <div>
      <Navbar />
      <div className="lifcon">
        <img className="lifImg" src={lif}></img>
        <h2 className="sit">Life Insurance</h2>
        <p className="crd">
          Life can throw up any kind of unforeseen risk, arising from a medical
          emergency, an accident, a natural calamity or the loss of a loved one.
          So now you can protect yourself and your family against all risks with
          our Online Insurance Plans and get the policy instantly here with just
          a few clicks. High medical bills, expensive repairs to your vehicle or
          medical emergencies while travelling need not be a worry if you have
          the right insurance policy in place. As a certified corporate agent of
          LIC of India, Max Life Insurance, Bajaj Allianz Life Insurance, Tata
          AIG General Insurance, ICICI Lombard General Insurance, Aditya Birla
          Health Insurance and Niva Bupa Health Insurance, Axis Bank has
          solutions to cater to your various needs. Enjoy freedom from financial
          worries by purchasing the insurance plan most suited to your
          requirements
        </p>
        <p className="crd">
          There are two basic <a>types of Life Insurance</a> plans -
        </p>
        <h3 className="sit">What is Pure Protection Plan?</h3>
        <p className="crd">
          A Pure Protection plan is designed to secure your family’s future by
          providing a lump sum amount, in your absence.
        </p>
        <h3 className="sit">What is Protection and Savings Plan?</h3>
        <p className="crd">
          A Protection and Savings plan is a financial tool that helps you plan
          for your long-term goals like purchasing a home, funding your
          children’s education, and more, while offering the benefits of a Life
          Cover.
        </p>
        <h3 className="sit">Factors that affect life insurance premium</h3>
        <p className="crd">
          Now that you know what is life insurance and why you need it, find out
          the factors that can affect the life insurance premium:
        </p>
        <ul
          className="className='box-border pl-8 mt-3 list-disc'"
          class="basicList"
        >
          <li class="txt">
            <b>Age:</b> One of the prime factors that affect the premium for a
            life insurance plan is your age. The life insurance premium is lower
            for younger people and gradually increases with age
          </li>
          <li class="txt">
            <b>Gender:</b> Studies have shown women live longer than men
            <sup>1</sup>. Therefore, the life insurance premium is lower for
            women as compared to men
          </li>
          <li class="txt">
            <b>Health conditions:</b> Your present and past health conditions
            can determine the premium for your life insurance plan. If you have
            any pre-existing illnesses or have suffered from an illness in the
            past that may resurface or affect your present health, you would be
            charged a higher premium
          </li>
          <li class="txt">
            <b>Family health history: </b>The chances of suffering from a
            disease that runs in your family are considerably high. So, if any
            hereditary illnesses run in your family, you may have to pay a
            higher premium
          </li>
          <li class="txt">
            <b>Smoking and drinking alcohol:</b> Lifestyle habits like smoking
            and drinking alcohol can impact your health and lead to multiple
            health issues. Therefore, insurance companies charge a high premium
            for individuals who smoke or drink alcohol
          </li>
          <li class="txt">
            <b>Type of coverage:</b> The type of coverage you opt for can
            increase or decrease the life insurance plan’s premium. If you add
            any riders to your plan, the premium would increase. A longer policy
            term can also result in a higher premium compared to a shorter term.
            In addition to this, the type of life insurance plan you select also
            impacts the premium. For instance, term life insurance is the most
            affordable form of life insurance
          </li>
          <li class="txt">
            <b>Amount of coverage:</b> A higher sum assured would result in a
            higher premium and vice versa
          </li>
          <li class="txt">
            <b>Occupation: </b>If you work in a high-risk job, the premium for
            your life insurance plan would be higher than others. For example,
            if you work in construction or if your job puts you at any kind of
            risk, such as regular exposure to chemicals, the insurance company
            will charge a higher premium
          </li>
        </ul>
        <h3 className="sit">
          Let us understand some commonly used terms in Life Insurance:
        </h3>
        <ul class="basicList">
          <li class="txt">
            Life Assured: It is the person who is covered under the insurance
            policy
          </li>
          <li class="txt">
            Proposer: It is the person who pays the premiums of the policy. For
            example: If you have bought the policy for yourself, then you are
            both the Life Assured as well as the Proposer. Similarly, if you
            purchase an insurance policy for a family member, then you are the
            proposer and the family member is the Life Assured.
          </li>
          <li class="txt">
            Nominee or Beneficiary: It is the person you appoint at the time of
            buying the policy to receive the benefits of your insurance policy,
            in your absence.
          </li>
          <li class="txt">
            Insurer: The insurance company that sells the life insurance policy
            is called the Insurer (for example, ICICI Prudential Life
            Insurance).
          </li>
          <li class="txt">
            Life Cover: It is the amount that the Insurer will pay to your
            Nominee in case of an unfortunate event.
          </li>
          <li class="txt">
            Maturity Benefit: For Protection + Savings policies, the Insurer
            pays a certain lump sum of money on completion of the policy term.
            This amount is known as the Maturity Amount.
          </li>
          <li class="txt">
            Premium: A premium is the amount you pay to the insurer for
            receiving the benefits of the insurance policy. These payments can
            be made on a regular basis throughout the policy duration, for a
            limited number of years or just once, as per the options available
            under the policy you choose.
          </li>
          <li class="txt">
            Premium Payment Term: The number of years for which you pay the
            premiums is known as the Premium Payment Term.
          </li>
          <li class="txt">
            Policy Term: The number of years for which the Life Cover continues.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default LifeInsurance;
