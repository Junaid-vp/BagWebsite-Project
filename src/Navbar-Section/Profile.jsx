import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";

function Profile() {
  const { cartLength } = useContext(CartContext);
  const navigate = useNavigate();
  const { user, Logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4" data-aos="fade-up"
     data-aos-duration="1000"  >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Your Account
        </h2>

        {/* Orders Link */}
        <div className="text-center mb-6">
          <Link
            to="/vieworder/:orderI"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 border border-gray-800 transition-all duration-300 font-medium"

          >
            View Your Orders
          </Link>
        </div>

        {/* Two Column Layout: Account & Address */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Account Details */}
          <div className="flex-1 border rounded-xl p-6 bg-gray-50 shadow-inner">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Account Details
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                <span className="font-light">
                  {user?.FirstName} {user?.LastName}
                </span>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <span className="font-light">{user?.Email}</span>
              </p>
              <p>
                <span className="font-semibold">Cart:</span>{" "}
                <span className="font-light">
                  {user?.cart?.length >= 1 ? `${cartLength} Items` : "Empty"}
                </span>
              </p>
            </div>
          </div>

          {/* Address Details */}
          <div className="flex-1 border rounded-xl p-6 bg-gray-50 shadow-inner">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Address Details
            </h3>
            <div className="space-y-3 text-gray-700">
            {user?.address?.length > 0 ? (
  <p className="font-light">
    Name: {user?.address[0].name} <br />
    Number: {user?.address[0].number} <br />
    Pincode: {user?.address[0].pinCode} <br />
    Locality: {user?.address[0].locality} <br />
    Address: {user?.address[0].address} <br />
    City: {user?.address[0].city} <br />
    State: {user?.address[0].state}
  </p>
) : (
  <p className="font-light">
    Currently no address. You can save your address when you buy a product.
  </p>
)}

            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={Logout}
          className="mt-6 w-full py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300 font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
