import React from "react";
import moment from "moment";
import proPic from "../../image/profileImg.png";

function OrderItemCard({ item }) {
	return (
		<>
			<div className="flex flex-row justify-between items-center min-w-[1056px]  border-4 border-[#9AC0B5] rounded-[15px] p-5">
				<div className="w-[300px] h-60 flex justify-center items-center gap-[20px]">
					<div className="flex flex-col items-center gap-2">
						<div>Customer</div>
						<div className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden">
							<img
								className="h-full"
								src={
									item.customer.ProfileImages.find(
										(item) => item.isShow === true
									)?.Image ||
									item.customer?.ProfileImages[0] ||
									proPic
								}
							/>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<div>Provider</div>
						<div className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden">
							<img
								className="h-full"
								src={
									item.provider.ProfileImages?.find(
										(item) => item.isShow === true
									)?.Image ||
									item.provider?.ProfileImages[0] ||
									proPic
								}
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="flex flex-row h-[100%] text-[#224957] ">
						<div className="flex flex-col font-medium gap-5 w-[100px]">
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
						<div className="flex self-end gap-5 w-[200px] justify-end">
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
		</>
	);
}

export default OrderItemCard;
