import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-black  ">
      <Head>
        <title>BlocksbyBlocks</title>
        <meta
          name="description"
          content="Find all the Blockchain,Web3,Crypto and Metaverse related topics in one place."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
