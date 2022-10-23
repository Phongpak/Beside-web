import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminTabBar() {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between pt-[20px]">
      <Link
        to="/adminUser"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/adminUser") ? "bg-white" : "bg-[#506369]"
        } ${
          Boolean(pathname === "/adminUser") ? "text-white" : "text-[#224957]"
        } ${
          Boolean(pathname === "/adminUser") ? "border-0" : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        User
      </Link>
      <Link
        to="/adminProviderUser"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/adminProviderUser")
            ? "bg-white"
            : "bg-[#506369]"
        } ${
          Boolean(pathname === "/adminProviderUser")
            ? "text-white"
            : "text-[#224957]"
        } ${
          Boolean(pathname === "/adminProviderUser")
            ? "border-0"
            : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Provider User
      </Link>
      <Link
        to="/adminUserDetails"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/adminUserDetails")
            ? "bg-white"
            : "bg-[#506369]"
        } ${
          Boolean(pathname === "/adminUserDetails")
            ? "text-white"
            : "text-[#224957]"
        } ${
          Boolean(pathname === "/adminUserDetails")
            ? "border-0"
            : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        User Details
      </Link>
      <Link
        to="/adminTransaction"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/adminTransaction")
            ? "bg-white"
            : "bg-[#506369]"
        } ${
          Boolean(pathname === "/adminTransaction")
            ? "text-white"
            : "text-[#224957]"
        } ${
          Boolean(pathname === "/adminTransaction")
            ? "border-0"
            : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Transaction
      </Link>
      <Link
        to="/adminOrderItem"
        className={`cursor-pointer flex flex-row justify-center items-center  text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] ${
          Boolean(pathname !== "/adminOrderItem") ? "bg-white" : "bg-[#506369]"
        } ${
          Boolean(pathname === "/adminOrderItem")
            ? "text-white"
            : "text-[#224957]"
        } ${
          Boolean(pathname === "/adminOrderItem")
            ? "border-0"
            : "text-[#224957]"
        } hover:text-white transition delay-20 hover:border-0`}
      >
        Order Item
      </Link>
    </div>
  );
}

export default AdminTabBar;
