import React, { useEffect, useRef, useContext } from "react";
import style from "./style.css";
import "bootstrap/dist/css/bootstrap.css";

import { ThemeContext } from "../../Context/ThemeContext";
const ContactMe = (props) => {
  const { theme } = useContext(ThemeContext);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
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
      if (containerRef.current) {
        if (elementInView(containerRef.current, 1.25)) {
          displayScrollElement(containerRef.current);
        } else {
          hideScrollElement(containerRef.current);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`body ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className={`contact-container scroll-element1 `} ref={containerRef}>
        {" "}
        <div className="contact-info">
          {" "}
          <h2 className="text-warning">Contact Information</h2>{" "}
          <p className={` ${theme === "dark" ? "tex-white" : "text-black"}`}>
            Fill up the form and i will get back to you within 24 hours.
          </p>{" "}
          <p>
            <a
              className={` ${theme === "dark" ? "tex-white" : "text-black"}`}
              href="tel:+233543201893"
            >
              +233543201893
            </a>
          </p>{" "}
          <p>
            <a
              className={` ${theme === "dark" ? "tex-white" : "text-black"}`}
              href="mailto:aljay3334@gmail.com"
            >
              aljay3334@gmail.com
            </a>
          </p>{" "}
          <div className="social-icons">
            {" "}
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>{" "}
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>{" "}
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="contact-form">
          {" "}
          <h2 className="text-warning">
            Any Questions or Remarks? Just Write Us a Message
          </h2>{" "}
          <form>
            {" "}
            <div className="form-group">
              {" "}
              <label
                htmlFor="name"
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
              >
                Name
              </label>{" "}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label
                htmlFor="email"
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
              >
                Email
              </label>{" "}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label
                htmlFor="phone"
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
              >
                Phone
              </label>{" "}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                required
              />{" "}
            </div>{" "}
            <div className="form-group">
              {" "}
              <label
                htmlFor="message"
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
              >
                Message
              </label>{" "}
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>{" "}
            </div>{" "}
            <button type="submit" >
              Send Message
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
  );
};
export default ContactMe;
