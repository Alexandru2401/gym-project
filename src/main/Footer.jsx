import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <h2>Our Sponsors:</h2>
      <div className="sponsor-list-container">
        <div className="col-one">
          <ul>
            <li>EnerGym Nutrition</li>
            <li>FitWear Pro</li>
            <li>HydraBoost Drinks</li>
            <li>PowerPulse Tech</li>
            <li>FreshFuel Snacks</li>
          </ul>
        </div>
        <div className="col-two">
          <ul>
            <li>PeakPerformance Gear</li>
            <li>UltraClean Nutrition</li>
            <li>ZenFlex Yoga</li>
            <li>FlexiTime Fitness</li>
            <li>MuscleMax Equipment</li>
          </ul>
        </div>
      </div>
      <div className="social-media">
        <h2>Follow us on:</h2>
        <ul>
          <Link to="https://www.instagram.com/" target="_blank">
            <li>
              Instragram: <InstagramIcon />
            </li>
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
            <li>
              Facebook: <FacebookIcon />
            </li>
          </Link>
          <Link to="https://x.com/i/flow/login" target="_blank">
            <li>
              X (Twitter): <XIcon />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
