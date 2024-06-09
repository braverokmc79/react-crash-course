import React from "react";
import classes from "./NewPost.module.css";
import { PostType } from "./PostsList";

interface NewPostProps {
    newPost: PostType
    onPostChange: (key: string, value: string) => void;
    addPost:()=>void;
}

const NewPost: React.FC<NewPostProps> = ({newPost,onPostChange, addPost}) => {

  return (
    <form className={classes.form}>
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
      <p>
        <button type="button" onClick={addPost}>
          게시
        </button>
      </p>
    </form>
  );
};

export default NewPost;
