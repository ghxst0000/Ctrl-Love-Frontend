import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage.tsx";
import Swipe from "./components/Swipe.tsx";
import SwipeCard from "./components/SwipeCard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/swipe",
    element: <Swipe />,
  },
  {
    path: "/swipe-card",
    element: (
      <SwipeCard
        name="bela"
        age={15}
        images={[
          "https://i.kym-cdn.com/photos/images/original/001/248/525/3e4.jpg",
        ]}
        gender="male"
        biography="i like ducc"
        interests={["spidermann", "midnen"]}
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
