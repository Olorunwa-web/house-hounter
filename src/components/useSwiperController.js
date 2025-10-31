import React, { createContext, useContext, useRef } from "react";

const SwiperContext = createContext(null);

export const SwiperProvider = ({ children }) => {
  const currentSwiperRef = useRef(null);
  return React.createElement(
    SwiperContext.Provider,
    { value: { currentSwiperRef } },
    children
  );
};

export const useSwiperController = () => useContext(SwiperContext);