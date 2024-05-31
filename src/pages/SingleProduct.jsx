import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleproduct } from "../features/product/productSlice";
import { useParams } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { PulseLoader } from "react-spinners";
import { addToCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";
import cash from "../assets/cash.png";
import truck from "../assets/truck.png";
import gits from "../assets/gits.png";
import hours from "../assets/hours.png";

const SingleProduct = () => {
  const { singleProduct, isLoading } = useSelector((state) => state.product);
  const { _id, imgpath, price, desc, title } = singleProduct;
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchSingleproduct(params.id));
  }, []);

  const handleCart = () => {
    dispatch(addToCart({ _id, imgpath, title, price, qty: 1 }));
    toast.success(`added ${title}`, {
      style: {
        backgroundColor: "#FF9FAC",
        fontWeight: 500,
        textTransform: "capitalize",
        color: "white",
      },
    });
  };

  if (isLoading) {
    return (
      <h1 className="flex justify-center align-middle py-20">
        <PulseLoader
          loading={true}
          color="pink"
          style={{ paddingBlock: "20px" }}
        />
      </h1>
    );
  }

  return (
    <div className="mt-28 max-w-[900px] mx-auto shadow-lg">
      <div className="bg-zinc-800 rounded-sm p-3 flex gap-3">
        <div className="w-[30%]">
          <img
            src={`http://localhost:8000/uploads/${imgpath}`}
            className="w-full h-full object-cover"
            alt="img"
          />
        </div>
        <div className="w-[70%]">
          <h4 className="text-violet-900 text-4xl capitalize font-bold  tracking-wide">
            {title}
          </h4>
          <p className="text-white py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            minima. Nam nemo eveniet impedit sapiente, aperiam cum vero qui
            quasi, nesciunt temporibus odit tempora enim corporis, sit mollitia!
          </p>
          <div className="flex items-center gap-1 text-yellow-400 py-2 ">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <span className="text-green-600 font-bold text-2xl">
            price: ${price}
          </span>
          <div className="md:flex md:flex-row flex flex-col gap-3 py-5 md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <img className="w-[40px]" src={truck} alt="" />
              <p className="text-[14px] text-white font-medium capitalize">
                free shipping on order above ₹699
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <img className="w-[35px]" src={cash} alt="" />
              <p className="text-[14px] text-white font-medium capitalize">
                cash on delivery available
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <img className="w-[35px]" src={gits} alt="" />
              <p className="text-[14px] font-medium text-white capitalize">
                free gifts on above ₹500
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <img className="w-[40px]" src={hours} alt="" />
              <p className="text-[14px] font-medium capitalize text-white">
                24 hours shipping
              </p>
            </div>
          </div>
          <button
            onClick={handleCart}
            className="block w-full bg-blue-400 mt-2 p-2 rounded-sm capitalize text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
