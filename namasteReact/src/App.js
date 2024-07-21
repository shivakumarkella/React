import React, { Children, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import { useState, useEffect } from "react";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense } from "react";
import UserContext from "./utils/UserContext";

const Contactus = lazy(() => import("./components/Contactus"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Shiva Kumar Kella",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={userName}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={
              <p>
                <i>Loading...</i>
              </p>
            }
          >
            <Contactus />
          </Suspense>
        ),
      },
      {
        path: "/Restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
