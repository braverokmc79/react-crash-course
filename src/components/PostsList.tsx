import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

export type PostType = {
  author: string;
  body: string;
};

const PostsList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [newPost, setNewPost] = useState<PostType>({ author: "", body: "" });
  const [modalVisible, setModalVisible] = useState(true);

  const postDataChangerHandler = (key: string, value: string) => {
    setNewPost((prevNewPost) => ({
      ...prevNewPost,
      [key]: value,
    }));
  };

  const addPostHandler = () => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setNewPost({ author: "", body: "" }); // 초기화
    setModalVisible(false);
  };

  const hideModalHandler = () => {
    setModalVisible(false);
  };

  let modalConent;
  if(modalVisible){
    modalConent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          newPost={newPost}
          onPostChange={postDataChangerHandler}
          addPost={addPostHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalConent}

      <ul>
        {posts.map((post) => (
          <Post key={post.author} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
};

export default PostsList;
