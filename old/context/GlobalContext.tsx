import React, { createContext, useEffect, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import { Dimensions } from "react-native";

const hlavniState:{
  currentMenu:string,
  currentWidth:number,
  currentHeight:number,
} = {
 currentMenu:"/",
 currentWidth:0,
 currentHeight:0,
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);
  const setMenu = (stranka: string) => {
    dispatch({
      type: "SET_MENU",
      payload: stranka,
    });
  };

  const setWidth = (width: number) => {
    console.log("width", width)
    console.log("setting width, width is: ", width)
    dispatch({
      type: "SET_WIDTH",
      payload: width,
    });
  };

  const setHeight = (height: number) => {
    console.log("height", height)
    dispatch({
      type: "SET_HEIGHT",
      payload: height,
    });
  };


  return (
    <GlobalContext.Provider
      value={{
       currentMenu:state.currentMenu,
       currentWidth:state.currentWidth,
        currentHeight:state.currentHeight,
       //@ts-ignore
       setMenu,
        //@ts-ignore
        setWidth,
        //@ts-ignore
        setHeight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};