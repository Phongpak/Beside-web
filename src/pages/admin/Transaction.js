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
          <option value="pending">Pending</option>
          <option value="success">Success</option>
        </select>
      </div>
      <div className="flex flex-row gap-[10px]">
        <div className="cursor-pointer flex flex-row justify-center items-center bg-[#98ADC0] text-white text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#98ADC0]">
          Topup
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] text-[14px] font-medium border-2 border-[#9AC0B5] rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0">
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
