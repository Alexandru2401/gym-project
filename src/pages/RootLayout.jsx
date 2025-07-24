import Footer from "../main/Footer";
import Navbar from "../main/Navbar";
import bgImg from "../asessts/bgImg.jpg";
import { Outlet, useLocation } from "react-router-dom";
export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname === "/" && (
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
      )}
      <main >
        <Outlet style={{marginTop:"20px"}}/>
      </main>
      <Footer />
    </>
  );
}
