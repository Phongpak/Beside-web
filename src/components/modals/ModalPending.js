import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import proPic from "../../image/profileImg.png";
import { useAuth } from "../../context/AuthContext";

function ModalPending({ isOpen, closeModal, item, seeUser }) {
  const { updateOrder, user } = useAuth();

  const orderImages = seeUser?.ProfileImages?.sort(
    (a, b) => b.isShow - a.isShow
  );

  const handleClick = async (input, id) => {
    try {
      await updateOrder({ status: input }, id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
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
              <div className="border-4 border-[#9AC0B5] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col min-w-[725px] min-h-[400px] gap-[10px]">
                  <button className="self-end text-[30px] text-gray-400">
                    <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
                  </button>
                  <div className="flex flex-row justify-center items-center gap-[25px]">
                    <div className="flex flex-col gap-[15px] w-[325px] min-h-[350px]">
                      <div className="text-[20px] text-[#224957] font-medium">
                        {seeUser.penName}
                      </div>

                      {seeUser?.ProfileImages.length ? (
                        <div className="my-[-70px] py-[-100px]">
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            pagination={true}
                            modules={[Pagination]}
                          >
                            {orderImages.map((item, index) => {
                              return (
                                <SwiperSlide className="my-20 flex" key={index}>
                                  <img
                                    src={item.Image}
                                    alt="..."
                                    className="h-60"
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                      ) : (
                        <>
                          <img src={proPic} className="w-80 h-60" />
                        </>
                      )}
                    </div>
                    <div className="flex flex-row justify-center w-[325px] min-h-[330px] self-start border-4 border-[#9AC0B5] rounded-[20px]">
                      <div className="flex flex-col w-[295px] h-[150px] pt-[10px] gap-[10px]">
                        <div className="flex flex-row gap-[20px] text-[#224957] text-[14px]">
                          <div className="flex flex-col justify-between w-[140px] gap-[10px] font-medium">
                            <div>Date:</div>
                            <div>Time:</div>
                            <div>Location:</div>
                            <div>Deal Price:</div>
                          </div>
                          <div className="flex flex-col justify-between w-[400px] gap-[10px] font-medium">
                            <div>
                              {" "}
                              {moment(item.appointmentDate).format(
                                "dddd, MMMM Do YYYY"
                              )}
                            </div>
                            <div>
                              {item.fromTime.slice(0, 5)} -{" "}
                              {item.toTime.slice(0, 5)}
                            </div>
                            <div>{item.location}</div>
                            <div>{item.rentPriceTotal} THB</div>
                          </div>
                        </div>
                        <div className="font-medium text-[#224957] text-[14px]">
                          Description:
                        </div>
                        <div className="font-medium text-[#224957] text-[14px] break-words">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center gap-[20px]">
                    <button
                      className={`flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0 ${
                        item.customerId === user.id && "invisible"
                      }`}
                      onClick={(e) => handleClick(e.target.value, item.id)}
                      name="status"
                      value="INPROGRESS"
                    >
                      ACCEPT
                    </button>
                    <button
                      className={`flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#E6C3C1] rounded-[15px] hover:bg-[#E6C3C1] hover:text-white transition delay-20 hover:border-0 ${
                        item.customerId === user.id && "invisible"
                      }`}
                      onClick={(e) => handleClick(e.target.value, item.id)}
                      name="status"
                      value="REJECT"
                    >
                      REJECT
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

export default ModalPending;
