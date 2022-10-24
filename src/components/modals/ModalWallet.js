import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ModalWallet({ isOpenModalWallet, closeModalWallet }) {
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
              <div className="border-4 border-[#9AC0B5] rounded-[30px] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col items-center min-w-[725px] min-h-[475px] gap-[18px]">
                  <button className="self-end text-[30px] text-gray-400">
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={closeModalWallet}
                    />
                  </button>
                  <div className="flex flex-col justify-between items-center h-[375px]">
                    <div className="flex flex-row justify-center items-center w-[275px] h-[125px] bg-[#9AC0B5] rounded-[30px] text-white text-[24px] font-medium">
                      Wallet: 50,000 THB
                    </div>
                    <div className="flex flex-row justify-center items-center gap-[15px]">
                      <div className="text-[#224957] text-[20px] font-medium">
                        Amout:
                      </div>
                      <input className="flex flex-row justify-center items-center text-center text-[#9AC0B5] text-[24px] w-[150px] h-[50px] border-2 border-[#9AC0B5] rounded-[20px]" />
                      <div className="text-[#224957] text-[20px] font-medium">
                        THB
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-[20px]">
                      <button className="flex justify-center items-center font-medium text-[#224957] w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
                        Topup
                      </button>
                      <button className="flex justify-center items-center font-medium text-[#224957] w-[100px] h-[40px] border-2 border-[#E8D3D0] rounded-[15px] hover:bg-[#E8D3D0] hover:text-white transition delay-20 hover:border-0">
                        Withdraw
                      </button>
                    </div>
                  </div>
                </div>
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
