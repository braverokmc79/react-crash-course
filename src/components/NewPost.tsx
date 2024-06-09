import React from "react";
import classes from "./NewPost.module.css";
import { PostType } from "./PostsList";

interface NewPostProps {
  newPost: PostType;
  onPostChange: (key: string, value: string) => void;
  addPost: (post: PostType) => void;
  onCancel: () => void;
}

const NewPost: React.FC<NewPostProps> = ({
  newPost,
  onPostChange,
  addPost,
  onCancel,
}) => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const postData: PostType = {
      author: newPost.author,
      body: newPost.body,
    };
    addPost(postData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">내용</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(event) => onPostChange("body", event.target.value)}
          value={newPost.body}
        />
      </p>
      <p>
        <label htmlFor="author">작성자</label>
        <input
          type="text"
          id="author"
          required
          onChange={(event) => onPostChange("author", event.target.value)}
          value={newPost.author}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          취소
        </button>
        <button>작성하기</button>
      </p>
    </form>
  );
};

export default NewPost;
