import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import GoogleMapContainerCard from "./GoogleMapContainerCard";
import dateFormat from "dateformat";
import proPic from "../image/profileImg.png";
function ReviewCardByUser({ item }) {
	const arrLocation = item?.location.split(",");

	const reviewDate = dateFormat(item?.createdAt, "dd/mm/yyyy");

	const star = [];
	for (let i = 1; i <= item.providerReviewRating; i++) {
		star.push(i);
	}

	return (
		<div className="flex justify-center items-center w-96 h-56 border-2 border-[#9AC0B5] rounded-xl">
			<div className="flex justify-between flex-row w-[90%] h-[90%] gap-[10px]">
				<div className="flex flex-col w-1/2 gap-1">
					<div className="text-[17px] h-14 flex items-center text-[#224957] font-medium">
						{arrLocation[0]}
					</div>
					<GoogleMapContainerCard item={item} />
				</div>
				<div className="flex flex-col gap-[5px]">
					<div className="flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words">
						<div className="w-[90%] h-[90%] text-[13px]">
							{" "}
							"{item?.description}"
						</div>
					</div>
					<div className="flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]">
						<div className="flex flex-row gap-[5px] w-[90%] h-[90%]">
							<div className="flex h-7 w-fit ">
								{item?.customer?.iss}
								<img
									className="rounded-full border border-gray-100 shadow-sm"
									src={
										item?.customer?.ProfileImages.find(
											(item) => item.isShow === true
										)?.Image ||
										item?.customer?.ProfileImages[0]?.Image ||
										proPic
									}
									width="30"
								/>
							</div>
							<div className="flex flex-col gap-[5px]">
								<div className="flex flex-col">
									<div className="text-[#224957] text-[12px] font-medium">
										{item?.customer?.penName || item?.customer?.penName}
									</div>
									<div className="text-[#818182] text-[8px]">
										Review date {reviewDate}
									</div>
								</div>
								<div className="text-[#224957] text-[9px]">
									"{item?.providerReviewDescription}"
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between gap-[5px] text-[#E6C3C1] text-[14px]">
						<div className="gap-2">
							{star.map((item, index) => (
								<FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>
							))}
						</div>
						<div className="font-semibold">{item?.providerReviewRating}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReviewCardByUser;
