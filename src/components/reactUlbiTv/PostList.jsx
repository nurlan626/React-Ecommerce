import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loader from "../UI/loader/Loader";
import PostItem from "./PostItem";
import "./PostList.scss"

const PostList = ({ posts, removePost, loading }) => {
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <h1>List of posts</h1>
          <div className="xxx">
          <TransitionGroup>
           
           {posts.length > 0 ? (
             posts.map((post, index) => {
               return (
                 <CSSTransition key={post.id} timeout={500} classNames="post">
                   <PostItem
                     removePost={removePost}
                     number={index + 1}
                     post={post}
                   />
                 </CSSTransition>
               );
             })
           ) : (
             <div>Постов нет</div>
           )}
         </TransitionGroup>
              </div>
          
        </div>
      )}
    </div>
  );
};

export default PostList;
