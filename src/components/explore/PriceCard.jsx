import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import suzy from "../../images/suzy.png";
import { Link } from "react-router-dom";

function PriceCard() {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-3 border-4  border-[#9AC0B5] rounded-[15px] ">
      <div className="flex justify-center items-center border w-[270px]  overflow-hidden ">
        <img className="h-full " src={suzy} />
      </div>
      <div className="flex flex-col gap-3 ">
        <h1 className=" text-[#224957] text-3xl font-bold ">nayeooony</h1>
        <div className="flex items-center gap-[5px] text-[#E6C3C1] ">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <div>4.5</div>
        </div>
        <div className="flex flex-row gap-2 ">
          <span className=" bg-[#9AC0B5] rounded-[10px] text-center  p-2">
            dancing
          </span>
        </div>

        <div className="flex flex-row  h-[40%] gap-5 text-[#224957] ">
          <div className="flex flex-col   font-semibold  ">
            <div>Age:</div>
            <div>Gender:</div>
            <div className="">Description:</div>
          </div>
          <div className="flex flex-col w-2/5 font-medium ">
            <div>25</div>
            <div>Female</div>
            <div className="">no sex , no touch , no talk , no outside</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 border-2 border-[#9AC0B5] rounded-xl py-8 px-4 text-center">
        <p className="font-medium  text-[#224957]">Price</p>
        <p className=" text-[#224957] text-3xl  font-bold">5,000</p>
        <p className="font-medium  text-[#224957]">THB</p>

        <div>
          <Link
            to="/profile"
            className="mt-[30px] p-1 items-center  font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[10px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-[#506369]"
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
