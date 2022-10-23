import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ModalCompleted from "../modals/ModalCompleted";

function CompletedCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <div className="flex flex-col justify-center items-center ml-[40px]">
            <div className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden">
              <img
                className="h-full"
                src={
                  "https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a"
                }
              />
            </div>
            <div className="font-medium text-[#224957]">Ruka Chan</div>
          </div>
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Siam Paragon</div>
              <div>8,000 THB</div>
            </div>
          </div>
          <button
            onClick={openModal}
            className="flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
          >
            Write review here
          </button>
          <div className="flex justify-center items-center self-end font-medium text-[#E37383] w-[175px] h-[40px] border-2 border-[#E8D3D0] rounded-[15px]">
            Denied
          </div>
          <div className="flex justify-end items-center self-end gap-[5px] font-medium text-[#9AC0B5] text-[20px] w-[175px]">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </div>
      <ModalCompleted isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default CompletedCard;
