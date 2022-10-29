import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function UserTabBar() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  // console.log(pathname);
  return (
    <div className="flex justify-between pt-[20px]">
      <Link
        to={`/profile/${user?.id}`}
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          pathname !== `/profile/${user?.id}` ? "bg-white" : "bg-[#506369]"
        } ${
          pathname === `/profile/${user?.id}` ? "text-white" : "text-[#224957]"
        } ${
          pathname === `/profile/${user?.id}` ? "border-0" : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Info
      </Link>
      <Link
        to="/pending"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/pending") ? "bg-white" : "bg-[#506369]"
        } ${
          Boolean(pathname === "/pending") ? "text-white" : "text-[#224957]"
        } ${
          Boolean(pathname === "/pending") ? "border-0" : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Pending Confirmation
      </Link>
      <Link
        to="/upcoming"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/upcoming") ? "bg-white" : "bg-[#506369]"
        } ${
          Boolean(pathname === "/upcoming") ? "text-white" : "text-[#224957]"
        } ${
          Boolean(pathname === "/upcoming") ? "border-0" : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Upcoming
      </Link>
      <Link
        to="/completed"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/completed") ? "bg-white" : "bg-[#506369]"
        } ${
          Boolean(pathname === "/completed") ? "text-white" : "text-[#224957]"
        } ${
          Boolean(pathname === "/completed") ? "border-0" : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Completed
      </Link>
      <Link
        to="/wallethistory"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/wallethistory") ? "bg-white" : "bg-[#506369]"
        } ${
          Boolean(pathname === "/wallethistory")
            ? "text-white"
            : "text-[#224957]"
        } ${
          Boolean(pathname === "/wallethistory") ? "border-0" : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Wallet History
      </Link>
    </div>
  );
}

export default UserTabBar;
