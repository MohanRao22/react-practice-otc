import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, useRouteError, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = ()=>{

    return(
        <div className="main-container">
            <Header />
            {/* <Body /> */}
            <Outlet />
        </div>
    )
}



const appRouter = createBrowserRouter( [
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About name="functional-based-props" />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurant/:resId",
        element : <RestaurantMenu />
      }
    ]
  }

]);


const root = ReactDOM.createRoot(document.querySelector("#root1"));
root.render(< RouterProvider router={appRouter} />);