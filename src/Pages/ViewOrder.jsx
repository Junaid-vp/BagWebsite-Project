// ============================================================================
// 📌 ViewOrder.jsx — User Orders Management Page
// ----------------------------------------------------------------------------
// PURPOSE:
//  - Display all orders placed by the logged-in user
//  - Show status of each product inside an order
//  - Allow cancelling a single product without deleting the full order
//  - Update both UI (state) + backend (API)
//
// DEPENDENCIES:
//  - AuthContext -> To access and update logged-in user data
//  - axios instance (api) -> For API updating
//  - react-toastify -> For toast notifications
//  - react-router-dom -> For navigation (Link)
// ============================================================================

import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { api } from "../Api/Axios";
import { Link } from "react-router-dom";

// ============================================================================
// 📦 COMPONENT: ViewOrder()
// ============================================================================
function ViewOrder() {

  // ------------------------------------------------------------------------
  // 👤 USER CONTEXT — Extract logged-in user and updater
  // ------------------------------------------------------------------------
  const { user, setUser } = useContext(AuthContext);

  // ------------------------------------------------------------------------
  // 🗂️ Extract orders array safely (fallback to empty array)
  // ------------------------------------------------------------------------
  const orders = user?.order || [];

  // ------------------------------------------------------------------------
  // ❌ cancelSingleProduct(orderId, productId)
  // ROLE:
  //  - Locate specific order → locate product inside it
  //  - Change that product status to "Cancelled"
  //  - Update local AuthContext state immediately
  //  - Patch updated order back to API to store permanently
  // ------------------------------------------------------------------------
  const cancelSingleProduct = async (orderId, productId) => {

    // 1️⃣ Clone orders (immutability)
    const updatedOrders = [...orders];

    // 2️⃣ Find related order object
    const order = updatedOrders.find((o) => o.id === orderId);

    // 3️⃣ Find related product item
    const item = order.items.find((i) => i.product_id === productId);

    // 4️⃣ Update product status
    item.status = "Cancelled";

    // 5️⃣ Update React context for immediate UI refresh
    setUser({ ...user, order: updatedOrders });

    // 6️⃣ Make API call to permanently update database
    try {
      await api.patch(`/users/${user.id}`, { order: updatedOrders });
      toast.success("Product Cancelled ✅");
    } catch (error) {
      toast.error("Error updating server");
    }
  };

  // ============================================================================
  // 🎨 UI Rendering Section
  // ============================================================================
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-6 py-8">
      <div className="max-w-4xl mx-auto">

        {/* ---------------------------------------------------------------
            HEADER SECTION — Title & Navigation Link
        --------------------------------------------------------------- */}
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-800">
            Your Orders
          </h2>

          {/* Navigate back home */}
          <Link
            to="/"
            className="text-gray-600 hover:text-black transition-all duration-200 font-medium"
          >
            ← Home
          </Link>
        </div>

        {/* ---------------------------------------------------------------
            EMPTY ORDER DISPLAY WHEN NO ORDERS FOUND
        --------------------------------------------------------------- */}
        {orders.length === 0 && (
          <div className="p-10 rounded-2xl bg-white shadow-lg text-center text-gray-500 text-lg">
            No orders yet.
          </div>
        )}

        {/* ---------------------------------------------------------------
            ORDER LIST LOOP — iterate & show each order card
        --------------------------------------------------------------- */}
        {orders?.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-gray-200 bg-white shadow-xl p-6 mb-10 transition-transform hover:-translate-y-1 duration-300"
          >

            {/* Order ID Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Order <span className="text-gray-600">#{order.id}</span>
            </h3>

            {/* -----------------------------------------------------------
                PRODUCT ITEMS INSIDE EACH ORDER
            ----------------------------------------------------------- */}
            <div className="space-y-4">
              {order?.items?.map((item) => (
                <div
                  key={item.product_id}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5 flex justify-between items-center backdrop-blur"
                >
                
                  {/* -------------------------------
                      LEFT SECTION — Product Info
                  -------------------------------- */}
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {item.name}
                    </p>

                    {/* Product Image */}
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-15 h-15 rounded-lg object-cover border"
                    />

                    <p className="text-sm text-gray-500">Free Delivery Included</p>

                    {/* Status Display */}
                    <p className="mt-1 text-sm">
                      Status:{" "}
                      <span
                        className={
                          item.status === "Cancelled"
                            ? "text-red-600 font-semibold"
                            : "text-amber-600 font-semibold"
                        }
                      >
                        {item.status || "Pending"}
                      </span>
                    </p>
                  </div>

                  {/* -------------------------------
                      RIGHT SECTION — Cancel Button
                  -------------------------------- */}
                  <button
                    disabled={
                      item.status === "Cancelled" ||
                      item.status === "Delivered" ||
                      item.status === "Shipped"
                    }
                    onClick={() => cancelSingleProduct(order.id, item.product_id)}
                    className="px-5 py-2 rounded-full text-sm font-medium transition
                      bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {item.status === "Cancelled" ? "Cancelled" : "Cancel"}
                  </button>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 📤 EXPORT
// ============================================================================
export default ViewOrder;
