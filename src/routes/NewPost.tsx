import React, { useState } from "react";
import classes from "./NewPost.module.css";
import { PostType} from "../components/PostsList";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const initializeData = {
  id: "",
  author: "",
  body: "",
};

const NewPost: React.FC = () => {
  const navigator = useNavigate();
  const [post, setPost] = useState<PostType>(initializeData);

  const onPostChange = (key: string, value: string) => {
    setPost({
      ...post,
      [key]: value,
    });
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData: PostType = {
      id: Math.random().toString(),
      author: post.author,
      body: post.body,
    };
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    setPost(initializeData); // 초기화
    navigator("/");
  };
 
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">내용</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={(event) => onPostChange("body", event.target.value)}
            value={post.body}
          />
        </p>
        <p>
          <label htmlFor="author">작성자</label>
          <input
            type="text"
            id="author"
            required
            onChange={(event) => onPostChange("author", event.target.value)}
            value={post.author}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={() => navigator("/")}>
            취소
          </button>
          <button>작성하기</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
