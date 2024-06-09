import React from 'react';
import classes from './NewPost.module.css';

const NewPost:React.FC=()=>{
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">작성자</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;