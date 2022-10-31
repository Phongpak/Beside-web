import UserTabBar from "../components/UserTabBar";
import Bio from "../components/profile/Bio";
import CompletedCard from "../components/completed/CompletedCard";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Completed() {
  const { user, orders } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const changeSearchTerm = (text) => {
    setSearchTerm(text);
  };

  const [searchStatus, setSearchStatus] = useState("");

  const [searchUserType, setSearchUserType] = useState("");

  return (
    <>
      <Bio />
      <div className="flex flex-col gap-[20px] w-[100vw] px-60">
        <UserTabBar />
        <div className="flex flex-row gap-[10px]">
          <input
            className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
            placeholder="Search here..."
            onChange={(event) => {
              changeSearchTerm(event.target.value);
            }}
          />
          <select
            className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
            name="status"
            onChange={(event) => {
              setSearchStatus(event.target.value);
            }}
          >
            <option value={""}>All</option>
            <option value="completed">Completed</option>
            <option value="waiting-for-review">Waiting for review</option>
            <option value="REJECT">Rejected</option>
          </select>
        </div>
        <div className="flex flex-row gap-[10px]">
          <button
            onClick={(event) => setSearchUserType(event.target.value)}
            value=""
            type="button"
            className={`cursor-pointer flex flex-row justify-center items-center ${
              searchUserType === ""
                ? "bg-[#D4E4F4] text-white border-0"
                : "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#D4E4F4] hover:text-white transition delay-20 hover:border-0`}
          >
            All
          </button>
          <button
            onClick={(event) => {
              setSearchUserType(event.target.name);
            }}
            value="provider"
            name="provider"
            className={`cursor-pointer flex flex-row justify-center items-center ${
              searchUserType === "provider"
                ? "bg-[#9AC0B5] text-white border-0"
                : "bg-white text-[#224957] border-2 border-[#9AC0B5]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0`}
          >
            Your Provider
          </button>
          <button
            onClick={(event) => {
              setSearchUserType(event.target.name);
            }}
            value="customer"
            name="customer"
            className={`cursor-pointer flex flex-row justify-center items-center ${
              searchUserType === "customer"
                ? "bg-[#E8D3D0] text-white border-0"
                : "bg-white text-[#224957] border-2 border-[#E8D3D0]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#E8D3D0] hover:text-white transition delay-20 hover:border-0`}
          >
            Your Customer
          </button>
        </div>
        <div className="text-[#C4C4C4]">Recents :</div>

        {orders
          .filter((item) => {
            if (searchUserType === "") {
              return (
                (item.status === "SUCCESS" || item.status === "REJECT") &&
                item.rentPriceTotal.toString().includes(searchTerm) &&
                item.status.toLowerCase().includes(searchStatus.toLowerCase())
              );
            }
            if (searchUserType === "provider") {
              return (
                (item.status === "SUCCESS" || item.status === "REJECT") &&
                item.rentPriceTotal.toString().includes(searchTerm) &&
                item.status
                  .toLowerCase()
                  .includes(searchStatus.toLowerCase()) &&
                item.customerId === user.id
              );
            }
            if (searchUserType === "customer") {
              return (
                (item.status === "SUCCESS" || item.status === "REJECT") &&
                item.rentPriceTotal.toString().includes(searchTerm) &&
                item.status
                  .toLowerCase()
                  .includes(searchStatus.toLowerCase()) &&
                item.providerId === user.id
              );
            }
          })
          .map((item, index) => (
            <CompletedCard key={index} item={item} />
          ))}
      </div>
    </>
  );
}

export default Completed;
