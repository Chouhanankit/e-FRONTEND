import React from "react";
import CartItems from "../components/CartItems";
import Amount from "../components/Amount";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import BackButton from "../components/Buttons";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="mt-[150px] flex-col gap-2 items-center flex justify-center">
        <BackButton url={"/dashboard"} />
        <h1 className="text-xl capitalize text-white">your cart is empty</h1>
        {/* <img src={empty} alt="" /> */}
      </div>
    );
  }
  return (
    <>
      <div className="text-white">
        <div className="py-[130px] ">
          <div className="flex items-center gap-10 justify-center">
            <BackButton url={"/shopping"} />
            <div className="flex items-center gap-2">
              <FaShoppingBag size={40} className="text-indigo-900" />
              <h4 className="text-2xl capitalize">my cart</h4>
            </div>
          </div>
          <div className="md:flex md:flex-row px-2 flex flex-col gap-10 justify-between max-w-[1200px] mx-auto mt-10">
            <div className="md:w-[68%] w-full flex flex-col gap-5">
              {cartItems?.map((cartItem) => (
                <CartItems key={cartItem._id} cartItem={cartItem} />
              ))}
            </div>
            <div className="md:w-[28%] w-full h-fit border">
              <Amount />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
