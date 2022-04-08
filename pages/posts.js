import React from "react";
import { PostCard, Categories, PostWidget, Header } from "../components/posts";
import { getPosts } from "../services";

function Posts({ posts }) {
  return (
    <div className="flex flex-col container bg-black md:p-10   md:pt-40 pt-40  pb-10  ">
      <div className="text-white">{/* <Header /> */}</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  text-white md:px-10 px-5 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative md:top-40 top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
