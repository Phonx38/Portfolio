import { useRouter } from "next/router";
import React from "react";
import Loader from "../../components/Loader";
import {
  Categories,
  PostDetail,
  PostWidget,
  Author,
  CommentsForm,
  Comments,
} from "../../components/posts";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="md:container mx-auto md:px-10   md:pt-40 pt-28 pb-10 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12  text-white px-10 ">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 md:top-40">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
