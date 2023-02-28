import React from "react";
import "./Stake.css";
import { Navigate, useNavigate } from "react-router-dom";
const StakeCard = ({ Stakename, designation, email }) => {
  const navigate = useNavigate();

  const handleMessage = () => {
    navigate("/email");
  };
  return (
    <div>
      <div class="profile-card ml-10 my-10">
        <div class="profile-card-header">
          <div class="profile-image"></div>

          <div class="profile-info">
            <h3 class="profile-name">{Stakename}</h3>
            <p class="profile-desc">{designation}</p>
            <p class="profile-desc">{email}</p>
          </div>
        </div>

        <div class="profile-card-body">
          <div class="action1">
            <button
              class="btn1 btn1-pink"
              onClick={() => {
                handleMessage();
              }}
            >
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeCard;
