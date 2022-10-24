import React from "react";

function OrderItemCard() {
  return (
    <>
      <div className="flex flex-row justify-center items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
        <div className="flex  items-center h-[85%]">
          <img
            className="w-1/3"
            src="https://owi.ucdavis.edu/sites/g/files/dgvnsk8926/files/styles/sf_landscape_16x9/public/media/images/google-maps-satellite.png?h=83823e20&itok=G9S9rzyI"
          />

          <div className="flex flex-row gap-20 h-[100%] text-[#224957] ml-40">
            <div className="flex flex-col justify-between  font-medium gap-5">
              <div>Customer:</div>
              <div>Provider:</div>
              <div>Date:</div>
              <div>Time:</div>
              <div>Location:</div>
              <div>Deal Price:</div>
            </div>
            <div className="flex flex-col justify-between  font-medium gap-5">
              <div>wowwww@gmail.com</div>
              <div>wowwww@gmail.com</div>
              <div>Monday 10 September 2022</div>
              <div>10:34 am. </div>
              <div>Siam Paragon </div>
              <div>10,000 THB </div>
            </div>
          </div>
          <div className=" ">
            <div className="text-[#224957] justify-center items-center p-3 border-2 border-[#E6C3C1] rounded-[20px] ">
              Pending Confirmation
            </div>
            <div className="justify-center items-center p-3 rounded-[20px] bg-[#E6C3C1] text-[#224957] ">
              Denied
            </div>
            <div className="text-[#224957] justify-center items-center p-3 border-2 border-[#9AC0B5] rounded-[20px]">
              Upcomming
            </div>
            <div className="justify-center items-center p-3 rounded-[20px] bg-[#9AC0B5] text-[#224957]">
              Success
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderItemCard;
