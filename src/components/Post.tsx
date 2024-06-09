import React from "react";
import classes from './Post.module.css'


interface PostProps {
  author: string;
  body: string;
}

const Post: React.FC<PostProps> = ({author, body}) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.body}> {body}</p>
    </div>
  );
};

export default Post;
