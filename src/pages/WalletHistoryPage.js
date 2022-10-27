import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faSackDollar } from "@fortawesome/free-solid-svg-icons";

function WalletHistory() {
  return (
    <div className="flex flex-col gap-[20px] w-[100vw] px-60">
      <div className="flex justify-between pt-[20px]">
        <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
          Info
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
          Pending Confirmation
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
          Upcoming
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0">
          Completed
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white font-medium rounded-[15px] min-w-[190px] h-[50px]">
          Wallet History
        </div>
      </div>
      <div className="flex flex-row gap-[10px]">
        <input
          className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
          placeholder="Search here..."
        />
        <select
          className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
          name="status"
        >
          <option value="success">Success</option>
          <option value="pending">Pending</option>
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
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#98ADC0] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#98ADC0] ml-[63px]"
            icon={faWallet}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Top up</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-[#98ADC0] rounded-[15px]">
            Success
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#98ADC0] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#98ADC0] ml-[63px]"
            icon={faWallet}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Top up</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-[#C4C4C4] rounded-[15px]">
            Pending
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#9AC0B5] ml-[63px]"
            icon={faSackDollar}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Withdraw</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-[#9AC0B5] rounded-[15px]">
            Success
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <FontAwesomeIcon
            className="text-[75px] text-[#9AC0B5] ml-[63px]"
            icon={faSackDollar}
          />
          <div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
            <div className="flex flex-col justify-between w-[100px] font-medium">
              <div>Date:</div>
              <div>Time:</div>
              <div>Type:</div>
              <div>Amount:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium">
              <div>Monday 10 September 2022</div>
              <div>10:00 - 18:00</div>
              <div>Withdraw</div>
              <div>2,000 THB</div>
            </div>
          </div>
          <div className="flex justify-center items-center self-end font-medium text-[#224957] text-[14px] w-[80px] h-[40px] bg-[#C4C4C4] rounded-[15px]">
            Pending
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletHistory;
