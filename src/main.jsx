import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home/HomePage.jsx";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import MainTote from "./Bag-Components/Tote-Bags/MainTote.jsx";
import Tote from "./Bag-Components/Tote-Bags/Tote.jsx";
import Shoulder from "./Bag-Components/Shulder-Bag/Shoulder.jsx";
import MainShoulder from "./Bag-Components/Shulder-Bag/MainShoulder.jsx";
import TopHandle from "./Bag-Components/TopHandle-Bag/TopHandle.jsx";
import MainTopHandle from "./Bag-Components/TopHandle-Bag/MainTopHandle.jsx";
import CrossBody from "./Bag-Components/CrossyBody-Bag/CrossyBody.jsx";
import MainCrossyBody from "./Bag-Components/CrossyBody-Bag/MainCrossyBody.jsx";
import MainMini from "./Bag-Components/Mini-Bag/MainMini.jsx";
import Mini from "./Bag-Components/Mini-Bag/MIni.jsx";
import AllBags from "./Bag-Components/All-Bags/Allbags.jsx";
import MainAllBags from "./Bag-Components/All-Bags/MainAllBags.jsx";
import SearchBox from "./Navbar-Section/SearchBox.jsx";
import Cart from "./Navbar-Section/Cart.jsx";
import Profile from "./Navbar-Section/Profile.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/",element: <HomePage />},
      {path:"/login", element:<Login/>},
      {path:"/signup", element:<Register/>},
      {path:"/Tote", element:<Tote/>},
      {path:"/MainTote", element:<MainTote/>},
       {path:"/Shoulder", element:<Shoulder/>},
      {path:"/MainShoulder", element:<MainShoulder/>},
       {path:"/TopHandle", element:<TopHandle/>},
      {path:"/MainTopHandle", element:<MainTopHandle/>},
       {path:"/CrossBody", element:<CrossBody/>},
      {path:"/MainCrossBody", element:<MainCrossyBody/>},
       {path:"/Mini", element:<Mini/>},
      {path:"/MainMini", element:<MainMini/>},
       {path:"/Allbag", element:<AllBags/>},
      {path:"/MainAllbag", element:<MainAllBags/>},
      {path:"/SearchBox", element:<SearchBox/>},
      {path:"/cart", element:<Cart/>},
      {path:"/profile",element:<Profile/>},
      {path:"/Detailpage/:product_id", element:<DetailsPage/>}
    ],
  },
]);
createRoot(document.getElementById("root")).render(
 
    <StrictMode>
      
         <ToastContainer
      position="top-center"
        autoClose={2000}
        theme="dark"
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />
      <RouterProvider  router={Router}>

   
      </RouterProvider>

    </StrictMode>
);
