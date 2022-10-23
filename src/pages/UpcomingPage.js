import { useState } from "react";
import Bio from "../components/profile/Bio";
import UpcomingCard from "../components/upcoming/UpcomingCard";
import UserTabBar from "../components/UserTabBar";

function Upcoming() {
  const [type, setType] = useState("provider");

  const openProvider = () => {
    setType("provider");
  };

  const openCustomer = () => {
    setType("customer");
  };
  return (
    <>
      <Bio />
      <div className="flex flex-col gap-[20px] w-[100vw] px-60">
        <UserTabBar />
        <input
          className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
          placeholder="Search here..."
        />
        <div className="flex flex-row gap-[10px]">
          <div
            onClick={openProvider}
            className={`cursor-pointer flex flex-row justify-center items-center ${
              type == "provider"
                ? "bg-[#506369] text-white border-0"
                : "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
          >
            Your Provider
          </div>
          <div
            onClick={openCustomer}
            className={`cursor-pointer flex flex-row justify-center items-center ${
              type !== "provider"
                ? "bg-[#506369] text-white border-0"
                : "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
          >
            Your Customer
          </div>
        </div>
        <div className="text-[#C4C4C4]">Recents :</div>
        <UpcomingCard />
        <UpcomingCard />
        <UpcomingCard />
      </div>
    </>
  );
}

export default Upcoming;
