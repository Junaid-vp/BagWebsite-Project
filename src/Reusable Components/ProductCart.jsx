import React, { useContext, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const { addCart, cart } = useContext(CartContext);
  const navigate = useNavigate();
  
  // ✅ check if product already exists in cart
  const isExist = cart.some((item) => item.product_id === product.product_id);

  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden group transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        <div className="absolute right-3 top-3 z-10">
          <HeartIcon className="h-6 w-6 text-gray-600 hover:text-red-500 transition" />
        </div>

            <button
          onClick={() => navigate(`/Detailpage/${product.product_id}`)}
          className="w-full"
        >
          <img
            src={product.image_url}
            alt={product.name}
            className={`w-full h-80 object-cover transition-transform duration-300 ${
              hover ? "scale-105" : "scale-100"
            }`}
          />
        </button>
      </div>

      <div
        className={`text-center mt-3 transition-all duration-300 ${
          hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {/* ✅ If product exists in cart => show GO TO CART */}
        {isExist ? (
          <button
            className="bg-green-900 text-white px-2 py-1 text-sm font-medium"
            onClick={() => navigate("/cart")
              
            }
          >
            GO TO CART
          </button>
        ) : (
          <button
            className="bg-black text-white px-2 py-1 text-sm font-medium"
            onClick={() => addCart(product)}
          >
            ADD TO CART
          </button>
        )}
      </div>

      <div className="pt-3 flex flex-col gap-1 text-center">
        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>

        <div className="flex justify-center items-center gap-2">
          <p className="text-lg font-semibold text-gray-900">
            {Math.round(
              product.original_price -
                (product.original_price * product.discount_percentage) / 100
            )}
            ₹
          </p>
          <p className="text-sm line-through text-gray-400">
            {product.original_price}₹
          </p>
          <p className="text-sm font-semibold">{product.discount_percentage}% OFF</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

