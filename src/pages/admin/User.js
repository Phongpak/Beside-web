import { useState } from "react";
import { Link } from "react-router-dom";
import UserModal from "./UserModal";

function User() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-[20px] w-[100vw] px-60">
      <div className="flex justify-between pt-[20px]">
        <Link
          to="/adminUser"
          className="cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white font-medium rounded-[15px] min-w-[190px] h-[50px]"
        >
          User
        </Link>
        <Link
          to="/adminProviderUser"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          Provider User
        </Link>
        <Link
          to="/adminUserDetails"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          User Details
        </Link>
        <Link
          to="/adminTransaction"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          Transaction
        </Link>
        <Link
          to="/adminOrderItem"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          Order Item
        </Link>
      </div>
      <div className="flex flex-row gap-[10px]">
        <input
          className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
          placeholder="Search here..."
        />
        <select
          className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
          name="status"
        >
          <option value="pending">All status</option>
          <option value="pending">Pending</option>
          <option value="success">Accepted</option>
          <option value="success">Denied</option>
        </select>
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957] mx-auto ">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Email:</div>
              <div>Date:</div>
              <div>Time:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[20px] self-end ">
            <p
              className="flex flex-row justify-center items-center w-[100px] h-[40px] text-[#224957] hover:text-[#9AC0B5] transition delay-20 hover:border-0"
              onClick={openModal}
            >
              See More
            </p>
            <button className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0">
              ACCEPT
            </button>
            <button className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#E6C3C1] rounded-[20px] hover:bg-[#E6C3C1] hover:text-white transition delay-20 hover:border-0">
              DENY
            </button>
          </div>
        </div>
      </div>
      <UserModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default User;
