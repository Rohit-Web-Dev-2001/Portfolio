"use client";
import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../Context/ThemeContext";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navabar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuActive, setMenuActive] = useState(false);
  const [scrollInView, setScrollInView] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const elementTop = nav.getBoundingClientRect().top;
      setScrollInView(
        elementTop <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`scroll-element p-4 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } ${scrollInView ? "in-view" : ""}`}
      >
        {" "}
        <h1 className="logo">Portfolio...</h1>{" "}
        <span className={`menu-toggle ${theme==="dark" ? "text-white" : "text-black"}`} onClick={toggleMenu}>
          &#9776;
        </span>{" "}
        <ul className={menuActive ? "active" : ""}>
          {" "}
          <li>
            <a href="#home" className={theme==="dark"?'text-white':'text-black'}>Home</a>
          </li>{" "}
          <li>
            <a href="#about" className={theme==="dark"?'text-white':'text-black'}>About</a>
          </li>{" "}
          <li>
            <a href="#projects" className={theme==="dark"?'text-white':'text-black'}>Projects</a>
          </li>{" "}
          <li>
            <a href="#contact" className={theme==="dark"?'text-white':'text-black'}>Contact</a>
          </li>{" "}
          <button class="btn-outline-warning" onClick={toggleTheme}>{theme==="dark"?'Light Mode':'Dark Mode'}</button>
          <li className="theme-menu">
            {" "}
            <a href="javascript:void(0)" className={theme==="dark"?'text-white':'text-black'} onClick={ ()=>{
              toggleTheme()
              setMenuActive(false)
            }>
            <i class={theme==="dark"?'bi bi-brightness-high fs-5':'bi bi-moon-stars fs-5'}></i>
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>
    </>
  );
};

export default Navabar;
