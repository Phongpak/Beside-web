import React from "react";

function TabBar() {
  return (
    <div className="flex justify-between py-[20px]">
      <div className="cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white font-medium rounded-[15px] w-[190px] h-[50px]">
        Info
      </div>
      <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
        Pending Confirmation
      </div>
      <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
        Upcoming
      </div>
      <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
        Completed
      </div>
      <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
        Wallet History
      </div>
    </div>
  );
}

export default TabBar;
