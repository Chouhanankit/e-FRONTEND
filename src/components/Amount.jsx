import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Amount = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce((p, c) => p + c.qty * c.price, 0);
  const totalQnt = cartItems.reduce((p, c) => p + c.qty, 0);
  const delivery = 50;
  return (
    <>
      <div className="border-b border-[#aaa] p-4">
        <h5 className="text-xl font-medium capitalize">price details</h5>
        <p className="text-sm capitalize">
          delivery charges <span className="text-green-400">free</span> on order
          above Rs.500{" "}
        </p>
      </div>
      <ul className="p-2 py-3 flex flex-col gap-2">
        <li className="flex capitalize font-medium items-center justify-between">
          <p>price ({totalQnt} item)</p>
          <p>₹{totalAmount}</p>
        </li>

        <li className="flex capitalize items-center font-medium justify-between">
          <p>delivery charges</p>
          <p className="flex gap-1">
            {/* <del>₹40</del> */}
            <span
              className={`${
                totalAmount > 500 ? "text-green-500" : "text-red-400"
              }`}
            >
              {totalAmount > 500 ? "Free" : delivery}
            </span>
          </p>
        </li>
        <li className="flex flex-col capitalize border-y border-[#aaa] py-2 my-5 font-medium">
          <div className="flex w-full items-center justify-between">
            <p className="text-1xl">total quantity:</p>
            <p className="text-1xl">{totalQnt}</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-2xl">total amount:</p>
            <p className="text-2xl font-normal">
              ₹{totalAmount > 500 ? totalAmount : totalAmount + delivery}
            </p>
          </div>
        </li>
        <li>
          <Link to={"/checkout"}>
            <button className="bg-black text-white w-full py-3 text-xl capitalize">
              proceed to checkout
            </button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Amount;
