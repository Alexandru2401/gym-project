import Footer from "../main/Footer";
import Navbar from "../main/Navbar";

import { Outlet, useLocation } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main style={{marginTop:"100px"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
