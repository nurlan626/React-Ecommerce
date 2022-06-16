import React from "react";
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
  const removePost = () => {
    props.removePost(props.post);
  };
  return (
    <div>
      <div className="post">
        <div className="post__contnent">
          <div>{props.number}.</div>
          <div><div><u>title:</u></div> {props.post.title}</div>
          <div><div><u>body: </u></div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={removePost}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
