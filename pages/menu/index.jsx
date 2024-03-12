import React from "react";
import MenuWrapper from "../../components/product/MenuWrapper";
import axios from "axios";
import Head from "next/head";

const Index = ({ productList }) => {
  return (
    <div className="pt-10">
      <Head>
      <title>Ventuno | Menu</title>
        <link rel="icon" href="/images/ventuno.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <MenuWrapper productList={productList} />
    </div>
  );
};


export default Index;
