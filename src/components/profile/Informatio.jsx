import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormat, { masks } from "dateformat";
import {
  faEnvelope,
  faAddressCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import GoogleMapContainerLocation from "../GoogleMapContainerLocation";
// import {
//   faSquareFacebook,
//   faSquareInstagram
// } from "@fortawesome/free-brands-svg-icons";

function Informatio({ isEditing, handleChangeInput, input, user }) {
  console.log(user);
  if (!user) {
    return null;
  }
  const joinDate = new Date(user?.createdAt);
  const fullDate = dateFormat(joinDate || "02/02/22", " d mmmm yyyy ");
  const birthDate = new Date(user?.birthDate);
  const fullBirthDate = dateFormat(birthDate || "02/02/32", " d mmmm yyyy ");

  console.log("user", user);
  return (
    <div className="flex flex-col w-[350px] h-[900px] gap-[12px] text-[#224957]">
      <div className="flex flex-row justify-center items-center w-[350px] h-[150px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Information</div>
          <div className="flex flex-row justify-between text-sm">
            <div>Join</div>
            <div>{fullDate}</div>
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
            {/* <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-[#809590] text-[25px]"
            ></FontAwesomeIcon> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[150px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Personal Details</div>
          <div className="flex flex-row justify-between text-sm">
            <div>Date of birth:</div>
            <div>{fullBirthDate}</div>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div>Gender:</div>

            {isEditing ? (
              <select
                className="text-[#809590] w-28 text-right border-2 border-[#809590] rounded-xl"
                onChange={handleChangeInput}
                name="gender"
                value={input?.gender}
              >
                <option value="NOT_SPECIFIC">Not specific</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            ) : (
              <div>{user?.gender}</div>
            )}
          </div>
          <div className="flex flex-row justify-between text-sm">
            <div>Interest:</div>
            {isEditing ? (
              <select
                className="text-[#809590] w-28 text-right border-2 border-[#809590] rounded-xl"
                onChange={handleChangeInput}
                name="sexuallyInterested"
                value={input.sexuallyInterested}
              >
                <option value="NOT_SPECIFIC">Not specific</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            ) : (
              <div>
                {" "}
                {user?.sexuallyInterested ? user?.sexuallyInterested : "-"}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px]  border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Location</div>
          <div className="flex flex-col  gap-[15px] text-sm">
            <GoogleMapContainerLocation />
            {/* {isEditing ? (
              <input
                className="text-[#224957] w-80  border-2 border-[#809590] rounded-xl"
                type="text"
                name="lat"
                value={input?.lat}
                onChange={handleChangeInput}
              ></input>
            ) : (
              <div>{user?.lat}</div>
            )} */}
          </div>
          {/* <div className="flex flex-row justify-start gap-[15px] text-sm">
            {isEditing ? (
              <input
                className="text-[#224957] w-80  border-2 border-[#809590] rounded-xl"
                type="text"
                name="lng"
                value={input?.lng}
                onChange={handleChangeInput}
              ></input>
            ) : (
              <div>{user?.lng}</div>
            )}
          </div> */}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Language</div>
          <div className="flex flex-row justify-start gap-[15px] text-sm">
            {isEditing ? (
              <input
                className="text-[#224957] w-80  border-2 border-[#809590] rounded-xl"
                type="text"
                name="language"
                value={input?.language}
                onChange={handleChangeInput}
              ></input>
            ) : (
              <div> {user?.language}</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]">
        <div className="flex flex-col w-[90%] h-[90%] gap-[10px]">
          <div className="text-[20px] font-medium">Hobby</div>
          <div className="flex flex-row justify-start gap-[15px] text-sm">
            {isEditing ? (
              <input
                className="text-[#224957] w-80  border-2 border-[#809590] rounded-xl"
                type="text"
                name="hobby"
                value={input?.hobby}
                onChange={handleChangeInput}
              ></input>
            ) : (
              <div>{user?.hobby}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informatio;
