import React from "react";
import { Link } from "react-router-dom";
import DropdownNav from "../../components/dropdownNav";
import { useAuth } from "../../context/AuthContext";
import logo1 from "../../image/logo1.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const { user } = useAuth();
  return (
    <div className="lg:px-40 px-10 py-2 flex w-full justify-between items-center bg-[#506369]  ">
      <img
        className="lg:scale-75 sm:scale-25 scale-50 "
        src={logo1}
        alt="logo"
      />
      <div className=" w-3/5 gap-10 lg:flex items-center hidden justify-end">
        <Link
          to="/"
          className="text-[#D9D9D9] font-bold lg:text-xl  hover:underline hover:underline-offset-2 text-sm  hover:text-white "
        >
          Home
        </Link>
        <Link className="text-[#D9D9D9] font-bold lg:text-xl hover:underline hover:underline-offset-2 text-sm hover:text-white ">
          About us
        </Link>
        <Link className="text-[#D9D9D9] font-bold lg:text-xl hover:underline hover:underline-offset-2 text-sm hover:text-white ">
          How to booking
        </Link>
        {!user ? (
          <Link
            to="/login"
            className="text-[#D9D9D9] hover:text-[#506369] font-bold border lg:text-xl rounded-md   text-sm hover:bg-white p-2 "
          >
            Sign in
          </Link>
        ) : (
          <DropdownNav />
        )}
      </div>
      <div className="scale-125 lg:hidden flex border p-2 rounded hover:bg-white ">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Header;
