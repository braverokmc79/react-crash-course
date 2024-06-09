import { useLoaderData, Link, Params } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';
import React from 'react';
import { PostType } from '../components/PostsList';

const PostDetails:React.FC=()=>{
  const post = useLoaderData() as PostType;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>포스트를 찾을 수 없습니다.</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;


export const loader=async ({params}:{params:Params})=>{

  console.log("loader  :"  ,params.postId);

  const response=await fetch("http://localhost:8080/posts/"+params.postId);
  const resData: { post: PostType }=await response.json();
  return resData.post;
}