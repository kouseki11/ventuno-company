import React from "react";
import About from "../../components/About";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
      <title>Ventuno | About</title>
        <link rel="icon" href="/images/ventuno.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <About />
    </div>
  );
};

export default Index;
