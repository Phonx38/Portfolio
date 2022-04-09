import Head from "next/head";
import React from "react";
import { Header } from ".";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>BlocksbyBlocks</title>
        <meta
          name="description"
          content="Find all the Blockchain,Web3,Crypto and Metaverse related topics in one place."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
