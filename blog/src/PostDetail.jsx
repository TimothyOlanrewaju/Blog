import React from "react";
import { useParams } from "react-router-dom";
import PageNav from "./PageNav";
import Footer from "./Footer";

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <PageNav />
      <div className="max-w-screen-2xl flex justify-center items-center text-center">
        <div className="h-[32rem]">
          <h2 className="text-2xl font-extrabold">{post.title}</h2>
          <p className="italic mb-2">By {post.author}</p>
          <p>{post.body}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostDetail;
