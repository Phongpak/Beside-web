import React from "react";
import { useState } from "react";
import UserModal from "../../pages/admin/UserModal";
import * as adminService from "../../api/adminApi";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

function UserCard({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const accept = async (id) => {
    await adminService.updateUser(id, { isVerify: true });
    window.location.reload();
    closeModal();
  };
  const deny = async (id) => {
    await adminService.deleteUser(id);
    window.location.reload();
    closeModal();
  };
  return (
    <div className="flex  justify-start p-2  w-fit border-4 border-[#9AC0B5] rounded-[15px]">
      <div className="flex flex-col gap-5 justify-between items-center  ">
        <div className="flex flex-row gap-5  text-[#224957] mx-auto ">
          <div className="flex flex-col justify-between  font-medium">
            <div>First name:</div>
            <div>Last name:</div>
            <div>Birth date:</div>
            <div>Date:</div>
            <div>Time:</div>
          </div>
          <div className="flex flex-col justify-between ">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{moment(user.birthDate).format("DD-MM-YYYY")}</div>
            <div>{moment(user.createdAt).format("DD-MM-YYYY")}</div>
            <div>{moment(user.createdAt).format("hh:mm:ss")}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[20px] self-end ">
          <button
            className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
            onClick={openModal}
          >
            Verification
          </button>
        </div>
      </div>
      <UserModal
        isOpen={isOpen}
        closeModal={closeModal}
        user={user}
        accept={accept}
        deny={deny}
      />
    </div>
  );
}

export default UserCard;
