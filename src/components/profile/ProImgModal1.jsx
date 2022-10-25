import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "../../image/profileImg.png";

function ProImgModal1({
  isOpen,
  closeModal,
  handleClickDeleteProPic,
  handleClickSaveProPic,
  inputEl,
  setFile,
  input,
  file
}) {
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
              <div className="border-4 border-[#9AC0B5]  rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col min-w-[725px] min-h-[400px] gap-[10px]">
                  <button className="self-end text-[30px] text-gray-400">
                    <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
                  </button>
                  <div className="flex flex-row justify-center items-center gap-[25px] ">
                    <div className="flex flex-col gap-[15px] min-w-[325px] min-h-[350px] pt-10">
                      <input
                        type="file"
                        className="d-none"
                        ref={inputEl}
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          console.log(555);
                          if (e.target.files[0]) {
                            console.log(e.target.files);
                            setFile(e.target.files[0]);
                          }
                        }}
                      />

                      <img
                        className="w-96 h-60"
                        src={
                          file
                            ? URL.createObjectURL(file)
                            : input.image || ProfileImg
                        }
                        alt="Img"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center gap-[20px]">
                    <button
                      className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
                      onClick={handleClickSaveProPic}
                    >
                      SAVE
                    </button>
                    <button
                      className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#E6C3C1] rounded-[20px] hover:bg-[#E6C3C1] hover:text-white transition delay-20 hover:border-0"
                      onClick={handleClickDeleteProPic}
                    >
                      DELETE
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

export default ProImgModal1;
