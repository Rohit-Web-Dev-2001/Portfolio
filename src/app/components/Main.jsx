"use client";
import { React, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./NavBar/Navabar";
import Hompage from "./Hompage/Hompage";
import AboutUs from "./AboutUS/AboutUs";
import Projectlist from "./ProjectList/Projectlist";


const Main = () => {
  return (
    <>
      <Navbar />
      <Hompage />
      <AboutUs />
      <Projectlist />
    </>
  );
};

export default Main;
