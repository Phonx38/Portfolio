import Image from "next/image";
import React from "react";

const MintNft = () => {
  return (
    <div className="flex flex-col items-center  bg-black md:p-10 w-full h-screen  md:pt-40 pt-40  pb-10 ">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-10 -left-4 md:w-72 md:h-72 w-36 h-36 bg-gradient-to-r from-red-200 to-red-600 rounded-full filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 -right-4 md:w-72 md:h-72 w-36 h-36 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 rounded-full  filter blur-xl animate-blob opacity-70 animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 md:w-72 md:h-72 w-36 h-36 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full  filter blur-xl animate-blob  opacity-70 animation-delay-4000"></div>
        <div className="relative flex flex-col items-center justify-center text-center bg-gray-800 bg-opacity-60 p-10 rounded-lg shadow-md">
          <h1 className=" text-xl font-bold player text-transparent bg-clip-text bg-gradient-to-br from-pink-400  to-purple-600 ">
            Connect your metamask wallet
          </h1>
          <img
            className="h-32 w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
            alt=""
          />
          {/* <div className="w-10 h-10">
            <Image
              unoptimized
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
          <div className="w-2/3  mt-5 bg-gradient-to-r from-orange-600 to-orange-500 px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-150">
            <h1 className="text-white font-bold text-sm player ">
              Connect Wallet
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintNft;
