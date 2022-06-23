import React from "react";
import Banner from "./Banner";
import ShopBy from "./ShopBy";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <ShopBy />
      </div>
    </div>
  );
};

export default Home;
