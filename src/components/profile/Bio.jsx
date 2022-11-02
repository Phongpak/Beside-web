import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useReducer } from "react";
import ProfileImg from "./ProfileImg";
import { useAuth } from "../../context/AuthContext";
import ModalWallet from "../modals/ModalWallet";
import { useState } from "react";
import ModalAvailable from "../modals/ModalAvailable";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import ModalProviderRequest from "../modals/ModalProviderRequest";
import { useOrder } from "../../context/OrderContext";
import { useLoading } from "../../context/LoadingContext";

function Bio({
  input,
  handleChangeInput,
  setInput,
  profiles,
  myOrder,
  AllOrder,
  totalPrice,
}) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { book, providers, createOrder } = useOrder();
  const { user, toggleEditing, isEditing } = useAuth();
  console.log("book", book);
  const [order, setOrder] = useState({
    appointmentDate: book?.appointmentDate,
    fromTime: book?.fromTime,
    toTime: book?.toTime,
    rentPriceTotal: totalPrice,
    description: book?.description,
    lat: book?.lat,
    lng: book?.lng,
    location: book?.location,

    customerId: user?.id,
    providerId: id,
  });

  const navigate = useNavigate();
  const [isOpenModalWallet, setIsOpenModalWallet] = useState(false);
  const [isOpenModalAvailable, setIsOpenModalAvailable] = useState(false);
  const [isOpenProviderRequest, setIsOpenProviderRequest] = useState(false);
  const { startLoading, stopLoading } = useLoading();
  const openModalWallet = () => {
    setIsOpenModalWallet(true);
  };

  const closeModalWallet = () => {
    setIsOpenModalWallet(false);
  };

  const openModalAvailable = () => {
    setIsOpenModalAvailable(true);
  };

  const closeModalAvailable = () => {
    setIsOpenModalAvailable(false);
  };

  const arrRating = AllOrder?.filter((item) => item.status == "SUCCESS").map(
    (item) => {
      return item.providerReviewRating;
    }
  );

  const sumRating = arrRating?.reduce((acc, item) => acc + item, 0);
  const avgRating = (sumRating / arrRating?.length).toFixed(1);

  // console.log("avgRating", avgRating);
  const full = useMemo(() => 18.3 * avgRating + "px", [avgRating]);

  const openModalProviderRequest = () => {
    setIsOpenProviderRequest(true);
  };

  const closeModalProviderRequest = () => {
    setIsOpenProviderRequest(false);
  };

  const handleClickCreateOrder = async () => {
    try {
      await createOrder(order);
      startLoading();
      window.location.assign("/pending");
    } catch (err) {
      console.log("err", err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="flex items-center bg-[#F4F2F2]  h-[300px] px-60">
      <div className="flex items-center justify-between h-[250px] ">
        <ProfileImg input={input} profiles={profiles} />

        <div className="flex flex-col justify-center w-[500px] gap-[10px]">
          <div>
            {isEditing ? (
              <input
                className="text-[30px] font-bold border-2 border-[#809590] rounded-xl"
                type="text"
                // placeholder={user?.penName}
                name="penName"
                value={input?.penName}
                onChange={handleChangeInput}
              />
            ) : (
              <div className="text-[30px] text-[#224957] font-bold ">
                {pathname === `/profile/${user?.id}`
                  ? user?.penName || user?.firstName
                  : profiles
                  ? profiles[0]?.penName || profiles[0]?.firstName
                  : user?.penName || user?.firstName}
              </div>
            )}
            <p className="text-[#818182]">Active 6 minutes ago</p>
          </div>

          {avgRating && avgRating > 0 ? (
            <div className="flex w-1/4  h-6 justify-between">
              <div
                className={`flex flex-row overflow-hidden  `}
                style={{ width: full }}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#E6C3C1]"
                ></FontAwesomeIcon>

                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#E6C3C1]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#E6C3C1]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#E6C3C1]"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[#E6C3C1]  "
                ></FontAwesomeIcon>
              </div>
              <div className="text-[#E6C3C1] font-semibold">{avgRating}</div>
            </div>
          ) : pathname == `/profile/${id}` ? (
            <div className="flex w-1/4 text-[#E6C3C1]  h-6 justify-between">
              No review
            </div>
          ) : (
            <div className="flex text-[#E6C3C1]  h-6 justify-between">
              {" "}
              see review in profile page{" "}
            </div>
          )}

          {isEditing ? (
            <input
              className="text-lg text-[#224957] rounded-xl break-words border-2 border-[#809590] "
              type="text"
              // placeholder={user?.description}
              name="description"
              value={input?.description}
              onChange={handleChangeInput}
            />
          ) : (
            <div className="text-[#224957] break-words">
              {pathname === `/profile/${user?.id}`
                ? user?.description || "no description"
                : profiles
                ? profiles[0]?.description || "no description"
                : user?.description}
            </div>
          )}

          {isEditing ? (
            <div className="flex justify-center items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
              rate:
              <input
                className="w-14 text-center "
                type="text"
                name="rate"
                value={input?.rate}
                onChange={handleChangeInput}
              />
              THB/hr
            </div>
          ) : !profiles ? (
            <div className="flex justify-around items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
              rate:
              <div className="text-center">{user?.rate}</div>
              THB/hr
            </div>
          ) : user?.id !== profiles[0]?.id ? (
            <>
              <div className="">{totalPrice} Bath</div>
              <div
                onClick={handleClickCreateOrder}
                className="flex justify-around cursor-pointer items-center hover:border-none hover:bg-[#9AC0B5] hover:text-white text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]"
              >
                Book now
              </div>
            </>
          ) : (
            <div className="flex justify-around items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
              rate:
              <div className="text-center">{user?.rate}</div>
              THB/hr
            </div>
          )}
          <div className="flex flex-row gap-[20px]">
            {pathname == `/profile/${user?.id}` ? (
              <div
                onClick={openModalWallet}
                className="flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[180px] h-[60px]"
              >
                Wallet: {user?.wallet}
                THB
              </div>
            ) : (
              ""
            )}
            {/* )} */}

            {user.providerRequestStatus === "SUCCESS" ? (
              <div
                onClick={openModalAvailable}
                className={`flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] ${
                  Boolean(pathname !== `/profile/${user?.id}`) && "invisible"
                }`}
              >
                Availability
              </div>
            ) : (
              <div
                onClick={openModalProviderRequest}
                className={`flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] ${
                  Boolean(pathname !== `/profile/${user?.id}`) && "invisible"
                }`}
              >
                Be a Provider !
              </div>
            )}
            <div
              className={`flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] ${
                Boolean(pathname !== `/profile/${user?.id}`) && "invisible"
              }`}
              onClick={toggleEditing}
            >
              Edit profile
            </div>
          </div>
        </div>
      </div>
      <ModalWallet
        isOpenModalWallet={isOpenModalWallet}
        closeModalWallet={closeModalWallet}
      />
      <ModalAvailable
        isOpenModalAvailable={isOpenModalAvailable}
        closeModalAvailable={closeModalAvailable}
      />
      <ModalProviderRequest
        isOpenProviderRequest={isOpenProviderRequest}
        closeModalProviderRequest={closeModalProviderRequest}
      />
    </div>
  );
}

export default Bio;
