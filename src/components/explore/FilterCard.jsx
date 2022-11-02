import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
function FilterCard({ handleFilter, price, ProvidersPrice }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [review, setReview] = useState(0);
  const stars = [0, 0, 0, 0, 0];
  const handleMouseClick = (value) => {
    if (currentValue === value) {
      setCurrentValue(0);
      handleFilter("", 0);
      return;
    }
    setCurrentValue(value);
    handleFilter("", value);
  };

  const handleMouseHover = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className="flex flex-col  border-4 border-[#9AC0B5] rounded-[15px] p-5">
      <div className="flex flex-row justify-between">
        <span className=" ">Gender:</span>
        <select
          className=" border rounded"
          name="gender"
          onChange={handleFilter}
        >
          <option value="">-</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>
      <div className="flex flex-row justify-between mt-2 ">
        <span className="">Age:</span>
        <select className="border rounded" name="age" onChange={handleFilter}>
          <option value="">-</option>
          <option value="20-25">20-25</option>
          <option value="26-30">26-30</option>
          <option value="31-35">31-35</option>
          <option value="35-99">35</option>
        </select>
      </div>
      <div className="flex mt-4 justify-center">Price Range</div>
      <div className="flex flex-row justify-between mt-2 ">
        <Slider
          getAriaLabel={() => "Price per Hour range"}
          name="price"
          value={price}
          onChange={handleFilter}
          min={Math.min(...ProvidersPrice)}
          max={Math.max(...ProvidersPrice)}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
      <div className="flex mt-4 justify-center">Review Rating</div>
      <div className="flex flex-row justify-between mt-2 ">
        {stars.map((item, index) => (
          <FontAwesomeIcon
            onClick={() => {
              const score = index + 1;
              setReview(score);
              handleMouseClick(index + 1);
            }}
            onMouseOver={() => handleMouseHover(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`cursor-pointer text-[30px] text-${
              (hoverValue || currentValue) > index ? "[#9AC0B5]" : "[#D9D9D9]"
            }`}
            icon={faStar}
            key={index}
            name="rating"
            value={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
