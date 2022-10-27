import { Link } from "react-router-dom";

function OrderItem() {
  return (
    <div className="flex flex-col gap-[20px] w-[100vw] px-60">
      <div className="flex justify-between pt-[20px]">
        <Link
          to="/adminUser"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          User
        </Link>
        <Link
          to="/adminProviderUser"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          Provider User
        </Link>
        <Link
          to="/adminUserDetails"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          User Details
        </Link>
        <Link
          to="/adminTransaction"
          className="cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
        >
          Transaction
        </Link>
        <Link
          to="/adminOrderItem"
          className="cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white font-medium rounded-[15px] min-w-[190px] h-[50px]"
        >
          Order Item
        </Link>
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
          <option value="pending">All status</option>
          <option value="pending">Pending Confirmation</option>
          <option value="pending">Upcomming</option>
          <option value="success">Success</option>
          <option value="success">Denied</option>
        </select>
      </div>

      <div className="text-[#C4C4C4]">Recents :</div>
      <div className="flex flex-row justify-center items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <div className="flex flex-row gap-20 h-[100%] text-[#224957] ml-96 ">
            <div className="flex flex-col justify-between w-[100px] font-medium gap-5">
              <div>Customer:</div>
              <div>Provider:</div>
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium gap-5">
              <div>wowwww@gmail.com</div>
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
              <div>Siam Paragon </div>
              <div>10,000 THB </div>
            </div>
          </div>
          <div className="self-end ">
            <div className="text-[#224957] justify-center items-center p-3 border-2 border-[#E6C3C1] rounded-[20px] ">
              Pending Confirmation
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <div className="flex flex-row gap-20 h-[100%] text-[#224957] ml-96 ">
            <div className="flex flex-col justify-between w-[100px] font-medium gap-5">
              <div>Customer:</div>
              <div>Provider:</div>
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium gap-5">
              <div>wowwww@gmail.com</div>
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
              <div>Siam Paragon </div>
              <div>10,000 THB </div>
            </div>
          </div>
          <div className="self-end ">
            <div className="text-[#224957] justify-center items-center p-3 border-2 border-[#9AC0B5] rounded-[20px]">
              Upcomming
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <div className="flex flex-row gap-20 h-[100%] text-[#224957] ml-96">
            <div className="flex flex-col justify-between w-[100px] font-medium gap-5">
              <div>Customer:</div>
              <div>Provider:</div>
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium gap-5">
              <div>wowwww@gmail.com</div>
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
              <div>Siam Paragon </div>
              <div>10,000 THB </div>
            </div>
          </div>
          <div className="self-end ">
            <div className="justify-center items-center p-3 rounded-[20px] bg-[#9AC0B5] text-[#224957]">
              Success
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
        <div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
          <div className="flex flex-row gap-20 h-[100%] text-[#224957] ml-96 ">
            <div className="flex flex-col justify-between w-[100px] font-medium gap-5">
              <div>Customer:</div>
              <div>Provider:</div>
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between w-[325px] font-medium gap-5">
              <div>wowwww@gmail.com</div>
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
              <div>Siam Paragon </div>
              <div>10,000 THB </div>
            </div>
          </div>
          <div className="self-end ">
            <div className="justify-center items-center p-3 rounded-[20px] bg-[#E6C3C1] text-[#224957] ">
              Denied
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
