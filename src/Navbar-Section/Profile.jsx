import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";

function Profile() {
  const {cartLength} = useContext(CartContext)
  const navigate = useNavigate();
  // const Details = JSON.parse(localStorage.getItem("loginData"));
  const { user ,Logout} = useContext(AuthContext)

  
  // const removeStorage = () => {
  //   localStorage.clear()
  //   navigate("/login");
  //   // fetchCart(Details.id)
  // };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h2 className="text-3xl font-light text-dark-700 mb-10 tracking-wide">
        Your Account
      </h2>

      <div className="flex flex-col space-y-4 text-gray-600 text-lg">
        <p>
          <span className="font-semibold">Name:</span>{" "}
          <span className="font-light">{user?.FirstName} {user?.LastName}</span>
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          <span className="font-light">{user?.Email}</span>
        </p>

        <p>
          <span className="font-semibold">Your Cart:</span>{" "}
          <span className="font-light">
            {user?.cart.length >= 1 ? `${cartLength} Items` : "Empty"}
          </span>
        </p>
      </div>

      <button
        onClick={Logout}
        className="mt-10 px-8 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-black transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
