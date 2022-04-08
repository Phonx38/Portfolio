import "../styles/globals.css";
import "../styles/fonts.css";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AboutContext";
import { useState } from "react";
import comps from "../context/comps";
import "../styles/button.scss";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const [comp, setComp] = useState("about");
  return (
    <AppContext.Provider value={[comp, setComp]}>
      <div className="bg-black">
        <Navbar />
        <NextNProgress height={5} />
        <Component {...pageProps} />
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;
