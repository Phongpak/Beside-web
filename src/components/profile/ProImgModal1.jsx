import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProfileImg from "../../image/profileImg.png";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../context/ProfileContext";

function ProImgModal1({ isOpen, closeModal, getProfileImages }) {
	const { user, updateUser, deleteProfileImage } = useAuth();
	const { updateProfileImage } = useProfile();
	const [file1, setFile1] = useState(null);
	const inputEl1 = useRef();
	const [file2, setFile2] = useState(null);
	const inputEl2 = useRef();
	const [file3, setFile3] = useState(null);
	const inputEl3 = useRef();
	const [showImgId, setShowImgId] = useState(null);
	const [pics, setPics] = useState([]);

	const handleClickSaveProPic = async (e) => {
		try {
			e.preventDefault();
			const formData = new FormData();
			formData.append("profileImages", file1);
			formData.append("profileImages", file2);
			formData.append("profileImages", file3);

			await updateUser(formData, user.id);
			setFile1(null);
			setFile2(null);
			setFile3(null);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	const handleClickDeleteProPic = async (id) => {
		setPics((prev) => prev.filter((el) => el.id !== id));
		await deleteProfileImage(id);
	};
	const handleClickShowProPic = async (id, input) => {
		await updateProfileImage(id, input);
	};

	useEffect(() => {
		const fetchPics = async () => {
			try {
				const res = await getProfileImages(user.id);
				setPics(res.data.profileImages);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPics();
		setLoading(false);
	}, [user?.id, showImgId]);

	useEffect(() => {
		const fetchSelectedPic = async () => {
			try {
				const res = await getProfileImages(user.id);
				const findId = res.data.profileImages.find(
					(item) => item.isShow === true
				).id;
				setShowImgId(findId);
			} catch (err) {
				console.log(err);
			}
		};
		fetchSelectedPic();
		setLoading(false);
	}, []);

	const [loading, setLoading] = useState(true);
	if (loading) return <div>Loading</div>;

	return (
		<>
			{isOpen ? (
				<>
					<div
						onClick={closeModal}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div onClick={(e) => e.stopPropagation()} className="relative ">
							<div className="border-4 border-[#9AC0B5] rounded-lg shadow-lg flex flex-row justify-center items-center bg-white outline-none focus:outline-none ">
								<div className="flex flex-col p-10 border ">
									<button className="self-end text-[30px] text-gray-400 mb-5">
										<FontAwesomeIcon
											icon={faXmark}
											onClick={() => {
												closeModal();
												window.location.reload();
											}}
										/>
									</button>
									<div className="flex flex-row justify-center items-center gap-[25px] ">
										<div className="flex flex-col items-center  gap-[15px] w-[330px]  h-[350px] pt-10">
											<input
												type="file"
												className="absolute invisible "
												ref={inputEl1}
												onChange={(e) => {
													if (e.target.files[0]) {
														setFile1(e.target.files[0]);
													}
												}}
											/>

											<button
												className="relative pl-80 mt-[-50px]"
												onClick={() => {
													handleClickDeleteProPic(pics[0]?.id);
													setFile1();
												}}
											>
												<i className="fa-solid fa-xmark" />
											</button>
											<div
												className="flex justify-center h-[240px]   "
												onClick={() => {
													if (!pics[0]?.id) {
														inputEl1.current.click();
													}
												}}
											>
												<img
													className="relative h-full  "
													src={
														file1
															? URL.createObjectURL(file1)
															: pics[0]?.Image || ProfileImg
													}
													alt="Img"
												/>
											</div>
											{pics[0]?.id === showImgId ? (
												<button
													className="w-fit p-2 border-[#9AC0B5] border rounded-full hover:bg-[#9AC0B5] hover:text-white delay-20 transition"
													onClick={() => {
														handleClickShowProPic(pics[0]?.id, {
															isShow: false
														});
														setShowImgId(null);
													}}
												>
													Cancel Show
												</button>
											) : showImgId === null && pics[0] !== undefined ? (
												<button
													className="w-fit p-2 border-[#9AC0B5] border rounded-full hover:bg-[#9AC0B5] hover:text-white delay-20 transition"
													onClick={() => {
														handleClickShowProPic(pics[0]?.id, {
															isShow: true
														});
														setShowImgId(pics[0]?.id);
													}}
												>
													Show this photo as profile picture
												</button>
											) : (
												""
											)}
										</div>

										<div className="flex flex-col items-center gap-[15px] w-[330px]  h-[350px] pt-10">
											<input
												type="file"
												className="absolute invisible"
												ref={inputEl2}
												onChange={(e) => {
													if (e.target.files[0]) {
														setFile2(e.target.files[0]);
													}
												}}
											/>

											<button
												className="relative pl-80 mt-[-50px]"
												onClick={() => {
													handleClickDeleteProPic(pics[1]?.id);
													setFile2();
												}}
											>
												<i className="fa-solid fa-xmark" />
											</button>

											<div
												className="flex justify-center h-[240px]"
												onClick={() => {
													if (!pics[1]?.id) {
														inputEl2.current.click();
													}
												}}
											>
												<img
													className="relative block  h-60"
													src={
														file2
															? URL.createObjectURL(file2)
															: pics[1]?.Image || ProfileImg
													}
													alt="Img"
												/>
											</div>
											{pics[1]?.id === showImgId ? (
												<button
													className="w-fit p-2 border-[#9AC0B5] border rounded-full hover:bg-[#9AC0B5] hover:text-white delay-20 transition"
													onClick={() => {
														handleClickShowProPic(pics[1]?.id, {
															isShow: false
														});
														setShowImgId(null);
													}}
												>
													Cancel Show
												</button>
											) : showImgId === null && pics[1] !== undefined ? (
												<button
													className="w-fit p-2 border-[#9AC0B5] border rounded-full hover:bg-[#9AC0B5] hover:text-white delay-20 transition"
													onClick={() => {
														handleClickShowProPic(pics[1]?.id, {
															isShow: true
														});
														setShowImgId(pics[1]?.id);
													}}
												>
													Show this photo as profile picture
												</button>
											) : (
												""
											)}
										</div>
										<div className="flex flex-col items-center gap-[15px] w-[330px]  h-[350px] pt-10">
											<input
												type="file"
												className="absolute invisible"
												ref={inputEl3}
												onChange={(e) => {
													if (e.target.files[0]) {
														setFile3(e.target.files[0]);
													}
												}}
											/>

											<button
												className="relative pl-80 mt-[-50px]"
												onClick={() => {
													handleClickDeleteProPic(pics[2]?.id);
													setFile3();
												}}
											>
												<i className="fa-solid fa-xmark" />
											</button>

											<div
												className="flex justify-center h-[240px]"
												onClick={() => {
													if (!pics[2]?.id) {
														inputEl3.current.click();
													}
												}}
											>
												<img
													className="relative block  h-60"
													src={
														file3
															? URL.createObjectURL(file3)
															: pics[2]?.Image || ProfileImg
													}
													alt="Img"
												/>
											</div>
											{pics[2]?.id === showImgId ? (
												<button
													className="w-fit p-2 border-[#9AC0B5] border rounded-full hover:bg-[#9AC0B5] hover:text-white delay-20 transition"
													onClick={() => {
														handleClickShowProPic(pics[2]?.id, {
															isShow: false
														});
														setShowImgId(null);
													}}
												>
													Cancel Show
												</button>
											) : showImgId === null && pics[2] !== undefined ? (
												<button
													className="w-fit p-2 border-[#9AC0B5] border rounded-full hover:bg-[#9AC0B5] hover:text-white delay-20 transition"
													onClick={() => {
														handleClickShowProPic(pics[2]?.id, {
															isShow: true
														});
														setShowImgId(pics[2]?.id);
													}}
												>
													Show this photo as profile picture
												</button>
											) : (
												""
											)}
										</div>
									</div>

									<div className="flex flex-row justify-center gap-[20px]">
										<button
											className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0 "
											onClick={handleClickSaveProPic}
										>
											SAVE
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}

export default ProImgModal1;
