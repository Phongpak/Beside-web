import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TopupForm from "../profile/TopupForm";
import WithdrawForm from "../profile/WithdrawForm";

function ModalWallet({ isOpenModalWallet, closeModalWallet }) {
  const [type, setType] = useState("topup");
  // const { user } = useA;
  return (
    <>
      {isOpenModalWallet ? (
        <>
          <div
            onClick={closeModalWallet}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              <div className="border-4 border-[#9AC0B5] rounded-[30px]  min-w-[775px] shadow-lg relative flex flex-col justify-center items-center w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-row justify-between items-center min-w-[725px] pt-[10px] pb-[10px]">
                  <div className="flex flex-row gap-[10px] self-start pt-[10px]">
                    <div
                      className={`${
                        type === "topup"
                          ? "bg-[#506369] text-white"
                          : "bg-white text-[#224957] border-2 border-[#9AC0B5]"
                      } cursor-pointer flex flex-row justify-center items-center text-[14px] font-medium rounded-[15px] min-w-[100px] h-[30px]  hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
                      onClick={() => setType("topup")}
                    >
                      Topup
                    </div>
                    <div
                      className={`${
                        type === "withdraw"
                          ? "bg-[#506369] text-white"
                          : "bg-white text-[#224957] border-2 border-[#9AC0B5]"
                      } cursor-pointer flex flex-row justify-center items-center text-[14px] font-medium rounded-[15px] min-w-[100px] h-[30px]  hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
                      onClick={() => setType("withdraw")}
                    >
                      Withdraw
                    </div>
                  </div>
                  <button className="text-[30px] text-gray-400">
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={closeModalWallet}
                    />
                  </button>
                </div>
                {type === "topup" ? <TopupForm /> : <WithdrawForm />}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ModalWallet;
