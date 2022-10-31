import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ModalCompleted from "../modals/ModalCompleted";
import { useAuth } from "../../context/AuthContext";
import proPic from "../../image/profileImg.png";
import moment from "moment";
import ReviewModal from "../modals/ReviewModal";
import YourreviewModal from "../modals/YourreviewModal";

function CompletedCard({ item }) {
  // console.log(item.customerReviewRating);
  // console.log(item.providerReviewRating);
  const { user } = useAuth();

  const [seeUser, setSeeUser] = useState(
    item.customer.id == user.id ? item.provider : item.customer
  );

  // console.log(seeUser);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [isOpenReview, setIsOpenReview] = useState(false);

  const openReviewModal = () => {
    setIsOpenReview(true);
  };

  const closeReviewModal = () => {
    setIsOpenReview(false);
  };
  const [isOpenYourReview, setIsOpenYourReview] = useState(false);

  const openYourReviewModal = () => {
    setIsOpenYourReview(true);
  };

  const closeYourReviewModal = () => {
    setIsOpenYourReview(false);
  };

  const star = [];
  for (let i = 1; i <= item.customerReviewRating; i++) {
    star.push(i);
  }
  const star2 = [];
  for (let i = 1; i <= item.providerReviewRating; i++) {
    star2.push(i);
  }

  return (
    <>
      <div
        className={`flex flex-row justify-center items-center min-w-[1056px] h-[170px] border-4 border-${
          item.customerId === user.id ? "[#9AC0B5]" : "[#E8D3D0]"
        } rounded-[15px]`}
      >
        <div className="flex flex-row items-center w-[95%] h-[85%]">
          <div className="flex flex-col justify-center items-center ml-[40px]">
            <div className="font-medium text-[#224957]">
              {item.customerId === user.id ? "Your Provider" : " Your Customer"}
            </div>
            <div className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden">
              <img
                className="h-full"
                src={seeUser?.ProfileImages[0]?.Image || proPic}
              />
            </div>
            <div className="font-semibold text-[#224957]">
              {seeUser.penName}
            </div>
          </div>
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957] ml-60">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium ml-32">
              <div>
                {moment(item.appointmentDate).format("dddd, MMMM Do YYYY")}
              </div>
              <div>
                {" "}
                {item.fromTime.slice(0, 5)} - {item.toTime.slice(0, 5)}
              </div>
              <div>{item.location}</div>
              <div>
                {item.rentPriceTotal} {""}THB
              </div>
            </div>
          </div>

          <div className="flex mt-28 gap-1">
            {user.id === item.customerId && item.providerReviewDescription && (
              <button
                onClick={openYourReviewModal}
                className="flex justify-center items-center  font-medium text-[#9AC0B5] hover:text-[#224957] transition delay-20 "
              >
                {/* {`  ${
                  item.customerId === user.id
                    ? "Your provider"
                    : " Your customer"
                }'s review`} */}
                See what you have reviewed
              </button>
            )}
            {user.id === item.providerId && item.customerReviewDescription && (
              <button
                onClick={openYourReviewModal}
                className="flex justify-center items-center  font-medium text-[#9AC0B5] hover:text-[#224957] transition delay-20 "
              >
                {/* {`  ${
                  item.customerId === user.id
                    ? "Your provider"
                    : " Your customer"
                }'s review`} */}
                See what you have reviewed
              </button>
            )}
            {user.id === item.providerId && !item.customerReviewDescription && (
              <button
                onClick={openModal}
                className="flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
              >
                Write review here
              </button>
            )}
            {user.id === item.customerId && !item.providerReviewDescription && (
              <button
                onClick={openModal}
                className="flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
              >
                Write review here
              </button>
            )}

            {item.status === "REJECT" && (
              <div className="flex justify-center items-center self-end font-medium text-[#E37383] w-[175px] h-[40px] border-2 border-[#E8D3D0] rounded-[15px]">
                Rejected
              </div>
            )}
            {/* <div onClick={openReviewModal}>
              {user.id === item.customerId && item.providerReviewDescription && (
                <div className="flex justify-end items-center self-end gap-[5px] font-medium text-[#9AC0B5] text-[20px] w-[175px]">
                  {star2.map(() => (
                    <FontAwesomeIcon icon={faStar} />
                  ))}
                </div>
              )}
            </div>

            <div onClick={openReviewModal}>
              {user.id === item.providerId && item.customerReviewDescription && (
                <div className="flex justify-end items-center self-end gap-[5px] font-medium text-[#9AC0B5] text-[20px] w-[175px]">
                  {star.map(() => (
                    <FontAwesomeIcon icon={faStar} />
                  ))}
                </div>
              )}
            </div> */}

            <div onClick={openReviewModal}>
              {seeUser.id === item.customerId &&
                item.providerReviewDescription && (
                  <div className="flex justify-end items-center self-end gap-[5px] font-medium text-[#E37383] text-[20px] w-[175px]">
                    {star2.map(() => (
                      <FontAwesomeIcon icon={faStar} />
                    ))}
                  </div>
                )}
            </div>

            <div onClick={openReviewModal}>
              {seeUser.id === item.providerId &&
                item.customerReviewDescription && (
                  <div className="flex justify-end items-center self-end gap-[5px] font-medium text-[#E37383] text-[20px] w-[175px]">
                    {star.map(() => (
                      <FontAwesomeIcon icon={faStar} />
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <ModalCompleted
        isOpen={isOpen}
        closeModal={closeModal}
        seeUser={seeUser}
        item={item}
      />
      <ReviewModal
        isOpenReview={isOpenReview}
        closeReviewModal={closeReviewModal}
        seeUser={seeUser}
        item={item}
      />
      <YourreviewModal
        isOpenYourReview={isOpenYourReview}
        closeYourReviewModal={closeYourReviewModal}
        seeUser={seeUser}
        item={item}
      />
    </>
  );
}

export default CompletedCard;
