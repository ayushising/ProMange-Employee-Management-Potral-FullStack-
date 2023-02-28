import hea from "../Images/healthinsu.jpg";
import "./HealthInsurance.css";
import "./CreditCard.css";
import Navbar from "../Navbar/Navbar";
function HealthInsurance() {
  return (
    <div>
      <Navbar />

      <div>
        <img className="healImg" src={hea}></img>
        <div className="healcnn">
          <h2 className="sit">Health Insurance</h2>
          <p className="crd">
            Health insurance covers cost of an insured individual's medical and
            surgical expenses. Subject to the terms of insurance coverage,
            either the insured pays costs out-of-pocket and is subsequently
            reimbursed or the insurance company reimburses costs directly.
          </p>
          <h3 className="sit">What is Health Insurance?</h3>
          <p className="crd">
            Health insurance is an insurance product which covers medical and
            surgical expenses of an insured individual. It reimburses the
            expenses incurred due to illness or injury or pays the care provider
            of the insured individual directly.
          </p>
          <h3 className="sit">Types of Health Insurance</h3>
          <p className="crd">
            Every individual is different and has a unique set of needs. A
            single health insurance product is not enough to cover every
            person's individual requirements. This is precisely where there are
            a number of different types of health insurance plans available.
            Let's take a look at what they are:
          </p>
          <h4 className="sit">1. Individual Health Insurance</h4>
          <p className="crd">
            You can purchase an individual health insurance policy to provide
            cover for yourself, your spouse, your children and your parents.
            These policies typically cover all kinds of medical expenses,
            including hospitalisation, daycare procedures, hospital room rent
            and more. Under an individual health insurance plan, each member has
            their own sum insured amount. So, let's say you've taken an
            individual plan for yourself, your spouse and both your parents with
            a sum insured of INR 8 lakhs. Each of you will be able to claim a
            maximum amount of 8 lakhs per policy year against your health
            insurance.
          </p>
          <h4 className="sit">2. Family Floater Health Insurance</h4>
          <p className="crd">
            A family floater plan allows you to cover your family members under
            a single policy and everybody shares the sum insured amount. These
            plans are typically more affordable than individual plans since the
            sum insured is shared. Let's say you purchase a family floater plan
            for you and your spouse with a sum insured of INR 8 lakhs. In a
            single policy year, you can make claims worth only INR 8 lakhs. Your
            spouse may make claims worth INR 6 lakhs and you could make claims
            worth INR 2 lakhs or vice-versa. Typically, family floater plans are
            ideal for young nuclear families.
          </p>
          <h4 className="sit">3. Senior Citizens Health Insurance</h4>
          <p className="crd">
            These health plans have been designed specifically keeping the
            medical needs and requirements of senior citizens in mind. Most
            senior citizens policies offer additional cover, such as domiciliary
            hospitalisation and even some psychiatric benefits. Since older
            citizens are more likely to have health issues, these policies may
            require a full medical check-up beforehand and could be more
            expensive than regular insurance policies.
          </p>
          <h4 className="sit">4. Critical Illness Insurance</h4>
          <p className="crd">
            There are a number of lifestyle-related diseases that are on the
            rise. Health issues such as cancer, stroke, kidney failure and
            cardiac diseases can be very expensive to deal with and manage
            long-term. This is precisely why critical illness insurance policies
            have been created. They can either be purchased as a rider or add-on
            with your regular health insurance plan or separately as their own
            plan. These policies offer cover for very specific issues and often
            provide claim payouts as a single lump sum payment after the
            diagnosis of a critical illness.
          </p>
          <h4 className="sit">5. Group Health Insurance</h4>
          <p className="crd">
            Unlike individual and family floater policies, group health
            insurance plans can be purchased by a group manager for a large
            number of individuals. For example, an employer can purchase group
            insurance for all their employees or a building secretary may
            purchase such a plan for all the residents of the building. These
            plans are fairly affordable, but they often only provide cover for
            basic health issues. Employers often purchase these plans as an
            additional benefit for employees.
          </p>
        </div>
      </div>
    </div>
  );
}
export default HealthInsurance;
