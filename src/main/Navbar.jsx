import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
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
    <nav style={{ marginBottom: "20px" }}>
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
          <NavLink>Home </NavLink> <HomeIcon />
        </li>
        <li>
          <NavLink to="Offers">Offers</NavLink>
          <LocalOfferIcon />
        </li>
        <li>
          <NavLink to="Facilities">Facilities</NavLink>
          <FitnessCenterIcon />
        </li>
        <li>
          <NavLink to="Team">Team </NavLink>
          <GroupIcon />
        </li>
        <li>
          <NavLink to="Program">Program </NavLink>
          <CalendarMonthIcon />
        </li>
        <li className="cart-link">
          <NavLink to="Cart">
            Products
            {productCount > 0 && (
              <span className="cart-number">{productCount}</span>
            )}
          </NavLink>
          <ShoppingCartIcon className="cart-icon" />
        </li>
        <li>
          <NavLink to="Contact">Contact </NavLink>
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
    // </div>
  );
}
