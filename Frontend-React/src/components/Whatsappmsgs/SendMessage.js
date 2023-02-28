import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, TextField, styled } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import whatsapimg from "./whatsapimg.jpeg";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "#7ed957",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#7ed957",
      fontSize: "0.9em",
    },
    borderRadius: "10px",
  },
}));

const textFieldInputLabelStyle = {
  fontSize: "0.9em",
  alignSelf: "center",
  justifySelf: "center",
};

const textFieldStyle = {
  width: "230px",
};

const SendMessage = () => {
  const CHARACTER_LIMIT = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const [showemaildiv, setshowemaildiv] = useState(false);
  const [formData, setFormData] = useState({
    mobileNumber: "+91 8074830627",
    message: "",
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
      // Regex expression to remove all characters which are NOT alphanumeric
      let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

      // Appending the phone number to the URL
      let url = `https://web.whatsapp.com/send?phone=${number}`;

      // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(message)}&app_absent=0`;

      // Open our newly created URL in a new tab to send the message
      window.open(url);
    }
  };

  return (
    <>
      {showemaildiv && (
        <div
          className="fixed bottom-16  right-12 my-4 mx-4 "
          style={{
            backgroundColor: "ghostwhite",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0px 9px 14px 0 rgb(133 148 160 / 20%)",
          }}
        >
          <div className="communication">
            <div className="whatsapp-card data">
              <div className="title flex justify-center">
                <div style={{ marginRight: "0.5em" }}>
                  <WhatsAppIcon />
                </div>
                <div style={{ fontSize: "24px" }}>Send Message</div>
              </div>
              {numberEmptyError && (
                <div className="errors">Mobile number cannot be empty!</div>
              )}
              {messageEmptyError && (
                <div className="errors">Message cannot be empty!</div>
              )}
              {!numberEmptyError && !messageEmptyError && (
                <div style={{ display: "none" }} className="errors-null">
                  .
                </div>
              )}
              <div className="search_contact data">
                <CssTextField
                  error={numberEmptyError}
                  label="Support Team"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={""}
                  onChange={onChange}
                  size="small"
                  disabled="true"
                  style={{
                    margin: "1em 0em",
                    color: "black",
                  }}
                  inputProps={{
                    style: textFieldStyle,
                  }}
                  InputLabelProps={{
                    style: textFieldInputLabelStyle,
                  }}
                  required
                />
              </div>
              <div className="message data" style={{ marginTop: "1.5em" }}>
                <CssTextField
                  multiline
                  maxRows={4}
                  label="Message"
                  placeholder="Hi! Sending a message from React...."
                  size="small"
                  InputLabelProps={{
                    style: textFieldInputLabelStyle,
                  }}
                  inputProps={{
                    style: {
                      width: "230px",
                      height: "90px",
                    },
                    maxLength: CHARACTER_LIMIT,
                  }}
                  FormHelperTextProps={{
                    style: {
                      margin: 0,
                      padding: "0 0 0 5px",
                      fontSize: 10,
                    },
                  }}
                  name="message"
                  value={message}
                  onChange={onChange}
                  required
                  error={
                    message.length > CHARACTER_LIMIT - 1 || messageEmptyError
                  }
                  helperText={
                    !(message.length > CHARACTER_LIMIT - 1)
                      ? `${message.length}/${CHARACTER_LIMIT}`
                      : "Max length exceeded"
                  }
                />
              </div>
              <div style={{ marginTop: "1.5em", marginLeft: "106px" }}>
                <Button
                  onClick={onSubmit}
                  variant="outlined"
                  color="success"
                  size="small"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-0  -right-16 mb-4">
        {/* <Button */}
        <img
          src={whatsapimg}
          style={{ maxWidth: "32%" }}
          onClick={() => setshowemaildiv(!showemaildiv)}
        />
        {/* </Button> */}
      </div>
    </>
  );
};

SendMessage.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default SendMessage;
