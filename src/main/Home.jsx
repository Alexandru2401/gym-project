import AboutUs from "../pages/AboutUs";
import { Team } from "../pages/Team";
import bgImg from "../asessts/bgImg.jpg";
import HomeOffers from "../pages/HomeOffers";
import WhyUs from "../pages/WhyUs";

export default function Home() {
  return (
    <main className="main-container">
      <div
        className="bg-container"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <p className="slogan">GymWorld! Level up your form!</p>
      </div>
      <AboutUs />
      <HomeOffers />
      <WhyUs />
      <Team />
    </main>
  );
}
