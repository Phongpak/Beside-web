import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TransactionModal from "../../pages/admin/TransactionModal";
function TransactionCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#98ADC0] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#98ADC0] ml-[63px]"
            icon={faWallet}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Top up</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <button
            className="self-end flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
            onClick={openModal}
          >
            ACCEPT
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#98ADC0] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#98ADC0] ml-[63px]"
            icon={faWallet}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Top up</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <button
            className="self-end flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
            onClick={openModal}
          >
            ACCEPT
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#9AC0B5] ml-[63px]"
            icon={faSackDollar}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Withdraw</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-[#9AC0B5] rounded-[15px]">
            Success
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#9AC0B5] ml-[63px]"
            icon={faSackDollar}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Withdraw</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-[#9AC0B5] rounded-[15px]">
            Success
          </div>
        </div>
      </div>
      <TransactionModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default TransactionCard;
