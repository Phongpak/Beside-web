import React from "react";
import { useState } from "react";
import UserModal from "../../pages/admin/UserModal";

function UserCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex  justify-start p-2  w-fit border-4 border-[#9AC0B5] rounded-[15px]">
      <div className="flex flex-col gap-5 justify-between items-center  ">
        <div className="flex flex-row gap-5  text-[#224957] mx-auto ">
          <div className="flex flex-col justify-between  font-medium">
            <div>First name:</div>
            <div>Last name:</div>
            <div>Birth date:</div>
            <div>Date:</div>
            <div>Time:</div>
          </div>
          <div className="flex flex-col justify-between ">
            <div>wowwww</div>
            <div>@gmail.com</div>

            <div>Monday 10 September 1989</div>
            <div>Monday 10 September 2022</div>
            <div>10:34 am. </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[20px] self-end ">
          <button
            className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
            onClick={openModal}
          >
            Verification
          </button>
        </div>
      </div>
      <UserModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default UserCard;
