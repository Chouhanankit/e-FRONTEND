import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

const BackButton = ({ url }) => {
  return (
    <Link
      to={url}
      className=" text-white font-bold  py-1 capitalize rounded-sm"
    >
      <CgArrowLongLeft size={30} />
    </Link>
  );
};

export default BackButton;
