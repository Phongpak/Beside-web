import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWallet,
	faSackDollar
	// faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import dayjs from "dayjs";

function WalletHistoryCard({ item, index }) {
	return (
		<div
			className={`flex flex-row justify-center items-center min-w-[1039.2px] h-[150px] border-4 border-${
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
						<div>{moment(item.createdAt).format("dddd, MMMM Do YYYY")}</div>
						<div>
							{/* {moment(item.createdAt)
													.subtract(7, "hours")
													.format("HH:mm ")} */}
							{dayjs(item.createdAt).locale("th").format("HH:mm:ss")}
						</div>
						<div>{item.task}</div>
						<div>{item.amount.toLocaleString()} THB</div>
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
	);
}

export default WalletHistoryCard;
