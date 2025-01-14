"use client";
import { React, useState, useContext, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profile from "../../Images/ExpenseTracker.png";
import { style } from "./style.css";
// import { ExpenseTracker } from "@/app/Context/Context";
import Router from "next/router";
import { ThemeContext } from "../../Context/ThemeContext";

const Projectlist = () => {
  const router = useRouter();
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const headerRef = useRef(null);

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= windowHeight / dividend;
      };

      const displayScrollElement = (element) => {
        element.classList.add("in-view");
      };

      const hideScrollElement = (element) => {
        element.classList.add("out-of-view");
        element.classList.remove("in-view");
      };

      if (elementInView(imageRef.current, 1.25)) {
        displayScrollElement(imageRef.current);
      }
      if (elementInView(titleRef.current, 1.25)) {
        displayScrollElement(titleRef.current);
      }
      if (elementInView(descriptionRef.current, 1.25)) {
        displayScrollElement(descriptionRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScrollfortitle = () => {
      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <=
          (window.innerHeight || document.documentElement.clientHeight) /
            dividend
        );
      };
      const displayScrollElement = (element) => {
        element.classList.add("in-view");
        element.classList.remove("out-of-view");
      };
      const hideScrollElement = (element) => {
        element.classList.add("out-of-view");
        element.classList.remove("in-view");
      };
      if (headerRef.current) {
        if (elementInView(headerRef.current, 1.25)) {
          displayScrollElement(headerRef.current);
        } else {
          hideScrollElement(headerRef.current);
        }
      }
    };
    window.addEventListener("scroll", handleScrollfortitle);
    return () => {
      window.removeEventListener("scroll", handleScrollfortitle);
    };
  }, []);

  return (
    <div
      className={`container-fluid main-container w-100 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <h1
        className=" animated-text1 text-center text-warning scroll-element"
        ref={headerRef}
      >
        PROJECTS
      </h1>
      {/* First porject */}
      <div
        className={` rounded-5 project-container  my-1 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`project-image scroll-element ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
          ref={imageRef}
        >
          <Image
            src={profile}
            alt="About Us Image"
            className={`prjtimage rounded-5 shadow ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}
          />
        </div>
        <div
          className={`project-details  ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <h2 className="scroll-element text-warning" ref={titleRef}>
            Expense Tracker
          </h2>
          <p
            className={`scroll-element ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            ref={descriptionRef}
          >
            This is a brief description of the project. It highlights the key
            features and benefits of the project, providing an overview for the
            audience.
          </p>
          <a class="button-86"
            href="https://expense-tracker-phi-lake.vercel.app/">Preview... </a>
        </div>
      </div>

      {/* 2nd project */}
      <div
        className={`project-container my-5 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
        id="Pjcontainer2"
      >
        <div
          className={`project-image scroll-element ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
          ref={imageRef}
        >
           <Image
            src={profile}
            alt="About Us Image"
            className={`prjtimage rounded-5 shadow ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}
          />
        </div>
        <div
          className={`project-details  ${
            theme === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <h2 className="scroll-element text-warning" ref={titleRef}>
            TODO LIST
          </h2>
          <p
            className={`scroll-element ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            ref={descriptionRef}
          >
            This is a brief description of the project. It highlights the key
            features and benefits of the project, providing an overview for the
            audience.
          </p>
        </div>
      </div>

      {/* Third porject */}
      {/* <div className="project-container">
        <div
          className={`project-image scroll-element ${
            theme==="dark" ? "bg-black" : "bg-white"
          }`}
          ref={imageRef}
        >
          <img
            src="https://uizard.io/static/14f6d8934c3c877b87e07ba591471078/0cfa7/ac6597f9ca9857740d4b2b5ee17ddc4557fd083e-1440x835.webp"
            alt="Project Image"
            className={` rounded-5 ${theme==="dark" ? "bg-black" : "bg-white"}`}
          />
        </div>
        <div className={`project-details  ${theme==="dark" ? "bg-black" : "bg-white"}`}>
          <h2 className="scroll-element text-warning" ref={titleRef}>
           CHAT APP
          </h2>
          <p
            className={`scroll-element ${theme==="dark" ? "text-white" : "text-black"}`}
            ref={descriptionRef}
          >
            This is a brief description of the project. It highlights the key
            features and benefits of the project, providing an overview for the
            audience.
          </p>
          <button class="cool-button w-25 ">
            <span>Preview</span>
          </button>
        </div>
      </div> */}

      {/* 2nd project */}
      {/* <div className="project-container flex-row-reverse  my-5">
        <div
          className={`project-image scroll-element ${
            theme==="dark" ? "bg-black" : "bg-white"
          }`}
          ref={imageRef}
        >
          <img
            src="https://uizard.io/static/14f6d8934c3c877b87e07ba591471078/0cfa7/ac6597f9ca9857740d4b2b5ee17ddc4557fd083e-1440x835.webp"
            alt="Project Image"
            className={` rounded-5 ${theme ? "bg-black" : "bg-white"}`}
          />
        </div>
        <div className={`project-details  ${theme==="dark" ? "bg-black" : "bg-white"}`}>
          <h2 className="scroll-element text-warning" ref={titleRef}>
            MULTI-STEP FORM
          </h2>
          <p
            className={`scroll-element ${theme==="dark" ? "text-white" : "text-black"}`}
            ref={descriptionRef}
          >
            This is a brief description of the project. It highlights the key
            features and benefits of the project, providing an overview for the
            audience.
          </p>
          <button class="cool-button w-25 ">
            <span>Preview</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Projectlist;
