import { useEffect, useState } from "react";
import AdminTabBar from "../../components/AdminTabBar";
import TransactionCard from "../../components/transaction/TransactionCard";
import * as adminService from "../../api/adminApi";
import Loading from "../../context/Loading";

function Transaction() {
	const [loadingg, setLoading] = useState(true);
	const [transactions, setTransactions] = useState([]);
	const [status, setStatus] = useState("");
	const [search, setSearch] = useState("");
	const [type, setType] = useState("");
	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getTransaction()
					.then((res) => setTransactions(res.data.transactions));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
		setLoading(false);
	}, []);

	const openTopUp = () => {
		setType("TOPUP");
	};

	const openALL = () => {
		setType("");
	};

	const openWithdraw = () => {
		setType("WITHDRAW");
	};
	if (loadingg) return <Loading />;
	return (
		<div className="flex flex-col gap-[20px] w-full px-60">
			<AdminTabBar />
			<div className="flex flex-row gap-[10px]">
				<input
					className="min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
					placeholder="Search here..."
					onChange={(e) => setSearch(e.target.value)}
				/>
				<select
					className="min-w-[200px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] text-[#224957] pl-[10px]"
					name="status"
					onChange={(e) => setStatus(e.target.value)}
				>
					<option value="">All status</option>
					<option value="PENDING">Pending</option>
					<option value="SUCCESS">Success</option>
				</select>
			</div>
			<div className="flex flex-row gap-[10px]">
				<div
					onClick={openALL}
					className={`cursor-pointer flex flex-row justify-center items-center ${
						type == ""
							? "bg-[#506369] text-white border-0"
							: "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
					}   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
				>
					All
				</div>
				<div
					onClick={openTopUp}
					className={`cursor-pointer flex flex-row justify-center items-center ${
						type == "TOPUP"
							? "bg-[#506369] text-white border-0"
							: "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
					}   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
				>
					Top up
				</div>
				<div
					onClick={openWithdraw}
					className={`cursor-pointer flex flex-row justify-center items-center ${
						type == "WITHDRAW"
							? "bg-[#506369] text-white border-0"
							: "bg-white text-[#224957]  border-2 border-[#9AC0B5]"
					}   text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
				>
					Withdraw
				</div>
			</div>

			<div className="text-[#C4C4C4]">Recents :</div>
			<div className="flex flex-col gap-[20px] mb-[20px]">
				{transactions
					.filter((item) => {
						if (!type) {
							return item.status.includes(status) && item.task !== "ORDER";
						}
						return item.status.includes(status) && item.task.includes(type);
					})
					.map((item, index) => (
						<TransactionCard key={index} transaction={item} />
					))}
			</div>
		</div>
	);
}

export default Transaction;
