import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar-Section/Navbar";
import Footer from "./Footer-Section/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CartProvider from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Increase duration for smoother animation
      easing: "ease-in-out", // Smooth easing
      once: true, // Animation triggers only once
    });
  }, []);
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Navbar />

          <Outlet />

          <Footer />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
