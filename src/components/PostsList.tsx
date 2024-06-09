import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul>
        <Post author="Maximilian 1 " body=" reacttest 1" />

        <Post author="Maximilian 1 " body=" reacttest 1" />
      </ul>
    </>
  );
};

export default PostsList;
