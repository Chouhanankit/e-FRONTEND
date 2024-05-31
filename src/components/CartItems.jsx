import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeToCart,
} from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const CartItems = ({ cartItem }) => {
  console.log(cartItem);
  const { imgpath, price, _id, title } = cartItem;
  let {qty} = cartItem
  //   console.log(price);
  const dispatch = useDispatch();
  const handleDelete = (_id) => {
    dispatch(removeToCart(_id));
    toast.error(`removed ${title}`, {
      style: {
        backgroundColor: "#FF9FAC",
        fontWeight: 500,
        textTransform: "capitalize",
        color: "white",
      },
    });
  };

  const handleInc = (_id) => {
    dispatch(incrementQty({ _id }));
  };

  const handleDec = (_id) => {
    qty > 1 ? dispatch(decrementQty({ _id })) : (qty = 0);
  };

  return (
    <>
      <div className="border flex">
        <div className="sm:w-[20%] w-[18%] border border-[#aaa] p-2 flex flex-col items-center gap-2">
          <h4 className="sm:text-xl  capitalize">product</h4>
          <div className="w-full flex-col gap-1 flex justify-center items-center">
            <img
              src={imgpath}
              className="w-[50px] mx-auto object-fit-contain"
              alt=""
            />
          </div>
        </div>
        <div className="w-[24%] border border-[#aaa] p-2 text-center">
          <h4 className="sm:text-xl capitalize">name</h4>
          <p className="sm:text-md text-[16px] font-medium mt-3 capitalize">
            {title}
          </p>
        </div>
        <div className="sm:w-[20%] w-[15%] border p-2 text-center border-[#aaa]">
          <h4 className="sm:text-xl capitalize">price</h4>
          <p className="text-xl font-medium mt-3">{price}</p>
        </div>
        <div className="w-[20%] border p-2 text-center border-[#aaa]">
          <h4 className="sm:text-xl capitalize">quantity</h4>
          <div className="sm:flex sm:flex-row flex flex-col items-center justify-center mt-3 gap-2">
            <button
              onClick={() => handleInc(_id)}
              className="w-8 bg-[#dadada] h-8 rounded-full text-black text-2xl"
            >
              +
            </button>
            <span>{qty}</span>
            <button
              onClick={() => handleDec(_id)}
              className="w-8 bg-[#dadada] h-8 rounded-full text-2xl text-black"
            >
              -
            </button>
          </div>
        </div>
        <div className="w-[20%] border p-2 text-center border-[#aaa]">
          <h4 className="sm:text-xl capitalize">delete</h4>
          <MdDelete
            onClick={() => handleDelete(_id)}
            size={30}
            className="mx-auto mt-3 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default CartItems;
