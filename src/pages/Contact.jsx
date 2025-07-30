import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { isEmail, isNotEmpty } from "../utils/validation";

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    messageError: "",
  });

  function handleInputChange(identifier, e) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: e.target.value,
    }));
    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [identifier]: "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      nameError: isNotEmpty(enteredValues.name) ? "" : "Please enter a name.",
      emailError: !enteredValues.email
        ? "Please enter an email."
        : !isEmail(enteredValues.email)
        ? "Please enter a valid email."
        : "",
      phoneError: isNotEmpty(enteredValues.phone)
        ? ""
        : "Please enter a phone number.",
      messageError: isNotEmpty(enteredValues.message)
        ? ""
        : "Please enter a message.",
    };

    setErrorMessage(newErrors);

    const formIsValid = Object.values(newErrors).every((err) => err === "");

    if (formIsValid) setShowMessage(true);
  }
  return (
    <section className="contact-section">
      <h2>Contact us</h2>
      {showMessage ? (
        <div className="success-message">
          <p className="success-paragraph">
            Your submited has been succed!
            <CheckCircleIcon style={{ fontSize: "24px", color: "green" }} />
          </p>
          <p className="success-paragraph">
            Thank you for contacting us! We will get back to you as soon as
            possible!
          </p>
        </div>
      ) : (
        <div className="contact-container">
          <div className="info">
            <h2>Get in touch</h2>
            <p>
              Thank you for choosing GymWorld! We are here to help you with
              information that you need.
            </p>
            <p>
              If you want to keep up to date with all the news and promotional
              offers, you can fill in the form below.
            </p>
            <p>Email: gymWorld@gmail.com</p>
            <p>Phone: 023 222 000 000</p>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <div>
              <label className="label-container">
                <AccountCircleIcon />
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Enter you name..."
                  onChange={(e) => handleInputChange("name", e)}
                  value={enteredValues.name}
                />
                {errorMessage.nameError && <p>{errorMessage.nameError}</p>}
              </label>
            </div>
            <div>
              <label className="label-container">
                <EmailIcon />
                Email:
                <input
                  type="text"
                  name="email"
                  placeholder="Ex: gymWorld@gmail.com"
                  onChange={(e) => handleInputChange("email", e)}
                  value={enteredValues.email}
                />
              </label>
              {errorMessage.emailError && <p>{errorMessage.emailError}</p>}
            </div>
            <div>
              <label className="label-container">
                <PhoneIcon />
                Phone:
                <input
                  type="number"
                  name="phone"
                  placeholder="Ex: 023 222 000 000"
                  onChange={(e) => handleInputChange("phone", e)}
                  value={enteredValues.phone}
                />
              </label>
              {errorMessage.phoneError && <p>{errorMessage.phoneError}</p>}
            </div>
            <div>
              <label className="label-container">
                <MessageIcon />
                Message:
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  maxLength={400}
                  onChange={(e) => handleInputChange("message", e)}
                  value={enteredValues.message}
                />
              </label>
              {errorMessage.messageError && <p>{errorMessage.messageError}</p>}
            </div>
            <button type="submit" className="submit-btn">
              Submit
              <ArrowUpwardIcon />
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
