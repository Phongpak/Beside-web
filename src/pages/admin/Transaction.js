import { useState } from "react";
import AdminTabBar from "../../components/AdminTabBar";
import TransactionCard from "../../components/transaction/TransactionCard";

function Transaction() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [type, setType] = useState("topUp");

  const openTopUp = () => {
    setType("topUp");
  };

  const openWithdraw = () => {
    setType("Withdraw");
  };
  return (
    <div className="flex flex-col gap-[20px] w-full px-60">
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
          <option value="pending">Pending</option>
          <option value="success">Success</option>
        </select>
      </div>
      <div className="flex flex-row gap-[10px]">
        <div
          onClick={openTopUp}
          className={`cursor-pointer flex flex-row justify-center items-center ${
            type == "topUp"
              ? "bg-[#98ADC0] text-white border-0"
              : "bg-white text-[#224957]  border-2 border-[#98ADC0]"
          }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#98ADC0] hover:text-white transition delay-20 hover:border-0`}
        >
          Top up
        </div>
        <div
          onClick={openWithdraw}
          className={`cursor-pointer flex flex-row justify-center items-center ${
            type !== "topUp"
              ? "bg-[#506369] text-white border-0"
              : "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
          }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
        >
          Withdraw
        </div>
      </div>
      <div className="text-[#C4C4C4]">Recents :</div>
      <TransactionCard />
      <TransactionCard />
    </div>
  );
}

export default Transaction;
