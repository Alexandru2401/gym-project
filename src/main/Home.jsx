import React from "react";
import AboutUs from "../pages/AboutUs";
import { Team } from "../pages/Team";
import HomeOffers from "../pages/HomeOffers";
import WhyUs from "../pages/WhyUs";

export default function Home() {
  return (
    <main className="main-container">
      <AboutUs />
      <HomeOffers />
      <WhyUs />
      <Team />
    </main>
  );
}
