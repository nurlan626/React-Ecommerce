import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity } from "../../redux/cartReducer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div>cart</div>
      <div>
        {cart.map((post) => {
          return (
            <div key={post}>
              <div>
                post iD {post.id} {post.title} - quantity ({post.qty})
                <button onClick={() => dispatch(increaseQuantity(post))}>
                  +
                </button>
                <button>-</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
