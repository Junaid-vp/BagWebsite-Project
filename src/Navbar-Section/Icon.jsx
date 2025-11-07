import React, { useContext } from "react";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";

function Icon() {
const {cartLength}= useContext(CartContext)
const {user}=useContext(AuthContext)

  return (
    
    <div className="flex items-center space-x-5">
      {/* Search */}
      <Link to="/SearchBox" className="text-gray-700 hover:text-black">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </Link>

      {/* Wishlist */}
      <Link to="/wishlist" className="text-gray-700 hover:text-black">
        <HeartIcon className="h-6 w-6" />
      </Link>

   {/* Cart */}
<Link to="/cart" className="relative text-gray-700 hover:text-black">
  <ShoppingCartIcon className="h-6 w-6" />
  
  {cartLength > 0 && (
    <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1.5 py-0.5">
      {cartLength}
    </span>
  )}
</Link>

      {/* Login */}
     {user ? (
     <Link to="/profile" className="text-gray-700 hover:text-black">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
      ) : (
        <Link to="/login" className="text-gray-700 hover:text-black">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>
      )} 
    </div>
  );
}

export default Icon;
