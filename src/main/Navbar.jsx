import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import bgImg from "../asessts/bgImg.jpg";
import GymLogo from "../asessts/GymLogo.png";
import { CartContext } from "../store/context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const productCount = state.products.length;
  const [mobile, setMobile] = useState(false);

  return (
    <div
      className="bg-container"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="slogan">GymWorld! Level up your form!</p>
      <nav>
        <div className="img-container">
          <img src={GymLogo} />
        </div>
        <ul
          className={mobile ? "list-container-mobile" : "list-container"}
          onClick={() => {
            setMobile(false);
          }}
        >
          <li>
            <Link to="/">Home </Link> <HomeIcon />
          </li>
          <li>
            <Link to="Offers">Offers</Link>
            <LocalOfferIcon />
          </li>
          <li>
            <Link to="Facilities">Facilities</Link>
            <FitnessCenterIcon />
          </li>
          <li>
            <Link to="Team">Team </Link>
            <GroupIcon />
          </li>
          <li>
            <Link to="Program">Program </Link>
            <CalendarMonthIcon />
          </li>
          <li className="cart-link">
            <Link to="Cart">
              Products
              {productCount > 0 && (
                <span className="cart-number">{productCount}</span>
              )}
            </Link>
            <ShoppingCartIcon className="cart-icon" />
          </li>
          <li>
            <Link to="Contact">Contact </Link>
            <ContactPageIcon />
          </li>
        </ul>
        <button
          className="nav-btn"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
}
