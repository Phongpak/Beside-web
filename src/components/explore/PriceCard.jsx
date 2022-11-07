import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftRight, faStar } from "@fortawesome/free-solid-svg-icons";
import proPic from "../../image/profileImg.png";
import { Link } from "react-router-dom";
import RatingStar from "../ui/RatingStar";

function PriceCard({ provider, multiplier }) {
	const { birthDate } = provider;
	const calculateAge = (dob) => {
		let today = new Date();
		let age = today.getFullYear() - dob.split("-")[0];
		const m = today.getMonth() - dob.split("-")[1] + 1;
		const d = today.getDate() - dob.split("-")[2];
		if (m <= 0) {
			if ((m == 0 && d < 0) || m < 0) {
				age = age - 1;
			}
		}

		return age;
	};
	let rating = provider?.provider[0]?.average_rating || 0;
	let totalRating = provider?.provider[0]?.total_rating || 0;
	if (!isNaN(+rating)) {
		rating = (Math.round(rating * 100) / 100).toFixed(1);
	}

	useEffect(() => {
		provider.age = calculateAge(birthDate);
	}, []);

	return (
		<div className="flex flex-row justify-center items-center gap-4 p-3 border-4  border-[#9AC0B5] rounded-[15px] ">
			<div className="flex justify-center items-center border overflow-hidden ">
				<img
					className=" w-60 h-52 "
					src={
						provider?.ProfileImages.find((item) => item.isShow === true)
							?.Image ||
						provider?.ProfileImages[0]?.Image ||
						proPic
					}
				/>
			</div>
			<div className="flex flex-col gap-3 w-52">
				<h1 className=" text-[#224957] text-3xl font-bold">
					{provider.penName}
				</h1>
				<div className="flex items-center gap-[5px] text-[#E6C3C1] ">
					<RatingStar rating={rating} />

					<div>{totalRating ? rating : "No Reviews"}</div>
					<div>{totalRating ? `(${totalRating})` : ""}</div>
				</div>
				<div className="flex flex-row gap-2 ">
					<span className=" bg-[#9AC0B5] rounded-[10px] text-center  p-2">
						{provider.description}
					</span>
				</div>

				<div className="flex flex-row  h-[40%] gap-5 text-[#224957] ">
					<div className="flex flex-col   font-semibold  ">
						<div>Age:</div>
						<div>Gender:</div>
						{/* <div className="">Description:</div> */}
					</div>
					<div className="flex flex-col w-2/5 font-medium ">
						<div>
							{calculateAge(birthDate)}&nbsp;
							{/* {provider.age}  */}
							years
						</div>
						<div>{provider.gender}</div>
						{/* <div className="">{provider.description}</div> */}
					</div>
				</div>
			</div>
			<div className=" flex flex-col gap-2 border-2 border-[#9AC0B5] rounded-xl py-8 px-4 text-center w-36">
				<p className="font-medium  text-[#224957]">Price</p>
				<p className=" text-[#224957] text-3xl  font-bold">
					{+provider.rate * multiplier}
				</p>
				<p className="font-medium  text-[#224957]">THB</p>

				<div>
					<Link
						to={`/profile/${provider.id}`}
						className="mt-[40px] p-2 items-center  font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[10px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-[#506369]"
					>
						More details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PriceCard;
