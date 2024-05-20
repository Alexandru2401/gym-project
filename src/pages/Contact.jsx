import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

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
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label className="label-container">
                <EmailIcon />
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Ex: gymWorld@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label className="label-container">
                <PhoneIcon />
                Phone:
                <input
                  type="number"
                  name="phone"
                  placeholder="Ex: 023 222 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label className="label-container">
                <MessageIcon />
                Message:
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={400}
                  required
                />
              </label>
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
