import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useReducer } from "react";
import ProfileImg from "./ProfileImg";
import { useAuth } from "../../context/AuthContext";
import ModalWallet from "../modals/ModalWallet";
import { useState } from "react";
import ModalAvailable from "../modals/ModalAvailable";
import { Link, useLocation } from "react-router-dom";

function Bio({ input, handleChangeInput, setInput, profiles }) {
  const { pathname } = useLocation();
  const { user, toggleEditing, isEditing } = useAuth();
  // console.log("profiles[0]", profiles[0]?.id);
  //   console.log(user?.wallet);
  // useEffect(() => {
  //   setInput((p) => {
  //     return {
  //       penName: user?.penName || user?.firstName,
  //       description: user?.description,
  //       rate: user?.rate,
  //     };
  //   });
  // }, [user]);

  const [isOpenModalWallet, setIsOpenModalWallet] = useState(false);
  const [isOpenModalAvailable, setIsOpenModalAvailable] = useState(false);

  const [score, setScore] = useState(5);
  console.log(score);
  const full = useMemo(() => 18.3 * score + "px", [score]);
  console.log(full);
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
          <div className="flex w-1/4 justify-between">
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
            <div className="text-[#E6C3C1] font-semibold">{score}</div>
          </div>

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
              {pathname !== `/profile/${user?.id}`
                ? user?.description
                : user?.id !== profiles[0]?.id
                ? profiles[0]?.description
                : user?.description}
            </div>
          )}

          {isEditing ? (
            <div className="flex justify-center items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
              rate:
              <input
                className="w-14 text-center "
                type="text"
                // placeholder={user?.rate}
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
              <div>5000 Bath</div>
              <Link className="flex justify-around items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
                Book now
              </Link>
            </>
          ) : (
            <div className="flex justify-around items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
              rate:
              <div className="text-center">{user?.rate}</div>
              THB/hr
            </div>
          )}
          <div className="flex flex-row gap-[20px]">
            {/* {user.id == profiles[0].id && ( */}
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

            <div
              onClick={openModalAvailable}
              className={`flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] ${
                Boolean(pathname !== `/profile/${user.id}`) && "invisible"
              }`}
            >
              Availability
            </div>
            <div
              className={`flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] ${
                Boolean(pathname !== `/profile/${user.id}`) && "invisible"
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
    </div>
  );
}

export default Bio;
