import Bio from "../components/profile/Bio";
import Informatio from "../components/profile/Informatio";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import UserTabBar from "../components/UserTabBar";
import { useLoading } from "../context/LoadingContext";
import { useParams } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";

function ProfilePage() {
	const { id } = useParams();
	const { getProfile } = useProfile();
	// console.log(id);

	const [profiles, setProfiles] = useState([]);

	useEffect(() => {
		const profileData = async () => {
			let profile = await getProfile(id);
			// console.log("id", id);
			// console.log("profile", profile);
			setProfiles(profile.data.user);
			console.log(profile.data.user);
		};
		if (id) {
			profileData();
		}
	}, [id]);
	// console.log("0", profiles);

	// const [isEditing, setIsEditing] = useState(false);

	// const toggleEditing = () => {
	//   setIsEditing((prevIsEditing) => !prevIsEditing);
	// };

	const { user, updateUser, isEditing, setIsEditing } = useAuth();
	const [input, setInput] = useState({});
	const { startLoading, stopLoading } = useLoading();

	// console.log(user);
	useEffect(() => {
		setInput((p) => {
			return {
				penName: user?.penName || user?.firstName,
				description: user?.description,
				rate: user?.rate,
				gender: user?.gender,
				sexuallyInterested: user?.sexuallyInterested,
				language: user?.language,
				hobby: user?.hobby,
				lat: user?.lat,
				lng: user?.lng,
				location: user?.location
			};
		});
	}, [user]);

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleClickSave = async (e) => {
		try {
			startLoading();

			await updateUser(input, user.id);
			setIsEditing(false);
			// window.location.reload();
		} catch (err) {
			console.log(err);
		} finally {
			stopLoading();
		}
	};
	return (
		<div>
			<Bio
				input={input}
				handleChangeInput={handleChangeInput}
				setInput={setInput}
				profiles={profiles}
			/>
			<div className="w-full h-[650px] flex flex-col gap-10 px-60">
				{!isEditing && id == user?.id && <UserTabBar />}
				<div className="flex flex-row gap-10">
					<Informatio
						input={input}
						handleChangeInput={handleChangeInput}
						setInput={setInput}
						profiles={profiles}
					/>
					<div className="flex flex-col   h-[650px]">
						<div className="flex flex-col gap-[10px]">
							<div className="text-[20px] text-[#224957] font-medium">
								My reviews (150)
							</div>
							<input
								className="w-[375px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]"
								placeholder="Search here..."
							/>
							<div className="flex flex-row flex-wrap gap-10">
								<ReviewCard />
								<ReviewCard />
								<ReviewCard />
								<ReviewCard />
								<ReviewCard />
								<ReviewCard />
							</div>

							{isEditing ? (
								<div
									className="mx-auto mt-20 flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px]"
									onClick={handleClickSave}
								>
									Save
								</div>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;