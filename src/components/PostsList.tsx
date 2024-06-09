import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";

export type PostType = {
  id: string;
  author: string;
  body: string;
};

const PostsList: React.FC = () => {
  const posts = useLoaderData() as PostType[];
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    if (!posts) {
      setIsFetching(true);
    } else {
      setIsFetching(false);
    }
  }, [posts]);

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>등록된 포스트가 없습니다.</h2>
          <p>포스트를 추가해 주세요!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>데이터를 가져오는 중....</h2>
        </div>
      )}
    </>
  );
};

export default PostsList;
