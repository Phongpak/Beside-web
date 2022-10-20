import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ReviewCard() {
  return (
    <div className="flex justify-center items-center w-[290px] h-[175px] border-2 border-[#9AC0B5] rounded-xl">
      <div className="flex justify-between flex-row w-[90%] h-[90%] gap-[10px]">
        <div className="flex flex-col gap-1">
          <div className="text-[17px] text-[#224957] font-medium">
            Siam paragon
          </div>
          <img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            width="100"
          />
          <div className="flex items-center gap-[5px] text-[#E6C3C1] text-[10px]">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <div className>4.5</div>
          </div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words">
            <div className="w-[90%] h-[90%]">
              Test message D Mak Mak Ka Test Review eiei
            </div>
          </div>
          <div className="flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]">
            <div className="flex flex-row gap-[5px] w-[90%] h-[90%]">
              <div className="flex flex-col">
                <img
                  className="rounded-[100%]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU"
                  width="30"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex flex-col">
                  <div className="text-[#224957] text-[12px] font-medium">
                    Mackensy
                  </div>
                  <div className="text-[#818182] text-[8px]">
                    Review date 01/01/2022
                  </div>
                </div>
                <div className="text-[#224957] text-[9px]">
                  "Best service I ever had !!!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
