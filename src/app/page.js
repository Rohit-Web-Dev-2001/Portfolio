"use client";
import { React, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
import {  ThemeProvider } from "./Context/ThemeContext";
const NoSSR = dynamic(() => import("./components/Main"), { ssr: false });
const Page = () => {
  return (
    <>
     <ThemeProvider>
     <NoSSR />
     </ThemeProvider>

      {/* How to use template letral and optional chaining
         
             Template literal {`py-${object.objectvalue}`} use to access usetate value in js
             optional chaining {`py-${object.objectvalue}  ${statename ?"hidemenu-ul":"menu-ul"}`} hide & show hamburger
         */}

      {/* npm i nodemone express cors body-parse morgan dotenv */}
      {/* HOW TO USE ROUTING IN NEXT JS
       import useRouter form next/router
       const router =useRouter();
       router.push('/path)   
    
     /*
       import React,{ useState } from "react";
      // const [count, setCount] = useState(0);

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      {/* What is next js?  the react framework for the web apps based on react library extra features added over react  js like roouting middleware css support etc used  to make single page application buidlid optimiztion features what shoudl you learn first html css js */}
      {/* why  next js?  for making big project easily and quickly inbuild features like  ssr ,ssr helps in seo  */}
      {/* what  node js?  for making big project easily and quickly inbuild features like  ssr ,ssr helps in seo  */}
      {/* Js engine helps to execute js code on the browser spidermonky,chakre, v8   */}
      {/* ky hum js ko apni machine pe chla skte h first question yes phele ke time fornend ek liya js and backend ke liye java php asp toh logo ne javascript ko machine pe port krdiya backend ko  handle krne ke liye  toh java script ko machine pe 
      chalane ke liye laaye run time envoirment node js javscript ka hum hr jange use krne  lag gye font end back end or database  */}

      {/* React is a popular JavaScript library for building user interfaces, particularly for single-page applications. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.

        React allows you to build reusable UI components that can be composed together to build complex user interfaces. It uses a virtual DOM (Document Object Model) to improve performance, and it allows you to write your components in JSX, a syntax that lets you write HTML-like code in your JavaScript.

        React is often used with other libraries and frameworks, such as Redux for state management and React Router for routing. It's also commonly used with build tools like Webpack and Babel to bundle and transpile your code. */}
      {/* library and framework mein kya diffrence hai */}
      {/* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. */}
      {/* A Promise is in one of these states:

        pending: initial state, neither fulfilled nor rejected.
        fulfilled: meaning that the operation was completed successfully.
        rejected: meaning that the operation failed. */}

      {/* framework code ko call kra rha h  On the other hand, a framework is a more comprehensive set of tools and guidelines for building applications. It provides a structure and a set of rules that you must follow, and it often includes a lot of boilerplate code that you can use to get started quickly. A framework typically handles a lot of the low-level details of building an application, such as routing, data binding, and dependency injection. */}

      {/* Hooks basically special function which provide a way to use class based components featuers to functnal based comonents
          
          Features of Class based components in function based components
            • It allows you to use state and other React features without writing a class.
            • Hooks are the functions which "hook into" React state and lifecycle features from function components
            • Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
            some hooks  useState useRef useContex useEffecr

            
              useState is a hook in React that allows you to add state to functional components. It's a way to preserve some values between the function calls, and it's a replacement for the this.setState method in class components.
          
          */}
    </>
  );
};
export default Page;
