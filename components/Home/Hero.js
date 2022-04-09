import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Decentralized", "Web 3.0", "Defi", "DAOs"];
function Hero() {
  const [newName, setnewName] = useState("Decentralized");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * TEXTS.length);
    setnewName(TEXTS[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div className="flex flex-col w-full  md:pt-40 justify-center items-center min-h-screen z-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black  ">
      <div className=" w-full md:w-3/5 text-center flex flex-col items-center md:p-2 pl-2 pr-2 pt-10 z-10">
        <div className="-z-20 md:-z-10 absolute top-60 md:top-40 right-0 md:right-20 w-32 h-28   opacity-70 ">
          <Image
            unoptimized
            layout="fill"
            objectFit="contain"
            src="https://thumbs.gfycat.com/BabyishNearBlackbear-max-1mb.gif"
            alt="back"
          />
        </div>
        <div className="-z-20 md:-z-10 absolute top-32 left-3 md:left-20 w-32 h-24   opacity-70  ">
          <Image
            layout="fill"
            unoptimized
            src="https://thumbs.gfycat.com/BabyishNearBlackbear-max-1mb.gif"
            alt="back"
          />
        </div>
        <div className="-z-20 md:-z-10 absolute top-56 left-5 md:left-24 w-24 h-16   opacity-70  ">
          {" "}
          <Image
            unoptimized
            layout="fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAf2nTl_AVgPXaYkGotITIFDXV1w43RZOHUaSEGxrRWSTSVQOmzTQL5bxx_szAeeIwOo&usqp=CAU"
            alt="back"
          />
        </div>
        <div className="-z-20 absolute top-0 md:bottom-0  w-full h-full  opacity-70  ">
          <Image
            unoptimized
            layout="fill"
            src="https://gifimage.net/wp-content/uploads/2018/11/pixel-gif-stars-1.gif"
            alt=""
            objectFit="cover"
          />
        </div>

        <p className=" text-2xl mt-20 md:mt-0 md:text-5xl player text-space text-center pb-2 font-bold leading-normal md:leading-normal">
          Exploring the
          <br /> <span className="text-indigo-700 ">{newName}</span> <br />
          Space.
        </p>
        <p className="text-gray-300 leading-tight pt-6   font-semibold text-l md:text-xl press2p ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          ullam totam iure eveniet cupiditate nesciunt voluptate dolor ipsam
          facilis tempore!
        </p>

        <div className="w-2/3  md:w-1/2 shadow-md bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 rounded-xl m-10 mt-5  hover:cursor-pointer hover:scale-110   duration-100">
          <h1 className="player p-3  text-white">Press 2 Play</h1>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla sit
        dignissimos voluptas iusto molestias impedit blanditiis velit
        necessitatibus omnis sapiente eius facere magnam ab pariatur, numquam
        nostrum dolorem porro. Odio doloremque recusandae, vitae laboriosam
        eveniet, laudantium nobis reiciendis quis cumque suscipit cupiditate
        velit sint quae saepe. Repellendus, voluptatibus exercitationem.
      </p>
    </div>
  );
}

export default Hero;
