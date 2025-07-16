import { React, useState, useContext } from "react";
import Image from "next/image";
// import '../components/style.css'
import { useRouter } from "next/navigation";
import Style from "./style.css";
// import { ExpenseTracker } from "@/app/Context/Context";
import { ExpenseTracker } from "../../Context/Context";
import { ThemeContext } from "../../Context/ThemeContext";

const HomPage = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
     <div
        className={theme==="dark" ?' bg-black introduction shadow py-5 homepage':' bg-white introduction shadow py-5 homepage'}
        id="home"
      >
        <p
          className="my-0 upper-text "
          style={{
            fontWeight: "bolder",
            fontFamily: "Segoe UI Black",
            // color: "black",
          }}
        >
          Hello I'am
        </p>
      <div className="title">
      <p
          className="text-warning  text animated-text1 "
          style={{
            fontWeight: "bolder",
            fontFamily: "Segoe UI Black",
          }}
        >
          Rohit <span className={theme==="dark"?'text-light ':' text-black'}>Arya</span>
        </p>
      </div>
        <p
          className="lower-text my-3"
          style={{
            fontWeight: "bolder",
            fontFamily: "Segoe UI Black",
            color: "black",
          }}
        >
          <span className={theme==="dark"?'text-light span1 ':' text-black span1'}>Full Stack </span>
          <span className={theme=="dark"?' span2 bg-warning text-dark  shadow rounded ':' text-light bg-warning  px-2 py-2 shadow rounded span2'} style={{fontWeight:"bolder"}}>
            WEB DEVELOPER
          </span>
        </p>
      </div>
   
    </>
  );
};

export default HomPage;
