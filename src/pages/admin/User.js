// import { useState } from "react";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as adminService from "../../api/adminApi";
import AdminTabBar from "../../components/AdminTabBar";
import UserCard from "../../components/user/UserCard";
import Loading from "../../context/Loading";

function User() {
	const [loadingg, setLoading] = useState(true);
	const [PendingUser, setPendingUser] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		const fetch = async () => {
			try {
				await adminService
					.getUser()
					.then((res) => setPendingUser(res.data.users));
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
		setLoading(false);
	}, []);

	if (loadingg) return <Loading />;
	return (
		<div className="flex flex-col gap-[20px] w-[100vw] px-60">
			<AdminTabBar />
			<div className="flex flex-row gap-2">
				<input
					className="w-1/3 h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
					placeholder="Search here..."
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="text-[#C4C4C4]">Recents :</div>
			<div className="flex flex-wrap gap-5">
				{PendingUser.filter(
					(item) =>
						(item.isVerify == false &&
							item.firstName.toLowerCase().includes(search)) ||
						(item.isVerify == false &&
							item.lastName.toLowerCase().includes(search))
				).map((item, index) => (
					<UserCard key={index} user={item} />
				))}
			</div>
		</div>
	);
}

export default User;
