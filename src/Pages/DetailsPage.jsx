import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { CartContext } from "../Context/CartContext";

function DetailsPage() {
  const { product_id } = useParams();
  const { datas } = useFetch("/products");
  const { addCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const FilterDetails = datas.filter((item) => item.product_id === product_id);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">

      {/* Back navigation */}
      <div className="w-full max-w-4xl mb-4">
        <Link to="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      {FilterDetails.map((val) => {
        const isExist = cart.some((c) => c.product_id === val.product_id);

        return (
          <div
            key={val.product_id}
            className="flex flex-col md:flex-row w-full max-w-4xl bg-white border rounded-xl p-6 gap-8 shadow-sm"
          >
            {/* ✅ Left Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={val.image_url}
                alt={val.name}
                className="w-full max-w-sm h-[360px] object-contain rounded-md"
              />
            </div>

            {/* ✅ Right Details */}
            <div className="md:w-1/2 flex flex-col justify-center gap-4 text-gray-800">
              <h1 className="text-2xl font-semibold">{val.name}</h1>

              <div className="space-y-1">
                <p className="text-sm text-gray-600">Type: {val.type}</p>
                <p className="text-sm text-gray-600">Color: {val.color}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-gray-500 line-through">
                  ₹{val.original_price}
                </p>

                <p className="text-2xl font-bold text-black">
                  ₹
                  {Math.round(
                    val.original_price -
                      (val.original_price * val.discount_percentage) / 100
                  )}
                </p>

                <p className="text-sm font-semibold text-green-600">
                  {val.discount_percentage}% OFF
                </p>
              </div>

              {val.description && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  {val.description}
                </p>
              )}

              {/* ✅ Button */}
              <div className="mt-3">
                {isExist ? (
                  <button
                    onClick={() => navigate("/cart")}
                    className="bg-black text-white px-6 py-2 text-sm rounded-md"
                  >
                    GO TO CART
                  </button>
                ) : (
                  <button
                    onClick={() => addCart(val)}
                    className="bg-black text-white px-6 py-2 text-sm rounded-md"
                  >
                    ADD TO CART
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailsPage;

