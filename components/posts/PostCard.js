import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaBsFillCalendarFill, FaCalendar } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <>
      <div className="bg-gray-900 flex flex-row justify-center items-center p-5 border-t-1 border-b-1 my-8 border-gray-500 press2p ">
        <div className="">
          <div className="flex items-center">
            <img
              src={post.author.photo.url}
              alt=""
              className="inline object-cover w-8 h-8 mr-2 rounded-full"
              height="30px"
              width="30px"
            />

            <h1 className="font-medium text-xs md:text-md  text-gray-400 ml-2 cursor-pointer hover:text-gray-200 duration-100">
              {post.author.name}
              <span className="font-extrabold text-white">.</span>
            </h1>

            <p className="text-gray-400 md:ml-2 text-xs md:text-md">
              {moment(post.createdAt).format(`MMM DD, YYYY`)}
            </p>
          </div>
          <Link href={`/post/${post.slug}`}>
            <div className=" cursor-pointer">
              <h1 className="text-lg md:text-xl text-gray-200 font-bold  mt-3 player">
                {post.title}
              </h1>
              <p className="text-gray-400 text-sm md:text-lg mt-3 ">
                {post.excerpt}
                <span className="text-gray-200 font-semibold">
                  {" "}
                  Read full article
                </span>
              </p>
            </div>
          </Link>
        </div>
        {/*         
          <Image
            unoptimized
            alt={post.title}
            src={post.featuredImage.url}
            width:
            layout="fill"
            objectFit="contain" // Scale your image down to fit into the container
          /> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default PostCard;
