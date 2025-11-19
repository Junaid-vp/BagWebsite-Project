// ============================================================================
// 📌 ProductCard.jsx — Luxury Product Card with Premium Design
// ============================================================================

import React, { useContext, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { WishListContext } from "../Context/WIshListContext";

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const { addCart, cart } = useContext(CartContext);
  const { wishList, toggleWishlist } = useContext(WishListContext);
  const navigate = useNavigate();

  if (!product?.isActive) return null;

  const isInWishlist = wishList.some(
    (item) => item.product_id === product.product_id
  );

  const isInCart = cart.some((item) => item.product_id === product.product_id);

  const salePrice = Math.round(
    product.original_price -
      (product.original_price * product.discount_percentage) / 100
  );

  return (
    <div 
      className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <button
          onClick={() => {
            navigate(`/Detailpage/${product.product_id}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-full"
        >
          <img
            src={product.image_url}
            alt={product.name}
            className={`w-full h-80 object-cover transition-all duration-500 ${
              hover ? "scale-110" : "scale-100"
            }`}
          />
        </button>

        {/* Wishlist Button */}
<button
  onClick={() => toggleWishlist(product)}
  className="absolute top-3 right-3 p-1 transition-all duration-500"
>
  <Heart 
    className={`w-5 h-5 transition-all duration-500 ${
      isInWishlist 
        ? "fill-red-600 text-red-600 drop-shadow-lg" 
        : "text-gray-500 hover:text-red-500 hover:scale-110 hover:drop-shadow-md"
    }`} 
    strokeWidth={1.2}
  />
</button>

        {/* Discount Badge */}
        {product.discount_percentage > 0 && (
          <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 rounded text-xs font-medium tracking-wide">
            {product.discount_percentage}% OFF
          </div>
        )}

        {/* Cart Action Button - Luxury Hover Effect */}
      <div className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
  hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
}`}>
  <button
    onClick={() => isInCart ? navigate("/cart") : addCart(product)}
    className={`py-2 px-3 rounded text-xs font-medium transition-all duration-300 flex items-center justify-center gap-1 ${
      isInCart 
        ? "bg-white text-green-600 border border-green-600 hover:bg-green-50" 
        : "bg-white text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white"
    }`}
  >
    <ShoppingBag className="w-3 h-3" />
    {isInCart ? "VIEW CART" : "ADD TO CART"}
  </button>
</div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-light text-gray-900 text-lg tracking-wide leading-tight">
          {product.name}
        </h3>

        {/* Product Meta */}
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {product.type} • {product.color}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <p className="text-xl font-light text-gray-900">₹{salePrice}</p>
          {product.discount_percentage > 0 && (
            <>
              <p className="text-sm text-gray-400 line-through">
                ₹{product.original_price}
              </p>
              <div className="w-px h-4 bg-gray-300"></div>
              <p className="text-xs text-green-600 font-medium tracking-wide">
                SAVE ₹{product.original_price - salePrice}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Luxury Border Effect */}
      <div className={`absolute inset-0 border-2 border-transparent group-hover:border-light-900 rounded-lg transition-all duration-300 pointer-events-none ${
        hover ? "opacity-20" : "opacity-0"
      }`}></div>
    </div>
  );
}

export default ProductCard;