import ProviderUserModal from "../../pages/admin/UserProviderModal";

import { useState } from "react";

function UserProviderCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex  justify-start p-2  w-fit border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-col gap-5 justify-between items-center  ">
          <div className="flex flex-row gap-5  text-[#224957] mx-auto ">
            <div className="flex flex-col justify-between  font-medium">
              <div>First name:</div>
              <div>Last name:</div>
              <div>Email:</div>
              <div>Date:</div>
              <div>Time:</div>
            </div>
            <div className="flex flex-col justify-between ">
              <div>wowwww</div>
              <div>@gmail.com</div>
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[20px] self-end ">
            <button
              onClick={openModal}
              className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
            >
              Verification
            </button>
          </div>
        </div>
      </div>
      <ProviderUserModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default UserProviderCard;
