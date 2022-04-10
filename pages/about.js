import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFileDownload,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaReadme,
  FaTwitter,
} from "react-icons/fa";

const SideLink = (props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <div className="cursor-pointer border-b-2 border-gray-600   duration-150   hover:bg-indigo-500 hover:text-white">
        <h1 className="px-4 py-2 text-gray-300 hover:text-white duration-150 font-bold my-2  press2p text-xl flex justify-center items-center   ">
          <span className="mr-5">{props.icon}</span>
          {props.name}
        </h1>
      </div>
    </a>
  );
};

const SkillTile = (props) => {
  return (
    <div className="flex flex-row items-center justify-center bg-gradient-to-tl from-gray-900 to-gray-600  rounded-sm m-2 px-2 -py-1 shadow-md">
      <img className="h-16 w-16 p-2 object-contain" src={props.imgUrl} alt="" />
      <h1 className="ml-2 font-semibold press2p">{props.name} </h1>
    </div>
  );
};

const ProjectTile = (props) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <div className="flex md:flex-row flex-col  my-5 bg-gray-800 bg-opacity-60 px-8 py-5 rounded-lg shadow-2xl ">
        <img
          className="h-36 md:w-72 rounded-lg object-cover"
          src={props.img}
          alt=""
        />

        <div className="ml-5 ">
          <h1 className="font-semibold text-gray-500  my-5 md:mt-0 text-2xl  ">
            {props.title}
          </h1>
          <p className="w-4/5">{props.desc}</p>
        </div>
      </div>
    </a>
  );
};

function About() {
  return (
    <div className="flex flex-col container bg-black md:p-10   md:pt-40 pt-40  pb-10  ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  text-white md:px-10 px-5 ">
        <div className="lg:col-span-9 col-span-1">
          <div className="flex flex-col">
            <div className="intro">
              <h1 className="text-indigo-500  text-3xl my-3 text-transparent bg-clip-text bg-gradient-to-br from-blue-400  to-red-600">
                Hi, my name is
              </h1>
              <h1 className="text-indigo-900 font-extrabold text-4xl md:text-6xl my-5 player text-transparent bg-clip-text bg-gradient-to-br from-pink-400  to-purple-600">
                Ashutosh Tripathi
              </h1>
              <h1 className="text-gray-400 font-extrabold text-5xl my-3 text-transparent bg-clip-text bg-gradient-to-br from-pink-400  to-red-600">
                I build stuff !
              </h1>
              <p className="text-gray-300 text-lg  my-8">
                I’m a FullStack web developer. Focused on creating amazing UIs
                to solve business problems around the globe. I am participating
                in Hackathons and solving problems to build something cool and
                useful for the world. 🤓
              </p>

              <div className="bg-indigo-600 rounded-lg shadow-lg md:w-2/5 bg-gradient-to-br from-red-500 to-blue-700  ">
                <h1 className="px-4 py-2 text-gray-300 text-xl text-center font-bold">
                  Check out my work
                </h1>
              </div>
            </div>
            <div className="projects mt-20">
              <h1 className="md:text-6xl text-4xl my-10 font-bold player text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
                Projects
              </h1>
              <div className="">
                <ProjectTile
                  title="Solidity Keyboard Generator"
                  img="https://pbs.twimg.com/media/FIW-L8AXwAYAIQl.jpg"
                  link="https://solidity-full-stack-website-trial-qsypa4jly-phonx38.vercel.app/"
                  desc="A Simple Web3 website for minting Keyboards. Made with NextJs,Hardhat and  Solidity smart contracts."
                />
              </div>
            </div>
            <div className="skill mt-20">
              <h1 className="md:text-6xl text-4xl my-5 font-bold player text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800  ">
                Skills
              </h1>
              <div className="">
                <h1 className="text-2xl text-gray-400 my-5 mt-10 underline underline-offset-2">
                  Web3 Skills
                </h1>
                <div className="flex md:flex-row flex-col items-center">
                  <SkillTile
                    imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
                    name="Ehereum Virtual Machine"
                  />
                  <SkillTile
                    imgUrl="https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png"
                    name="Hardhat"
                  />
                  <SkillTile
                    imgUrl="https://avatars.githubusercontent.com/u/49798644?s=280&v=4"
                    name="Alchemy"
                  />
                  <SkillTile
                    imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/1200px-Solidity_logo.svg.png"
                    name="Solidty"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-gray-400 my-5 mt-10 underline underline-offset-2">
                  Frontend
                </h1>
                <div className="flex md:flex-row flex-col items-center">
                  <SkillTile
                    imgUrl="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png"
                    name="NextJs"
                  />
                  <SkillTile
                    imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    name="ReactJs"
                  />
                  <SkillTile
                    imgUrl="https://www.seekpng.com/png/full/945-9454419_nuff-said-show-me-the-code-flutter-bottom.png"
                    name="Flutter"
                  />
                  <SkillTile
                    imgUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--762O-5e0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qy0ctxjhdgvvj6e4ra10.png"
                    name="Tailwind"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-gray-400 my-5 mt-10 underline underline-offset-2">
                  Backend
                </h1>
                <div className="flex md:flex-row flex-col items-center">
                  <SkillTile
                    imgUrl="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                    name="NodeJs"
                  />
                  <SkillTile
                    imgUrl="data:image/png;base64,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"
                    name="Django"
                  />
                  <SkillTile
                    imgUrl="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                    name="MongoDb"
                  />
                  <SkillTile
                    imgUrl="https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png"
                    name="Firebase"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-gray-400 my-5 mt-10 underline underline-offset-2">
                  Programming Languages
                </h1>
                <div className="flex md:flex-row flex-col items-center">
                  <SkillTile
                    imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
                    name="Python"
                  />
                  <SkillTile
                    imgUrl="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                    name="JavaScript"
                  />
                  <SkillTile
                    imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/1200px-Solidity_logo.svg.png"
                    name="Solidity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1 lg:col-span-3">
          <div className="lg:sticky relative md:top-40 top-8">
            <div className=" flex flex-col bg-gray-900  ">
              <SideLink
                link="https://github.com/Phonx38"
                name="Github"
                icon={<FaGithub />}
              />
              <SideLink
                link="https://www.linkedin.com/in/ashutosh-t-7aa966117/"
                name="Linkedin"
                icon={<FaLinkedinIn />}
              />
              <SideLink
                link="https://www.instagram.com/happy_and_hungry_/"
                name="Instagram"
                icon={<FaInstagram />}
              />
              <SideLink link="" name="Mail me" icon={<FaGoogle />} />
              <SideLink link="" name="Twitter" icon={<FaTwitter />} />
              <SideLink link="#" name="My Resume" icon={<FaFileDownload />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
