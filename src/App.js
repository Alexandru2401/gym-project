import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from './main/Footer';
import Navbar from './main/Navbar';
import Home from './main/Home';
import Offers from './components/Offers';
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'
import Program from './pages/Program';
import Cart from './pages/Cart';
import { CartContext } from './store/context';
import { useReducer } from 'react';
import { cartReducer, initialCart } from './store/reducer';
import TeamDetails from './pages/TeamDetails';
import PayPage from './components/PayPage';


function App() {

  const [state, dispatch] = useReducer(cartReducer, initialCart);
  const cartContextValue = {
    state,
    dispatch
  }

  return (
    <CartContext.Provider value={cartContextValue}>
    <div>
      <Router>
        <div>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Offers" element={<Offers/>}/>
              <Route path="/Facilities" element={<Facilities/>}/>
              <Route path="/Team" element={<TeamDetails/>}/>
              <Route path="/Program" element={<Program />}/>
              <Route path='/Cart' element={<Cart />}></Route>
              <Route path="/Contact" element={<Contact />}/>
              <Route path="/PayPage" element={<PayPage/>}/>
            </Routes>
        </div>
        <Footer/>
      </Router>  
    </div>
    </CartContext.Provider>
  )
}

export default App;
