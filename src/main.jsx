import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, About, Contactus, Github, User } from "./components/index";
import { gitUserData } from "./components/Github/Github";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={gitUserData} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
