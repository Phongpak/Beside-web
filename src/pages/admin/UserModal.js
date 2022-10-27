import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function UserModal({ isOpen, closeModal }) {
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
                    Identity Verification
                  </div>
                  <div className="w-full h-96 flex justify-center items-center  bg-slate-300  ">
                    <img
                      className="w-2/3"
                      src="https://support.huaweicloud.com/intl/en-us/api-ocr/en-us_image_0288050121.png"
                    />
                  </div>
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
                  <div className="flex flex-row justify-center gap-[20px] my-10">
                    <button className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0">
                      ACCEPT
                    </button>
                    <button className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#E6C3C1] rounded-[20px] hover:bg-[#E6C3C1] hover:text-white transition delay-20 hover:border-0">
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

export default UserModal;
