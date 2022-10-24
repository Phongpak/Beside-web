// import { useState } from "react";
// import { Link } from "react-router-dom";
import AdminTabBar from "../../components/AdminTabBar";
import UserCard from "../../components/user/UserCard";

function User() {
  return (
    <div className="flex flex-col gap-[20px] w-[100vw] px-60">
      <AdminTabBar />
      <div className="flex flex-row gap-2">
        <input
          className="w-1/3 h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
          placeholder="Search here..."
        />
        {/* <select
          className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
          name="status"
        >
          <option value="pending">All status</option>
          <option value="pending">Pending</option>
          <option value="success">Accepted</option>
          <option value="success">Denied</option>
        </select> */}
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>
      <div className="flex flex-wrap gap-5">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default User;
