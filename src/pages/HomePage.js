import { Link } from "react-router-dom";
import bg from "../images/bg1.jpeg";
import clock from "../images/clock.jpeg";
import logo1 from "../images/logo1.png";
import map from "../images/thailand-map.png";
import jogging from "../images/jogging.avif";
import party from "../images/party.jpeg";
import teatime from "../images/Tea-Time.jpeg";
import dating from "../images/dating.webp";
import tutor from "../images/tutor.webp";
import diving from "../images/diving.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import DropdownNav from "../components/dropdownNav";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const ref = useRef(null);
  const { user } = useAuth();
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="px-40 py-2 flex w-full justify-between items-center absolute z-10  ">
        <img className="scale-75" src={logo1} alt="logo" />
        <div className=" w-1/2 justify-end  gap-6 flex flex-row">
          <a className="text-[#809490] font-bold lg:text-2xl text-xl hover:text-[#98ABA7] ">
            Home
          </a>
          <a
            onClick={handleClick}
            className="text-[#809490] font-bold lg:text-2xl text-xl hover:text-[#98ABA7] "
          >
            About us
          </a>
          <a className="text-[#809490] font-bold lg:text-2xl text-xl hover:text-[#98ABA7] ">
            How to booking
          </a>
          {!user ? (
            <Link
              to="/login"
              className="text-[#809490] font-bold lg:text-2xl text-xl hover:text-[#98ABA7]  "
            >
              Sign in
            </Link>
          ) : (
            <DropdownNav />
          )}
        </div>
      </div>
      <div className="relative">
        <img src={bg} />
        <h1 className="absolute text-[60px] text-[#224957] top-[200px] left-[380px] -translate-x-1/2 -translate-y-1/2">
          WELCOME TO
        </h1>

        <img
          className="scale-800 absolute top-[300px] left-[370px] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px]"
          src={logo1}
          alt="logo"
        />

        <p className="scale-800 absolute top-[400px] left-[490px] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] text-[30px]  text-[#224957] ">
          Book your company with the most reasonable rates here.
        </p>

        <div className="flex flex-col w-full h-96  top-[70%]  absolute items-center gap-9 ">
          <Link
            to="/booknow"
            className="bg-[#9AC0B5] h-fit w-fit text-[30px] rounded-[20px] text-white text-center  px-6 py-4 "
          >
            Book now
          </Link>
          <div className="flex flex-col cursor-pointer" onClick={handleClick}>
            <p className="  font-bold text-2xl  text-white">Scroll</p>
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              className=" text-4xl rounded-full w-16 h-16  text-white"
            />
          </div>
        </div>
      </div>
      <h1
        ref={ref}
        className="pt-[80px]  text-[#224957]  text-[40px] text-center"
      >
        It doesn't matter where you're going, it's who you have beside you.
      </h1>

      <div className="flex  space-x-[100px] pt-[80px] px-[180px]">
        <div className="pl-10 border-l-[7px] border-[#9AC0B5] ">
          <h1 className="text-[60px] text-[#9AC0B5] pt-[50px] pl-[50px]">
            About us
          </h1>
          <p className="w-[500px] pt-[40px] text-[25px] text-[#9AC0B5]">
            Beside.com has Friends from around Thailand available for hire. It's
            always good to have a local Friend no matter where you go. Are you
            moving to a new city, travel for work, or going on vacation? Hire a
            local Friend to show you around a new town! Learn the best places
            for shopping, eating, entertainment, hotels and more.
          </p>
        </div>
        <div>
          <img src={clock} className=" w-[700px] h-[400px] mt-[50px]" />
        </div>
      </div>
      <div>
        <h1 className="pt-[80px] text-center text-[40px]  text-[#224957] ">
          Example Activities
        </h1>
      </div>
      <div className="flex space-x-[100px] px-[180px] pt-[80px]">
        <div>
          <img src={jogging} className=" rounded-lg w-[500px] h-[200px]" />
          <p className="text-center  text-[#224957] text-[20px] mt-4 font-medium">
            Jogging
          </p>
        </div>
        <div>
          <img src={dating} className=" rounded-lg w-[500px] h-[200px]" />
          <p className="text-center  text-[#224957] text-[20px] mt-4 font-medium">
            Dating
          </p>
        </div>
        <div>
          <img src={teatime} className=" rounded-lg w-[500px] h-[200px]" />
          <p className="text-center  text-[#224957] text-[20px] mt-4 font-medium">
            Tea-time
          </p>
        </div>
      </div>

      <div className="flex space-x-[100px] px-[180px] pt-[80px] pb-[100px]">
        <div>
          <img src={party} className="  w-[500px] h-[200px]" />
          <p className="text-center  text-[#224957] text-[20px] mt-4 font-medium">
            Party
          </p>
        </div>
        <div>
          <img src={tutor} className="  w-[500px] h-[200px]" />
          <p className="text-center  text-[#224957] text-[20px] mt-4 font-medium">
            Tutor
          </p>
        </div>
        <div>
          <img src={diving} className="  w-[500px] h-[200px]" />
          <p className="text-center  text-[#224957] text-[20px] mt-4 font-medium">
            Diving
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
