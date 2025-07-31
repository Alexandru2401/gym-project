import { useContext } from "react";
import { CartContext } from "../store/context";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { isNotEmpty, isEmail } from "../utils/validation";
import ProgressBar from "./ProgressBar";

export default function PayPage() {
  const [showMessage, setShowMessage] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const timer = 3000;

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

  const navigate = useNavigate();

  const totalPrice = state.products.reduce(
    (acc, offer) => acc + offer.price,
    0
  );
  function handleSubmit(e) {
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
    };

    setErrorMessage(newErrors);
    const formIsValid = Object.values(newErrors).every((err) => err === "");

    if (!formIsValid) return;

    setShowMessage(true);

    setTimeout(() => {
      navigate("/");
    }, timer);

    dispatch({ type: "CLEAR_CART" });
  }
  return (
    <section className="pay-section-container">
      {showMessage ? (
        <div className="success-message">
          <p className="success-paragraph">
            Thank you for your payment!
            <CheckCircleIcon style={{ fontSize: "24px", color: "green" }} />
          </p>
          <ProgressBar timeout={timer} key={timer} />
        </div>
      ) : (
        <div className="pay-section-wrapper">
          <div className="products-wrapper">
            {state.products.length === 0 ? (
              <div className="empty-cart-container">
                <p>You don't have any product added to cart!</p>
              </div>
            ) : (
              state.products.map((offer) => {
                return (
                  <div
                    key={offer.id}
                    className="offers-card-container pay-card"
                  >
                    <h2 className="offers-title">{offer.name}</h2>
                    <p className="offers-price">Price: {offer.price} $</p>
                  </div>
                );
              })
            )}
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <div>
              <Input
                type="text"
                id="name"
                placeholder="Enter a name"
                label="Name"
                onChange={(e) => handleInputChange("name", e)}
                value={enteredValues.name}
                error={errorMessage.nameError}
                icon={<AccountCircleIcon />}
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
      {!showMessage && (
        <div className="empty-cart-container">
          <p className="empty-cart-container">
            Total price : {totalPrice.toFixed(2)}$
          </p>
        </div>
      )}
    </section>
  );
}
