import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      <div>cart</div>
      <div>
        {cart.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    </>
  );
};

export default Cart;
