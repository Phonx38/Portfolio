import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-gray-900 shadow-lg rounded-sm p-8 my-8 ">
      <h3 className="text-l mb-8  border-b pb-4 player">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className=" flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              unoptimized
              src={post.featuredImage.url}
              alt={post.title}
              height="50px"
              width="50px"
              className="inline object-cover w-12 h-12 mr-2 rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs font-semibold">
              {moment(post.createdAt).format("MMM,DD YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className=" ">
              <h1 className="text-lg font-bold press2p cursor-pointer">
                {post.title}
              </h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
