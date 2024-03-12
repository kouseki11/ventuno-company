import React from "react";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";

const Index = ({ productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <MenuWrapper productList={productList} />
      <About />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
