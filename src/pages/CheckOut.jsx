import React from "react";
import { useSelector } from "react-redux";
import BackButton from "../components/Buttons";

const CheckOut = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalAmount = cartItems.reduce((p, c) => p + c.qty * c.price, 0);
  const totalQnt = cartItems.reduce((p, c) => p + c.qty, 0);

  return (
    <div className="py-[150px] ">
      <div className="  md:flex md:flex-row flex flex-col-reverse md:gap-0 gap-3 md:max-w-[80%] max-w-[90%] mx-auto">
        <BackButton url={"/cart"} />
        <div className="left md:w-[60%] w-full p-3 mt-5">
          <div>
            <h2 className="text-[20px] capitalize text-white font-medium">
              contact
            </h2>
            <input
              type="email"
              placeholder="email"
              className="border bg-transparent outline-none w-full p-2 my-2 capitalize text-xl text-white"
            />
          </div>
          <div>
            <h2 className="font-medium capitalize text-[20px] text-white">
              delivery
            </h2>
            <select
              name=""
              id=""
              className="w-full p-2 border my-2 capitalize bg-transparent text-white"
            >
              <option value="">country</option>
              <option value="">india</option>
              <option value="">pakistan</option>
              <option value="">england</option>
              <option value="">australia</option>
            </select>
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="first name"
              className="w-[48%] border p-2 capitalize text-xl outline-none bg-transparent text-white"
            />
            <input
              type="text"
              placeholder="last name"
              className="w-[48%] border p-2 capitalize text-xl outline-none bg-transparent text-white"
            />
          </div>
          <input
            type="address"
            placeholder="address"
            className="w-full border my-2 p-2 text-xl capitalize outline-none bg-transparent text-white"
          />
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="city"
              className="border w-[32%] p-2 capitalize text-xl bg-transparent text-white"
            />
            <select
              name=""
              id=""
              className="border w-[32%] text-xl p-2 capitalize bg-transparent text-white"
            >
              <option value="">state</option>
              <option value="">madhya pradesh</option>
              <option value="">rajasthan</option>
              <option value="">punjab</option>
            </select>
            <input
              type="number"
              placeholder="pincode"
              className="border w-[32%] text-xl capitalize p-2 bg-transparent"
            />
          </div>

          <div className="mt-10">
            <div className="flex gap-2">
              <input type="checkbox" />
              <h2 className="text-xl capitalize font-medium">payment</h2>
            </div>
            <p className="capitalize my-1">
              all transactions are secured and encrypted
            </p>
            <div className=" p-5">
              <h3 className="text-xl text-white capitalize font-medium my-1">
                credit card
              </h3>
              <input
                type="number"
                placeholder="card number"
                className=" outline-none my-2 p-2 capitalize text-xl  bg-transparent border"
              />
              <div className="flex justify-between">
                <input
                  type="number"
                  placeholder="expiration date(MM /YY)"
                  className="p-2  capitalize text-xl outline-none my-2 w-[48%] bg-transparent border text-white"
                />
                <input
                  type="text"
                  placeholder="security code"
                  className="p-2  capitalize text-xl outline-none my-2 w-[48%] bg-transparent border text-white"
                />
              </div>
              <input
                type="text"
                placeholder="name on card"
                className="p-2  capitalize text-xl outline-none my-2 w-full bg-transparent border"
              />
            </div>

            <div className="flex gap-2 my-2">
              <input type="checkbox" />
              <h2 className="text-xl capitalize font-medium text-white">
                cash on delivery (COD)
              </h2>
            </div>
            <button className="w-full capitalize text-xl bg-[#006EA6] text-white p-2 font-medium">
              pay now
            </button>
          </div>
        </div>
        <div className="right md:w-[40%] w-full md:p-10 p-4 ">
          {cartItems.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="flex mb-2 items-center justify-between border"
                >
                  <div className="flex gap-2">
                    <div className="relative">
                      <img
                        src={`http://localhost:8000/uploads/${item.imgpath}`}
                        alt="img"
                        className="w-[50px]"
                      />
                      <div className="absolute top-[-5px] bg-violet-900 w-6 p-1 h-6 rounded-full flex items-center justify-center text-white">
                        {item.qty}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl capitalize text-white">
                        {item.title}
                      </h4>
                      <p className="text-[18px] text-white">₹{item.price}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="flex gap-2 mt-5">
            <input
              type="text"
              placeholder="apply your coupon"
              className="flex flex-1 capitalize w-[75%] text-xl p-2 outline-none text-white bg-transparent border"
            />
            <button className=" w-[25%] capitalize text-xl outline-none border  p-2 text-white">
              apply
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="capitalize text-xl text-white">total quantity:</p>
              <p className="text-[18px] text-white">{totalQnt}</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="capitalize font-medium text-xl text-white">
                total:
              </p>
              <p className="text-[18px] text-white">₹{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
