import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])



  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};
export default Body;
