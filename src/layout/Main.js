import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const ReviewContext = createContext([]);
const Main = () => {
  const reviews = useLoaderData();
  //   console.log(reviews);
  return (
    <ReviewContext.Provider value={reviews}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </ReviewContext.Provider>
  );
};

export default Main;
