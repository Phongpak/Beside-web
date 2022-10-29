import { useEffect, useState } from "react";
import AdminTabBar from "../../components/AdminTabBar";
import TransactionCard from "../../components/transaction/TransactionCard";
import * as adminService from "../../api/adminApi";
import Loading from "../../context/Loading";

function Transaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [loadingg, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("TOPUP");
  useEffect(() => {
    const fetch = async () => {
      try {
        await adminService
          .getTransaction()
          .then((res) => setTransactions(res.data.transactions));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
    setLoading(false);
  }, []);

  // console.log(type);
  // const [input, setInput] = useState("");

  // const handleClick = async (input, id) => {
  //   try {
  //     await updateOrder({ status: input }, id);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openTopUp = () => {
    setType("TOPUP");
  };

  const openWithdraw = () => {
    setType("WITHDRAW");
  };
  if (loadingg) return <Loading />;
  return (
    <div className="flex flex-col gap-[20px] w-full px-60">
      <AdminTabBar />
      <div className="flex flex-row gap-[10px]">
        <input
          className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All status</option>
          <option value="PENDING">Pending</option>
          <option value="SUCCESS">Success</option>
        </select>
      </div>
      <div className="flex flex-row gap-[10px]">
        <div
          onClick={openTopUp}
          className={`cursor-pointer flex flex-row justify-center items-center ${
            type == "TOPUP"
              ? "bg-[#98ADC0] text-white border-0"
              : "bg-white text-[#224957]  border-2 border-[#98ADC0]"
          }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#98ADC0] hover:text-white transition delay-20 hover:border-0`}
        >
          Top up
        </div>
        <div
          onClick={openWithdraw}
          className={`cursor-pointer flex flex-row justify-center items-center ${
            type !== "TOPUP"
              ? "bg-[#506369] text-white border-0"
              : "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
          }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
        >
          Withdraw
        </div>
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>

      {transactions
        .filter((item) => {
          return item.status.includes(status) && item.task.includes(type);
        })
        .map((item, index) => (
          <TransactionCard key={index} transaction={item} />
        ))}
    </div>
  );
}

export default Transaction;
