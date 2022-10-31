import React from "react";
import moment from "moment";

function OrderItemCard({ item }) {
  // console.log(item);
  return (
    <>
      <div className="flex flex-row justify-between items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
        {/* <div className="flex  items-center h-[85%] justify-between"> */}
        <div className=" border-4 border-[#9AC0B5]  w-60 h-60 justify-between "></div>

        <div>
          <div className="flex flex-row gap-20 h-[100%] text-[#224957] ">
            <div className="flex flex-col  font-medium gap-5 ">
              <div>Customer:</div>
              <div>Provider:</div>
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col   font-medium gap-5 w-96">
              <div>{item.customer.email}</div>
              <div>{item.provider.email}</div>
              <div>
                {" "}
                {moment(item.appointmentDate).format("dddd, MMMM Do YYYY")}
              </div>
              <div className="">
                {item.fromTime.slice(0, 5)} - {item.toTime.slice(0, 5)}
              </div>
              <div>{item.location} </div>
              <div>{item.rentPriceTotal} THB </div>
            </div>
            <div className="flex self-end gap-5 w-60 justify-end">
              {item.status === "PENDING" && (
                <div className="text-[#224957] justify-center items-center p-3 border-2 border-[#E6C3C1] rounded-[20px] ">
                  Pending Confirmation
                </div>
              )}

              {item.status === "REJECT" && (
                <div className="justify-center items-center p-3 rounded-[20px] bg-[#E6C3C1] text-[#224957] ">
                  Rejected
                </div>
              )}

              {item.status === "INPROGRESS" && (
                <div className="text-[#224957] justify-center items-center p-3 border-2 border-[#9AC0B5] rounded-[20px]">
                  Upcomming
                </div>
              )}

              {item.status === "SUCCESS" && (
                <div className="justify-center items-center p-3 rounded-[20px] bg-[#9AC0B5] text-[#224957]">
                  Success
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default OrderItemCard;
