import React from "react";
import classes from './Post.module.css'


interface PostProps {
  author: string;
  body: string;
}

const Post: React.FC<PostProps> = (props) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}> {props.body}</p>
    </div>
  );
};

export default Post;
