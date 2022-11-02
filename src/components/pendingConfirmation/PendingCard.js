import React, { useState } from "react";
import ModalPending from "../../components/modals/ModalPending";
import moment from "moment";
import { useAuth } from "../../context/AuthContext";
import proPic from "../../image/profileImg.png";
import { Link } from "react-router-dom";

function PendingCard({ item }) {
	const [isOpen, setIsOpen] = useState(false);
	// console.log(item);

	const { user } = useAuth();

	const [seeUser, setSeeUser] = useState(
		item.customer.id == user.id ? item.provider : item.customer
	);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	// console.log(item);
	// console.log(seeUser);
	return (
		<>
			<div
				className={`flex flex-row justify-center items-center min-w-[1056px] h-[170px] border-4 border-${
					item.customerId === user.id ? "[#9AC0B5]" : "[#E8D3D0]"
				} rounded-[15px]`}
			>
				<div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
					<div className="flex flex-col justify-center items-center ml-[40px] w-[110px]">
						<div className="font-medium text-[#224957]">
							{item.customerId === user.id ? "Your Provider" : " Your Customer"}
						</div>
						<Link
							className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden"
							to={`/profile/${seeUser.id}`}
						>
							<img
								className="h-full"
								src={
									seeUser?.ProfileImages.filter(
										(item) => item.isShow === true
									)[0]?.Image ||
									seeUser?.ProfileImages[0]?.Image ||
									proPic
								}
							/>
						</Link>
						<Link
							className="font-semibold text-[#224957]"
							to={`/profile/${seeUser.id}`}
						>
							{seeUser.penName}
						</Link>
					</div>
					<div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
						<div className="flex flex-col justify-between w-[100px] font-medium">
							<div>Date:</div>
							<div>Time:</div>
							<div>Location:</div>
							<div>Deal Price:</div>
						</div>
						<div className="flex flex-col justify-between w-[325px] font-medium">
							<div>
								{moment(item.appointmentDate).format("dddd, MMMM Do YYYY")}
							</div>
							<div>
								{item.fromTime.slice(0, 5)} - {item.toTime.slice(0, 5)}
							</div>
							<div>{item.location}</div>
							<div>
								{item.rentPriceTotal}
								{""}THB
							</div>
						</div>
					</div>
					<div className="flex justify-end self-end w-[280px]">
						<button
							onClick={openModal}
							className={`flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 ${
								seeUser.id === item.providerId
									? "border-[#9AC0B5]"
									: "border-[#E8D3D0]"
							} rounded-[15px]  ${
								seeUser.id === item.providerId
									? "hover:bg-[#9AC0B5]"
									: "hover:bg-[#E8D3D0]"
							} hover:text-white transition delay-20 hover:border-0`}
						>
							See more details
						</button>
					</div>
				</div>
			</div>
			<ModalPending
				isOpen={isOpen}
				closeModal={closeModal}
				item={item}
				seeUser={seeUser}
			/>
		</>
	);
}

export default PendingCard;
