import { useState } from "react";
import Bio from "../components/profile/Bio";
import UpcomingCard from "../components/upcoming/UpcomingCard";
import UserTabBar from "../components/UserTabBar";
import { useAuth } from "../context/AuthContext";

function Upcoming() {
	const [type, setType] = useState("all");
	const { user, orders } = useAuth();
	const [searchTerm, setSearchTerm] = useState("");
	const changeSearchTerm = (text) => {
		setSearchTerm(text);
	};

	const openAll = () => {
		setType("all");
	};

	const openProvider = () => {
		setType("provider");
	};

	const openCustomer = () => {
		setType("customer");
	};
	return (
		<>
			<Bio />
			<div className="flex flex-col gap-[20px] w-[100%] px-60 pb-[20px]">
				<UserTabBar />
				<input
					className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
					placeholder="Search here..."
					onChange={(event) => {
						changeSearchTerm(event.target.value);
					}}
				/>
				<div className="flex flex-row gap-[10px]">
					<div
						onClick={openAll}
						className={`cursor-pointer flex flex-row justify-center items-center ${
							type === "all"
								? "bg-[#D4E4F4] text-white border-0"
								: "bg-white text-[#224957] border-2 border-[#D4E4F4]"
						}    text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#D4E4F4] hover:text-white transition delay-20 hover:border-0`}
					>
						All
					</div>
					<div
						onClick={openProvider}
						className={`cursor-pointer flex flex-row justify-center items-center ${
							type === "provider"
								? "bg-[#9AC0B5] text-white border-0"
								: "bg-white text-[#224957] border-2 border-[#9AC0B5]"
						}   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0`}
					>
						Your Provider
					</div>
					<div
						onClick={openCustomer}
						className={`cursor-pointer flex flex-row justify-center items-center ${
							type === "customer"
								? "bg-[#E8D3D0] text-white border-0"
								: "bg-white text-[#224957] border-2 border-[#E8D3D0]"
						}   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#E8D3D0] hover:text-white transition delay-20 hover:border-0`}
					>
						Your Customer
					</div>
				</div>
				<div className="text-[#C4C4C4]">Recents :</div>
				{type === "all"
					? orders.map((item, index) => {
							if (
								item.status === "INPROGRESS" &&
								item.rentPriceTotal.toString().includes(searchTerm)
							) {
								return <UpcomingCard props={item} type={type} key={index} />; // show all
							}
					  })
					: type === "provider"
					? orders.map((item, index) => {
							if (
								item.customerId === user.id &&
								item.status === "INPROGRESS" &&
								item.rentPriceTotal.toString().includes(searchTerm)
							) {
								return <UpcomingCard props={item} type={type} key={index} />; // show provider ของ customer
							}
					  })
					: orders.map((item, index) => {
							if (
								item.providerId === user.id &&
								item.status === "INPROGRESS" &&
								item.rentPriceTotal.toString().includes(searchTerm)
							) {
								return <UpcomingCard props={item} type={type} key={index} />; // show customer ของ provider
							}
					  })}
			</div>
		</>
	);
}

export default Upcoming;
