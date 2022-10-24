import { useState } from "react";
import AdminTabBar from "../../components/AdminTabBar";
import AllUserDetail from "../../components/allUser/AllUserDetail";

function UserDetails() {
  return (
    <div className="flex flex-col gap-[20px] w-[100vw] px-60">
      <AdminTabBar />
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
          <option value="pending">Available</option>
          <option value="success">Banned</option>
        </select>
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>

      <AllUserDetail />
      <AllUserDetail />
      <AllUserDetail />
      <AllUserDetail />
    </div>
  );
}

export default UserDetails;
