import React, { useState } from "react";
import classes from "./NewPost.module.css";
import { PostType } from "../components/PostsList";
import Modal from "../components/Modal";
import { Form, redirect, useNavigate } from "react-router-dom";

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

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">내용</label>
          <textarea
            id="body"
            name="body"
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
            name="author"
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
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
 
  const postData=Object.fromEntries(formData);
  // const postData: PostType = {
  //   id: Math.random().toString(),
  //   author: formData.get("author") as string,
  //   body: formData.get("body") as string,
  // };
  console.log(" postData ", postData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
};
