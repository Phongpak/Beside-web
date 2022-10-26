import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DayAvailable from "../profile/DayAvailable";
import DayUnavailable from "../profile/DayUnavailable";

function ModalAvailable({ isOpenModalAvailable, closeModalAvailable }) {
	const [type, setType] = useState("available");
	const weekDay = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	return (
		<>
			{isOpenModalAvailable ? (
				<>
					<div
						onClick={closeModalAvailable}
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative w-auto my-6 mx-auto max-w-3xl"
						>
							<div className="overflow-y-scroll hide-scrollbar border-4 border-[#9AC0B5] rounded-[30px] rounded-lg min-w-[775px] min-h-[550px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none">
								<div className="flex flex-col items-center min-w-[675px] min-h-[550px] max-h-[550px] gap-[20px]">
									<button className="self-end text-[30px] text-gray-400 absolute right-[20px]">
										<FontAwesomeIcon
											icon={faXmark}
											onClick={closeModalAvailable}
										/>
									</button>
									<div className="text-[#224957] text-[24px] font-medium pt-[10px]">
										{type === "available"
											? "Available time"
											: "Unavailable date"}
									</div>
									<div className="flex flex-row gap-[10px] self-start">
										<div
											className={`${
												type === "available"
													? "bg-[#506369] text-white"
													: "bg-white text-[#224957] border-2 border-[#9AC0B5]"
											} cursor-pointer flex flex-row justify-center items-center text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
											onClick={() => setType("available")}
										>
											Set Available
										</div>
										<div
											className={`${
												type === "unavailable"
													? "bg-[#506369] text-white"
													: "bg-white text-[#224957] border-2 border-[#9AC0B5]"
											} cursor-pointer flex flex-row justify-center items-center text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0`}
											onClick={() => setType("unavailable")}
										>
											Set Unavailable
										</div>
									</div>
									{type === "available" ? (
										weekDay.map((item, index) => {
											// console.log(index);
											return (
												<DayAvailable
													weekDay={item}
													weekDayNumber={index}
													key={item}
												/>
											);
										})
									) : (
										<DayUnavailable />
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

export default ModalAvailable;
