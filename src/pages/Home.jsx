import React from "react";
import { Navbar } from "../components/Navbar";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <div>
      {
        /* Code here */
        <>
          <Navbar />
          <Products />
        </>
      }
    </div>
  );
};

export default Home;
