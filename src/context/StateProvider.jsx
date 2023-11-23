import React, { createContext, useReducer } from "react";
import { initialState, rootReducer } from "./rootReducer";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  const [data, dispatch] = useReducer(rootReducer, initialState);
  return (
    <StateContext.Provider value={{ data, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
