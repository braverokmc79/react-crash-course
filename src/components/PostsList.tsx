import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";


export type PostType = {
  author: string;
  body: string;
};

interface PostsListProps{
  isPosting: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  hideModalHandler: () => void;
}
const PostsList:React.FC<PostsListProps>= (props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [newPost, setNewPost] = useState<PostType>({ author: "", body: "" });
 
  const postDataChangerHandler = (key: string, value: string) => {
    setNewPost((prevNewPost) => ({
      ...prevNewPost,
      [key]: value,
    }));
  };

  const addPostHandler = (postData:PostType) => {
    setPosts([postData, ...posts]);
    setNewPost({ author: "", body: "" }); // 초기화
    props.setModalVisible(false);
  };

  const onStopPostion=()=>{
    props.hideModalHandler();
    setNewPost({ author: "", body: "" }); // 초기화
  }


  let modalConent;
  if(props.isPosting){
    modalConent = (
      <Modal onClose={props.hideModalHandler}   >
        <NewPost
          newPost={newPost}
          onPostChange={postDataChangerHandler}
          addPost={addPostHandler}
          onCancel={onStopPostion}
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
