import { useState } from "react";
import AdminTabBar from "../../components/AdminTabBar";
import UserCard from "../../components/user/UserCard";
import { useAuth } from "../../context/AuthContext";
import Loading from "../../context/Loading";

function User() {
	const [search, setSearch] = useState("");
	const { loading, pendingUser } = useAuth();

	if (loading) return <Loading />;
	return (
		<div className="flex flex-col gap-[20px] px-60">
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
				{pendingUser
					.filter(
						(item) =>
							(item.isVerify == false &&
								item.firstName.toLowerCase().includes(search)) ||
							(item.isVerify == false &&
								item.lastName.toLowerCase().includes(search))
					)
					.map((item, index) => (
						<UserCard key={index} user={item} />
					))}
			</div>
		</div>
	);
}

export default User;
