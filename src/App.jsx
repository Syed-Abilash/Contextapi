import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CartPage from './Components/CartPage';
import Footer from './Components/Footer';


export const cartContext = createContext();
const App = () => {
   const [cart, setCart] = useState([])
  return (
    <div>
      <cartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cartPage" element={<CartPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        <br />
        <Footer />
      </cartContext.Provider>
    </div>
  );
};

export default App;