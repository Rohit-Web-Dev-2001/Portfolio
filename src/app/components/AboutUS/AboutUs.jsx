import React, { useEffect,useContext} from "react";
import Image from "next/image";
import profile from "../../../../public/DSC_0178.JPG"; // Update the path to your image
import "./style.css"; // Make sure to update the path if necessary
import { ThemeContext } from "../../Context/ThemeContext";

const AboutUs = () => {
  const{theme}= useContext(ThemeContext)
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-element");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("in-view");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("in-view");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation();

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
   <main className={theme==="dark"?'bg-black':'bg-white'}>
     <div className="aboutus-container" id="AboutUs">
      <div className="about-content">
        <Image
          src={profile}
          alt="About Us Image"
          className="scroll-element img"
          width={300}
          height={300}
        />
        <div className="about-text scroll-element mx-2">
          <div className="about-header scroll-element">
            <h1>ABOUT ME</h1>
          </div>
          <p className={theme==="dark"?'text-white':'text-black'}>
            I am a Full Stack Web Developer. I provide clean code and
            pixel-perfect design. I also make websites more interactive with web
            animations.
          </p>
          <p className={theme==="dark"?'text-white':'text-black'}>
            I design responsive and user-friendly web applications. I have good
            knowledge in React, Next.js, Node.js, and MongoDB.
          </p>
           <a href="./RohitResume.pdf" download style={{
               textDecoration:"none",
           }}>
              <button className="btn">Download Resume</button>
            </a>
{/*        <button className="btn">Download Resume</button> */}
        </div>
      </div>
    </div>
   </main>
  );
};

export default AboutUs;
