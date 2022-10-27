import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

function UserProviderModal({ isOpen, closeModal, user, accept, deny }) {
  console.log(user);
  return (
    <>
      {isOpen ? (
        <>
          <div
            onClick={closeModal}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto my-6 mx-auto max-w-3xl"
            >
              <div className="border-4 border-[#9AC0B5] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col  min-w-[725px] min-h-[400px] gap-3">
                  <button className="self-end text-[30px] text-gray-400">
                    <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
                  </button>
                  <div className="text-[50px]  text-[#224957]  text-center">
                    Provider Verification
                  </div>
                  <div className="w-full h-96 flex justify-center items-center  bg-slate-300  ">
                    <img className="w-2/3" src={user.bookBankImage} />
                  </div>
                  <div className="flex flex-row gap-5  text-[#224957] mx-auto ">
                    <div className="flex flex-col justify-between  font-medium">
                      <div>First name:</div>
                      <div>Last name:</div>
                      <div>Bank:</div>
                      <div>Account No. :</div>
                      <div>Date:</div>
                    </div>
                    <div className="flex flex-col justify-between ">
                      <div>{user.firstName}</div>
                      <div>{user.lastName}</div>
                      <div>{user.bankName}</div>
                      <div>{user.bookAccountNumber}</div>
                      <div>{moment(user.createdAt).format("hh:mm:ss")}</div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center gap-[20px] my-10">
                    <button
                      onClick={() => {
                        accept(user.id);
                      }}
                      className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
                    >
                      ACCEPT
                    </button>
                    <button
                      onClick={() => {
                        deny(user.id);
                      }}
                      className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#E6C3C1] rounded-[20px] hover:bg-[#E6C3C1] hover:text-white transition delay-20 hover:border-0"
                    >
                      DENY
                    </button>
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

export default UserProviderModal;
