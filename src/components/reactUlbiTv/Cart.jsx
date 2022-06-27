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
          return <div key={new Date().getMilliseconds()}>{post.title}</div>;
        })}
      </div>
    </>
  );
};

export default Cart;
