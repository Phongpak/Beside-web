import AdminTabBar from "../../components/AdminTabBar";
import OrderItemCard from "../../components/orderItem/OrderItemCard";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function OrderItem() {
	const [searchTerm, setSearchTerm] = useState("");
	const changeSearchTerm = (text) => {
		setSearchTerm(text);
	};
	const [searchStatus, setSearchStatus] = useState("");
	const { orderItem } = useAuth();

	return (
		<div className="flex flex-col gap-[20px] px-60">
			<AdminTabBar />
			<div className="flex flex-row gap-[10px]">
				<input
					className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
					placeholder="Search here..."
					onChange={(event) => {
						changeSearchTerm(event.target.value);
					}}
				/>
				<select
					className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
					name="status"
					onChange={(e) => setSearchStatus(e.target.value)}
				>
					<option value="">All status</option>
					<option value="PENDING">Pending Confirmation</option>
					<option value="INPROGRESS">Upcomming</option>
					<option value="SUCCESS">Success</option>
					<option value="REJECT">Rejected</option>
				</select>
			</div>

			<div className="text-[#C4C4C4]">Recents :</div>

			{orderItem
				.filter((item) => {
					return (
						item.status.includes(searchStatus) &&
						item.rentPriceTotal.toString().includes(searchTerm)
					);
				})
				.map((item, index) => (
					<OrderItemCard key={index} item={item} />
				))}
		</div>
	);
}

export default OrderItem;
