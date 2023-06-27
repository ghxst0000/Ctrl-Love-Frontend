import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/LandingPage.tsx";
import Swipe from "./components/Swipe.tsx";
import SwipeCard from "./components/SwipeCard.tsx";
import Footer from "./components/Footer.tsx";
import SignUpPage from "./components/SignUpPage.tsx";
import LoginForm from "./components/LoginForm.tsx";

const showNext = () => {
  console.log("a");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainPage /> <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignUpPage /> <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginForm /> <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
