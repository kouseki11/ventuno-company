import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Home from "./home";
import axios from "axios";

export default function Index({ productList }) {
  return (
    <div className="">
      <Head>
      <title>Ventuno</title>
        <link rel="icon" href="/images/ventuno.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home productList={productList} />
    </div>
  );
}
