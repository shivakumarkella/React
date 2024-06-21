import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
// import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense } from "react";
import ShimmerUiCard from "./components/ShimmerUiCard";

//const Contactus = lazy(() => import("./components/Contactus"));

const Contactus = lazy(() => import("./components/Contactus"));

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
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
