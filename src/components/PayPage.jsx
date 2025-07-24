import React, { useContext } from "react";
import { CartContext } from "../store/context";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PayPage() {
  const [showMessage, setShowMessage] = useState(false);
  const { state, dispatch } = useContext(CartContext);
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

  const totalPrice = state.products.reduce(
    (acc, offer) => acc + offer.price,
    0
  );
  function handleSubmit(e) {
    e.preventDefault();
    setShowMessage(true);
  }
  return (
    <section className="pay-section-container">
      {showMessage ? (
        <div className="success-message">
          <p className="success-paragraph">
            Thank you for your payment!
            <CheckCircleIcon style={{ fontSize: "24px", color: "green" }} />
          </p>
        </div>
      ) : (
        <div className="pay-section-wrapper">
          {state.products.length === 0 ? (
            <div className="empty-cart-container">
              <p>You don't have any product added to cart!</p>
            </div>
          ) : (
            state.products.map((offer) => {
              return (
                <div key={offer.id} className="offers-card-container pay-card">
                  <h2 className="offers-title">{offer.name}</h2>
                  <p className="offers-price">Price: {offer.price} $</p>
                </div>
              );
            })
          )}
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
            <button
              type="submit"
              className="submit-btn"
              disabled={state.products.length === 0}
            >
              Pay
              <ArrowUpwardIcon />
            </button>
          </form>
        </div>
      )}
      <div className="empty-cart-container">
        <p className="empty-cart-container">
          Total price : {totalPrice.toFixed(2)}$
        </p>
      </div>
    </section>
  );
}
