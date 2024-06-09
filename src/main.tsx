import React from "react";
import ReactDOM from "react-dom/client";
import Posts,{loader as postListLoader} from "./routes/Posts.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout.tsx";
import NewPost , {action as newPostAction }from "./routes/NewPost.tsx";
import PostDetails , {loader as postLoader} from "./routes/PostDetails.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { 
        path: "/",
        element: <Posts /> ,
        loader:postListLoader ,
        children:[
          {
            path: "create-post", 
            element: <NewPost />,
            action:newPostAction
          },
          {
            path: ":postId", 
            element: <PostDetails />,
            loader:postLoader ,
          },
        ]
      },      
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
