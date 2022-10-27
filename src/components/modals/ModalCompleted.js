import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ModalCompleted({ isOpen, closeModal }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [review, setReview] = useState(0);
  const stars = [0, 0, 0, 0, 0];

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

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
              <div className="border-4 border-[#9AC0B5] rounded-[30px] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col items-center min-w-[725px] min-h-[475px] gap-[18px]">
                  <button className="self-end text-[30px] text-gray-400 absolute">
                    <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
                  </button>
                  <div className="flex justify-center items-center border w-[120px] h-[120px] rounded-[100%] overflow-hidden mt-[20px]">
                    <img
                      className="h-full"
                      src={
                        "https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a"
                      }
                    />
                  </div>
                  <div className="text-[#224957] text-[20px] font-medium">
                    Let's rate your provider's service
                  </div>
                  <textarea
                    className="border-2 border-[#9AC0B5] rounded-[20px] w-[500px] h-[150px] resize-none p-[10px]"
                    type="text"
                  />
                  <div className="flex flex-row justify-center items-center gap-[5px]">
                    {stars.map((item, index) => (
                      <FontAwesomeIcon
                        onClick={() => {
                          const score = index + 1;
                          console.log(score);
                          setReview(score);

                          handleClick(index + 1);
                        }}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        className={`cursor-pointer text-[30px] text-${
                          (hoverValue || currentValue) > index
                            ? "[#9AC0B5]"
                            : "[#D9D9D9]"
                        }`}
                        icon={faStar}
                        key={index}
                      />
                    ))}
                  </div>
                  <button className="flex justify-center items-center font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
                    Submit
                  </button>
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

export default ModalCompleted;
