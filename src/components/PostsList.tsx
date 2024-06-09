import React, { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

export type PostType = {
  id: string;
  author: string;
  body: string;
};

interface PostsListProps {
  isPosting: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  hideModalHandler: () => void;
}

const initializeData = {
  id: "",
  author: "",
  body: "",
};

const PostsList: React.FC<PostsListProps> = (props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [newPost, setNewPost] = useState<PostType>(initializeData);
  const [isFetching, setIsFetching] =useState(false);


  const postDataChangerHandler = (key: string, value: string) => {
    setNewPost((prevNewPost) => ({
      ...prevNewPost,
      [key]: value,
    }));
  };


  useEffect(() => {
    try{
      setIsFetching(true);
      const postList = async () => {
        const respose = await fetch("http://localhost:8080/posts");
        
        if(respose.ok){
          const resData = await respose.json();
          setPosts(resData.posts);
          setIsFetching(false);
        }
      };
      
      postList();
    }catch(error){
      console.log("에러 : ",error);
    }

  }, []);



  const addPostHandler = (postData: PostType) => {
    const addPost = async () => {
      await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
    };

    addPost();

    setPosts((existingPosts) => [postData, ...existingPosts]);
    setNewPost(initializeData); // 초기화
    props.setModalVisible(false);
  };

  const onStopPostion = () => {
    props.hideModalHandler();
    setNewPost(initializeData); // 초기화
  };

  let modalConent;
  if (props.isPosting) {
    modalConent = (
      <Modal onClose={props.hideModalHandler}>
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
      {!isFetching && posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching &&  posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>등록된 포스트가 없습니다.</h2>
          <p>포스트를 추가해 주세요!</p>
        </div>
      )}
      {isFetching && 
      <div style={{ textAlign: "center", color: "white" }}>
          <h2>데이터를 가져오는 중....</h2>         
        </div>
      }
    </>
  );
};

export default PostsList;
