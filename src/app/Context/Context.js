"use client"
import { createContext, useReducer } from "react";


let data = {
  theme:"false",
};
if (typeof window !== "undefined") {
  
      data.theme = JSON.parse(localStorage.getItem("epp")) || false;

}

export const ExpenseTracker = createContext();

function reducer(state,action) {
  let changeTheme;
  try {
    switch (action.type) {


            case "SET_THEME":
              console.log(action.type);
              
            changeTheme = action.payload;
             localStorage.setItem("epp", JSON.stringify(changeTheme));

            return{
              ...state,theme:changeTheme
            }
          
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
  }
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <ExpenseTracker.Provider value={{ theme: state.theme,dispatch}} >
      {children}
    </ExpenseTracker.Provider>
  );
};
