import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faAddressCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Informatio() {
  return (
    <div className="flex flex-col w-[350px] h-[650px] gap-[12px] text-[#224957]">
      <div className="flex flex-row justify-center items-center w-[350px] h-[150px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Information</div>
          <div className="flex flex-row justify-between text-sm">
            <div>Join</div>
            <div>01 January 2022</div>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div>Work Sold</div>
            <div>150 Times</div>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div>Success Rate</div>
            <div>99%</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Verified</div>
          <div className="flex flex-row justify-start gap-[15px]">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faAddressCard}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faPhone}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[150px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Personal Details</div>
          <div className="flex flex-row justify-between text-sm">
            <div>Date of birth:</div>
            <div>10 August 1994</div>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div>Gender:</div>
            <div>Not specific</div>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div>Interest:</div>
            <div>Men</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Language</div>
          <div className="flex flex-row justify-start gap-[15px] text-sm">
            <div>Thai, English, Chinese</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Hobby</div>
          <div className="flex flex-row justify-start gap-[15px] text-sm">
            <div>Reading Book, Play Game, Piano, Football</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informatio;
