"use client";
import { React, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./NavBar/Navabar";
import HomPage from "./Hompage/Hompage";
import AboutUs from "./AboutUS/AboutUs";
import ProjectList from "./ProjectList/Projectlist";
import ContactMe from"./ContactUS/ContactMe";


const Main = () => {
  return (
    <>
      <Navbar />
      <HomPage />
      <AboutUs />
      <ProjectList />
      <ContactMe/>
    </>
  );
};

export default Main;
