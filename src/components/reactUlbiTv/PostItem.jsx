import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartReducer";
import MyButton from "../UI/button/MyButton";
import './PostItem.scss'

const PostItem = (props) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const removePost = () => {
    props.removePost(props.post);
  };
  return (
      <div className="post">
        <div className="post__contnent">
          <div>{props.post.id}</div>
          <div>
            <div>
              <u>title:</u>
            </div>{" "}
            {props.post.title}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => navigate(`/allPosts/${props.post.id}`)}>Open</MyButton>
          <MyButton onClick={removePost}>Delete</MyButton>
          {user && (<MyButton onClick={() => dispatch(addToCart(props.post))}>add to cart</MyButton>)}
        </div>
      </div>
  );
};

export default PostItem;
