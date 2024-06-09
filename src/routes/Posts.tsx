import { Outlet } from "react-router-dom";
import "../App.css";
import PostsList, { PostType } from "../components/PostsList";
import React from "react";

const Posts: React.FC = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};

export default Posts;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const resData: { posts: PostType[] } = await response.json();

  return resData.posts;
};
