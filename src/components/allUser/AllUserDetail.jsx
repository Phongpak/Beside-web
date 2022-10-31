import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as adminService from "../../api/adminApi";
import Loading from "../../context/Loading";
function AllUserDetail({ user }) {
  const [isBan, setIsBan] = useState(true);
  const [loadingg, setLoading] = useState(true);
  useEffect(() => {
    setIsBan(user.isBan ? true : false);
    setLoading(false);
  }, [user]);

  const send = async () => {
    await adminService.updateUser(user.id, { isBan: !isBan });
    window.location.reload();
  };

  if (loadingg) return <Loading />;
  return (
    <div
      className={`flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-${
        !isBan ? "[#9AC0B5]" : "[#E8D3D0]"
      } rounded-[15px]`}
    >
      <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
        <div className="flex flex-row justify-between w-1/2 gap-[20px] h-[100%] text-[#224957] mx-auto ">
          <div className="h-full ">
            <img
              src={
                user.ProfileImages[0]?.Image
                  ? user.ProfileImages[0]?.Image
                  : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
              }
              className="h-full"
            />
          </div>
          <div className="flex"></div>
          <div className="flex flex-col justify-between  font-medium">
            <div>First name:</div>
            <div>Last name:</div>
            <div>Email:</div>
          </div>
          <div className="flex flex-col justify-between  font-medium">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.email}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-[20px] self-end ">
          <Link
            to={`/profile/${user.id}`}
            className="flex flex-row justify-center items-center w-[100px] h-[40px] text-[#224957] hover:text-[#9AC0B5] transition delay-20 hover:border-0"
          >
            profile
          </Link>
          <button
            className={`justify-center items-center w-[100px] h-[40px] text-[#224957] border-2 border- rounded-[20px] hover:bg-${
              !isBan ? "[#9AC0B5]" : "[#E8D3D0]"
            } hover:text-white transition delay-20 hover:border-0 border-${
              !isBan ? "[#9AC0B5]" : "[#E8D3D0]"
            }`}
            onClick={send}
          >
            {`${!isBan ? "Ban" : "Banned"}`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllUserDetail;
