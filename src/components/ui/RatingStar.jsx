import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftRight, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function RatingStar({ rating }) {
  let i = Math.round(rating);
  return (
    <>
      {[...Array(i)].map((start, index) => {
        index += 1;
        return <FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>;
      })}
    </>
  );
}

export default RatingStar;
