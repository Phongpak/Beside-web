import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import proPic from "../../image/profileImg.png";
import { useAuth } from "../../context/AuthContext";

function YourreviewModal({
	isOpenYourReview,
	closeYourReviewModal,
	seeUser,
	item
}) {
	const { user } = useAuth();
	const star = [];
	for (let i = 1; i <= item.customerReviewRating; i++) {
		star.push(i);
	}

	const star2 = [];
	for (let i = 1; i <= item.providerReviewRating; i++) {
		star2.push(i);
	}
	return (
		<>
			{isOpenYourReview ? (
				<>
					<div
						onClick={closeYourReviewModal}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative w-auto my-6 mx-auto max-w-3xl"
						>
							<div className="border-4 border-[#9AC0B5] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
								<div className="flex flex-col items-center min-w-[725px] min-h-[475px] gap-[18px]">
									<button className="self-end text-[30px] text-gray-400 absolute">
										<FontAwesomeIcon
											icon={faXmark}
											onClick={closeYourReviewModal}
										/>
									</button>
									<div className="flex justify-center items-center border w-[120px] h-[120px] rounded-[100%] overflow-hidden mt-[20px]">
										<img
											className="h-full"
											src={seeUser?.ProfileImages[0]?.Image || proPic}
										/>
									</div>
									<div className="text-[#224957] text-[20px] font-medium">
										What you think about them
									</div>

									{user.id === item.customerId ? (
										<div
											className="border-2 border-[#9AC0B5] rounded-[20px] w-[500px] h-[150px] resize-none p-[10px]"
											type="text"
										>
											{item.providerReviewDescription}
										</div>
									) : (
										<div
											className="border-2 border-[#9AC0B5] rounded-[20px] w-[500px] h-[150px] resize-none p-[10px]"
											type="text"
										>
											{item.customerReviewDescription}
										</div>
									)}

									{user.id === item.customerId ? (
										<div className="flex justify-center items-center gap-[5px] font-medium text-[#9AC0B5] text-[40px] w-[175px]">
											{star2.map(() => (
												<FontAwesomeIcon icon={faStar} />
											))}
										</div>
									) : (
										<div className="flex justify-center items-center  gap-[5px] font-medium text-[#9AC0B5] text-[40px] w-[175px]">
											{star.map(() => (
												<FontAwesomeIcon icon={faStar} />
											))}
										</div>
									)}
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

export default YourreviewModal;
