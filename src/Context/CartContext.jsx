import React, { createContext, useEffect, useState } from "react";
import { api } from "../Api/Axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
export const CartContext = createContext();

function CartProvider({ children }) {
//   const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartLength,setCartLength] = useState(0)
//   const [isLogin, setIsLogin] = useState(true)
 const {user,setUser}=useContext(AuthContext)
  // ✅ Get logged user and fetch cart
  useEffect(() => {
    // const storedUser = JSON.parse(localStorage.getItem("loginData"));
    if (user) {
    //   setUser(storedUser);
      fetchCart(user?.id);
    }
  }, [user]);

  // ✅ Fetch cart from server
  const fetchCart = async (userId) => {
    try {
      const res = await api.get(`/users/${userId}`);
      setCart(res.data.cart || []);
      setCartLength(res.data.cart.length)
    } catch (error) {
      console.log("❌ CART FETCH ERROR:", error);
      toast.error("Failed to load cart");
    }
  };



  // ✅ Add product to cart
  const addCart = async (product) => {
    if (!user) {
      toast.error("Please login to add items");
      return;
    }

    const exists = cart.find((item) => item.product_id === product.product_id);

    let updated;
    if (exists) {
      updated = cart.map((item) =>
        item.product_id === product.product_id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      );

      toast.info("Quantity increased");
    } else {
      updated = [...cart, { ...product, Quantity: 1 }];
      toast.success("Item added to cart 🛒");
    }

    setCart(updated);

    try {
    const updated_cart = await api.patch(`/users/${user.id}`, { cart: updated });

    setCartLength(updated_cart.data.cart.length)
    console.log(updated_cart)
    
    } catch (error) {
      console.log("❌ CART ADD/PATCH ERROR:", error);
      toast.error("Could not update cart on server");
    }
  };

  // ✅ Remove item completely
  const removeCart = async (productId) => {
    const updated = cart.filter((item) => item.product_id !== productId);
    setCart(updated);
    toast.error("Item removed from cart");

    try {
   const updated_cart = await api.patch(`/users/${user.id}`, { cart: updated });
       setCartLength(updated_cart.data.cart.length)
    } catch (error) {
      console.log("❌ CART REMOVE ERROR:", error);
      toast.error("Could not remove item from server");
    }
  };

  // ✅ Increase quantity (+1)
  const addQuantity = async (productId) => {
    const updated = cart.map((item) =>
      item.product_id === productId
        ? { ...item, Quantity: item.Quantity <10? item.Quantity+1:item.Quantity }
        : item
    );

    setCart(updated);
   

    try {
      await api.patch(`/users/${user.id}`, { cart: updated });
    } catch (error) {
      console.log("❌ QUANTITY INCREASE ERROR:", error);
      toast.error("Could not update quantity on server");
    }
  };

  // ✅ Decrease quantity (not less than 1)
const lessQuantity = async (productId) => {
 

 const updated = cart.map((item) =>
      item.product_id === productId
        ? { ...item, Quantity: item.Quantity >1? item.Quantity-1:item.Quantity }
        : item
    );

    setCart(updated);
    

    try {
      await api.patch(`/users/${user.id}`, { cart: updated });
    } catch (error) {
      console.log("❌ QUANTITY DECREASE ERROR:", error);
      toast.error("Could not update quantity on server");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        addQuantity,
        lessQuantity,
        fetchCart,
        cartLength
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
