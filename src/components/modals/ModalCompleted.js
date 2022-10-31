import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import proPic from "../../image/profileImg.png";
import { useAuth } from "../../context/AuthContext";

function ModalCompleted({ isOpen, closeModal, seeUser, item }) {
	const { user, updateOrder } = useAuth();
	// console.log(seeUser);
	const [currentValue, setCurrentValue] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const [review, setReview] = useState(0);
	const stars = [0, 0, 0, 0, 0];

	const handleMouseClick = (value) => {
		setCurrentValue(value);
	};

	const handleMouseHover = (value) => {
		setHoverValue(value);
	};

	const handleMouseLeave = (value) => {
		setHoverValue(undefined);
	};

	const [input, setInput] = useState("");

	const handleChangeInput = (e) => {
		setInput(e.target.value);
	};

	const handleClickSubmit = async () => {
		try {
			if (item.customerId == user.id) {
				await updateOrder(
					{ providerReviewDescription: input, providerReviewRating: review },
					item.id
				);
			}
			if (item.providerId == user.id) {
				await updateOrder(
					{ customerReviewDescription: input, customerReviewRating: review },
					item.id
				);
			}
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{isOpen ? (
				<>
					<div
						onClick={closeModal}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative w-auto my-6 mx-auto max-w-3xl"
						>
							<div className="border-4 border-[#9AC0B5] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
								<div className="flex flex-col items-center min-w-[725px] min-h-[475px] gap-[18px]">
									<button className="self-end text-[30px] text-gray-400 absolute">
										<FontAwesomeIcon icon={faXmark} onClick={closeModal} />
									</button>
									<div className="flex justify-center items-center border w-[120px] h-[120px] rounded-[100%] overflow-hidden mt-[20px]">
										<img
											className="h-full"
											src={seeUser?.ProfileImages[0]?.Image || proPic}
										/>
									</div>
									<div className="text-[#224957] text-[20px] font-medium">
										{`Let's rate your ${
											item.customerId === user.id ? "provider" : "customer"
										} here`}
									</div>
									<textarea
										className="border-2 border-[#9AC0B5] rounded-[20px] w-[500px] h-[150px] resize-none p-[10px]"
										type="text"
										value={input}
										onChange={handleChangeInput}
									/>
									<div className="flex flex-row justify-center items-center gap-[5px]">
										{stars.map((item, index) => (
											<FontAwesomeIcon
												onClick={() => {
													const score = index + 1;
													console.log(score);
													setReview(score);
													handleMouseClick(index + 1);
												}}
												onMouseOver={() => handleMouseHover(index + 1)}
												onMouseLeave={handleMouseLeave}
												className={`cursor-pointer text-[30px] text-${
													(hoverValue || currentValue) > index
														? "[#9AC0B5]"
														: "[#D9D9D9]"
												}`}
												icon={faStar}
												key={index}
											/>
										))}
									</div>
									<button
										className="flex justify-center items-center font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
										onClick={handleClickSubmit}
									>
										Submit
									</button>
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

export default ModalCompleted;
