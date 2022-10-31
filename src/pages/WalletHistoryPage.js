import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faSackDollar
  // faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import UserTabBar from "../components/UserTabBar";
import Bio from "../components/profile/Bio";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import moment from "moment";

function WalletHistory() {
  const { getTransactionByUserId } = useAuth();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await getTransactionByUserId();
        setTransactions(res.data.transactions);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTransactions();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchType, setSearchType] = useState("");

  const changeSearchTerm = (text) => {
    setSearchTerm(text);
  };

  const changeSearchStatus = (status) => {
    setSearchStatus(status);
  };

  return (
    <>
      <Bio />
      <div className="flex flex-col gap-[20px] w-[100vw] px-60">
        <UserTabBar />
        <div className="flex flex-row gap-[10px]">
          <input
            className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) => {
              changeSearchTerm(event.target.value);
            }}
          />
          <select
            className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
            name="status"
            onChange={(event) => {
              changeSearchStatus(event.target.value);
            }}
          >
            <option value={""}>All status</option>
            <option value="SUCCESS">Success</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>
        <div className="flex flex-row gap-[10px]">
          <button
            onClick={(event) => setSearchType(event.target.value)}
            value=""
            type="button"
            className={`cursor-pointer flex flex-row justify-center items-center ${
              searchType === ""
                ? "bg-[#D4E4F4] text-white border-0"
                : "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#D4E4F4] hover:text-white transition delay-20 hover:border-0`}
          >
            All
          </button>
          <button
            onClick={(event) => {
              setSearchType(event.target.value);
            }}
            value="TOPUP"
            type="button"
            className={`cursor-pointer flex flex-row justify-center items-center ${
              searchType == "TOPUP"
                ? "bg-[#9AC0B5] text-white border-0"
                : "bg-white text-[#224957] border-2 border-[#9AC0B5]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0`}
          >
            Top up
          </button>
          <button
            onClick={(event) => {
              setSearchType(event.target.value);
            }}
            value="WITHDRAW"
            type="button"
            className={`cursor-pointer flex flex-row justify-center items-center ${
              searchType === "WITHDRAW"
                ? "bg-[#E8D3D0] text-white border-0"
                : "bg-white text-[#224957] border-2 border-[#E8D3D0]"
            }   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#E8D3D0] hover:text-white transition delay-20 hover:border-0`}
          >
            Withdraw
          </button>
        </div>
        <div className="text-[#C4C4C4]">Recents :</div>

        {transactions
          .filter((item) => {
            return (
              item.amount.toString().includes(searchTerm) &&
              item.status.toLowerCase().includes(searchStatus.toLowerCase()) &&
              item.task.includes(searchType)
            );
          })

          .map((item, index) =>
            item.task === "ORDER" ? (
              ""
            ) : (
              <div
                className={`flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-${
                  item.task === "TOPUP" ? "[#9AC0B5]" : "[#98ADC0]"
                } rounded-[15px]`}
                key={index}
              >
                <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
                  {item.task === "TOPUP" && (
                    <FontAwesomeIcon
                      className="text-[75px]  text-[#9AC0B5] ml-[63px]"
                      icon={faWallet}
                    />
                  )}

                  {item.task === "WITHDRAW" && (
                    <FontAwesomeIcon
                      className="text-[75px] text-[#98ADC0] ml-[63px]"
                      icon={faSackDollar}
                    />
                  )}

                  <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
                    <div className="flex flex-col justify-between w-[100px] font-medium">
                      <div>Date:</div>
                      <div>Time:</div>
                      <div>Type:</div>
                      <div>Amount:</div>
                    </div>
                    <div className="flex flex-col justify-between w-[325px] font-medium">
                      <div>
                        {moment(item.createdAt).format("dddd, MMMM Do YYYY")}
                      </div>
                      <div>
                        {moment(item.createdAt)
                          .subtract(7, "hours")
                          .format("HH:mm ")}
                      </div>
                      <div>{item.task}</div>
                      <div>{item.amount} THB</div>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-${
                      item.status === "SUCCESS" ? "[#9AC0B5]" : "[#98ADC0]"
                    } rounded-[15px]`}
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}

export default WalletHistory;
