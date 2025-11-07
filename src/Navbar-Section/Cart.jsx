import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const { cart, removeCart, addQuantity, lessQuantity } =
    useContext(CartContext);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.sale_price * item.Quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 min-h-screen bg-white text-black" data-aos="fade-up"
     data-aos-duration="2000">
      <h1 className="text-4xl font-bold mb-10 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <h2 className="text-center text-gray-600 text-lg">
          Your cart is empty 😕
        </h2>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-6 mb-10">
            {cart.map((item) => (
              <div
                key={item.product_id}
                className="flex gap-6 p-6 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                {/* IMAGE */}
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-28 h-28 rounded-lg object-cover border"
                />

                {/* DETAILS */}

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-700 text-sm mt-1">
                      ₹ {item.sale_price} / item
                    </p>
                  </div>

                  {/* QUANTITY */}

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      className="w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-100"
                      onClick={() => lessQuantity(item.product_id)}
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.Quantity}</span>

                    <button
                      className="w-8 h-8 flex justify-center items-center border rounded hover:bg-gray-100"
                      onClick={() => addQuantity(item.product_id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  className="p-2 hover:bg-gray-200 rounded-full"
                  onClick={() => removeCart(item.product_id)}
                >
                  <Trash2 className="text-red-900" />
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY AT BOTTOM */}
          <div className="border p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">₹ {totalAmount}</span>
            </div>

            <div className="flex justify-between border-t pt-3 text-lg font-bold">
              <span>Total</span>
              <span>₹ {totalAmount}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 font-semibold hover:bg-gray-900 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
