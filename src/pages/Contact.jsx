import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { isEmail, isNotEmpty } from "../utils/validation";
import Input from "../components/Input";
import Info from "../components/Info";

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
      [identifier + "Error"]: "",
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      nameError: isNotEmpty(enteredValues.name) ? "" : "Please enter a name.",
      emailError: !enteredValues.email
        ? "Please enter an email."
        : !isEmail(enteredValues.email)
        ? "Please enter a valid email."
        : "",
      phoneError: !isNotEmpty(enteredValues.phone)
        ? "Please enter a phone number"
        : enteredValues.phone.length < 10
        ? "Phone number is too short - minimum 10 characters"
        : enteredValues.phone.length > 10
        ? "Phone number is too long - maximum 10 characters"
        : "",
      messageError: isNotEmpty(enteredValues.message)
        ? ""
        : "Please enter a message.",
    };

    setErrorMessage(newErrors);
    const formIsValid = Object.values(newErrors).every((err) => err === "");

    if (!formIsValid) return;

    setShowMessage(true);
  }

  return (
    <section className="contact-section">
      <h2>Contact us</h2>
      {showMessage ? (
        <div className="success-message">
          <p className="success-paragraph">
            Your submission has been succeeded!{" "}
            <CheckCircleIcon style={{ fontSize: "24px", color: "green" }} />
          </p>
          <p className="success-paragraph">
            Thank you for contacting us! We will get back to you as soon as
            possible!
          </p>
        </div>
      ) : (
        <div className="contact-container">
          <Info />
          <form onSubmit={handleSubmit} className="form-container">
            <Input
              type="text"
              id="name"
              placeholder="Enter a name"
              label="Name"
              icon={<AccountCircleIcon />}
              onChange={(e) => handleInputChange("name", e)}
              value={enteredValues.name}
              error={errorMessage.nameError}
              name="name"
            />
            <Input
              type="text"
              id="email"
              placeholder="Ex: gymWorld@gmail.com"
              label="Email"
              icon={<EmailIcon />}
              onChange={(e) => handleInputChange("email", e)}
              value={enteredValues.email}
              error={errorMessage.emailError}
              name="email"
            />
            <Input
              type="number"
              id="phone"
              placeholder="Ex: 023 222 000 000"
              label="Phone"
              icon={<PhoneIcon />}
              onChange={(e) => handleInputChange("phone", e)}
              value={enteredValues.phone}
              error={errorMessage.phoneError}
              name="phone"
            />
            <Input
              isTextarea
              id="message"
              placeholder="Your message"
              label="Message"
              icon={<MessageIcon />}
              onChange={(e) => handleInputChange("message", e)}
              rows={4}
              maxLength={400}
              value={enteredValues.message}
              error={errorMessage.messageError}
              name="message"
            />
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
