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

function About() {
  return (
    <div className="flex flex-col items-center container bg-black md:p-10 w-full   md:pt-40 pt-40  pb-10  ">
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
