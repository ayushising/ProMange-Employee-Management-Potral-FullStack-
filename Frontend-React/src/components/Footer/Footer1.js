import React from "react";
import "./foot.css";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div>
      <section class="contact-area" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <div class="contact-social">
                  <ul>
                    <li>
                      {/* <a class="hover-target" href=""> */}
                      <Link to="/about" class="hover-target">
                        About Us
                      </Link>
                      {/* </a> */}
                    </li>
                    <li>
                      <Link to="/email" class="hover-target">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &copy; 2023 ProManage All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer1;
