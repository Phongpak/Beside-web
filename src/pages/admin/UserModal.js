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
                <div className="flex flex-col min-w-[725px] min-h-[400px] gap-[10px]">
                  <button className="self-end text-[30px] text-gray-400">
                    <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
                  </button>
                  <div className="flex items-center justify-center ">
                    <form className="flex flex-col items-center justify-center  gap-[30px]">
                      <div className="text-[60px] text-[#224957]">Sign up</div>
                      <div className="flex w-96 gap-3 justify-center">
                        <input
                          className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                          placeholder="First name"
                          type="text"
                        />
                        <input
                          className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                          placeholder="Last name"
                          type="text"
                        />
                      </div>
                      <input
                        className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                        placeholder="Email"
                        type="text"
                      />
                      <input
                        className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                        placeholder="Phone number"
                        type="text"
                      />
                      <input
                        className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                        placeholder="Nationality"
                        type="text"
                      />
                      <div className="flex w-96 gap-4 justify-center">
                        <input
                          className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                          type="date"
                        />
                        <select
                          className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
                          placeholder="Gender"
                          type="dropdown"
                        >
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="NOT_SPECIFIC">Not specific</option>
                        </select>
                      </div>
                    </form>
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
