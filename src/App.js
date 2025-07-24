import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./main/Home";
import Offers from "./components/Offers";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Program from "./pages/Program";
import Cart from "./pages/Cart";
import { CartContext } from "./store/context";
import { useReducer } from "react";
import { cartReducer, initialCart } from "./store/reducer";
import TeamDetails from "./pages/TeamDetails";
import PayPage from "./components/PayPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Offers", element: <Offers /> },
      { path: "/Facilities", element: <Facilities /> },
      { path: "/Team", element: <TeamDetails /> },
      { path: "/Program", element: <Program /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/PayPage", element: <PayPage /> },
    ],
  },
]);

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialCart);
  const cartContextValue = {
    state,
    dispatch,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
  // return (
  //   <CartContext.Provider value={cartContextValue}>
  //     <div>
  //       <Router>
  //         <div>
  //           <Navbar />
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/Offers" element={<Offers />} />
  //             <Route path="/Facilities" element={<Facilities />} />
  //             <Route path="/Team" element={<TeamDetails />} />
  //             <Route path="/Program" element={<Program />} />
  //             <Route path="/Cart" element={<Cart />}></Route>
  //             <Route path="/Contact" element={<Contact />} />
  //             <Route path="/PayPage" element={<PayPage />} />
  //           </Routes>
  //         </div>
  //         <Footer />
  //       </Router>
  //     </div>
  //   </CartContext.Provider>
  // );
}

export default App;
