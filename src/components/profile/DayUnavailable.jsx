import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import * as dateService from "../../api/dateApi";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

function DayUnavailable() {
	const [showCreateDate, setShowCreateDate] = useState(false);
	const [unavailableDates, setUnavailableDates] = useState([]);
	const [unavailableDate, setUnavailableDate] = useState("");
	const [fromTime, setFromTime] = useState("00:00:00");
	const [toTime, setToTime] = useState("01:00:00");
	const { user } = useAuth();

	const currentDate = new Date();
	const currentDateString =
		String(currentDate.getFullYear()) +
		"-" +
		String(currentDate.getMonth() + 1) +
		"-" +
		String(currentDate.getDate());

	const toTimes = [
		{ value: "01:00:00", name: "01:00" },
		{ value: "02:00:00", name: "02:00" },
		{ value: "03:00:00", name: "03:00" },
		{ value: "04:00:00", name: "04:00" },
		{ value: "05:00:00", name: "05:00" },
		{ value: "06:00:00", name: "06:00" },
		{ value: "07:00:00", name: "07:00" },
		{ value: "08:00:00", name: "08:00" },
		{ value: "09:00:00", name: "09:00" },
		{ value: "10:00:00", name: "10:00" },
		{ value: "11:00:00", name: "11:00" },
		{ value: "12:00:00", name: "12:00" },
		{ value: "13:00:00", name: "13:00" },
		{ value: "14:00:00", name: "14:00" },
		{ value: "15:00:00", name: "15:00" },
		{ value: "16:00:00", name: "16:00" },
		{ value: "17:00:00", name: "17:00" },
		{ value: "18:00:00", name: "18:00" },
		{ value: "19:00:00", name: "19:00" },
		{ value: "20:00:00", name: "20:00" },
		{ value: "21:00:00", name: "21:00" },
		{ value: "22:00:00", name: "22:00" },
		{ value: "23:00:00", name: "23:00" },
		{ value: "24:00:00", name: "24:00" }
	];

	const handleCreateUnavailable = async (input) => {
		try {
			const formattedDate = moment(input.unavailableDate).format("YYYY-MM-DD");
			const selectedDate = moment(formattedDate, "YYYY-MM-DD hh:mm:ss").date();

			const DateFromTime = moment(
				formattedDate + " " + input.fromTime,
				"YYYY-MM-DD hh:mm:ss"
			);

			const DateToTime = moment(
				formattedDate + " " + input.toTime,
				"YYYY-MM-DD hh:mm:ss"
			);

			const dateUnavaMap = unavailableDates.some((item) => {
				const formattedDate = moment(item.unavailableDate).format("YYYY-MM-DD");
				const selectedDateFromUnava = moment(
					formattedDate,
					"YYYY-MM-DD hh:mm:ss"
				).date();

				const DateToTimeMap = moment(
					formattedDate + " " + item.toTime,
					"YYYY-MM-DD hh:mm:ss"
				);

				const DateFromTimeMap = moment(
					formattedDate + " " + item.fromTime,
					"YYYY-MM-DD hh:mm:ss"
				);

				const unavailableRange = moment.range(DateFromTimeMap, DateToTimeMap);
				const isUnavailable =
					unavailableRange.contains(DateFromTime) ||
					unavailableRange.contains(DateToTime);
				const Range = moment.range(DateFromTime, DateToTime);
				const isContains =
					Range.contains(DateFromTimeMap) || Range.contains(DateToTimeMap);

				if (
					(selectedDateFromUnava === selectedDate && isUnavailable == true) ||
					isContains == true
				) {
					return true;
				}
			});

			if (dateUnavaMap) {
				return alert("Duplicate time range");
			}

			setShowCreateDate(false);
			await dateService.createDateUnavailable(input);

			const fetchUserUnavailableDate = async () => {
				const userId = user.id;
				const res = await dateService.getUserDateUnavailable(userId);
				const userUnavailableDates = res.data.unavailableDates;
				setUnavailableDates(userUnavailableDates);
			};
			fetchUserUnavailableDate();

			setFromTime("00:00:00");
			setToTime("01:00:00");
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteUnavailable = async (id) => {
		try {
			await dateService.deleteDateUnavailable(id);

			const fetchUserUnavailableDate = async () => {
				const userId = user.id;
				const res = await dateService.getUserDateUnavailable(userId);
				const userUnavailableDates = res.data.unavailableDates;
				setUnavailableDates(userUnavailableDates);
			};
			fetchUserUnavailableDate();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		setUnavailableDate(currentDateString);
	}, []);

	useEffect(() => {
		const fetchUserUnavailableDate = async () => {
			const userId = user.id;
			const res = await dateService.getUserDateUnavailable(userId);
			const userUnavailableDates = res.data.unavailableDates;
			setUnavailableDates(userUnavailableDates);
		};
		fetchUserUnavailableDate();
	}, []);

	return (
		<>
			<div className="flex flex-row gap-[15px] self-start">
				<button
					className="bg-white text-[#224957] border-2 border-[#9AC0B5] flex flex-row justify-center items-center text-[14px] font-medium rounded-[15px] min-w-[180px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
					onClick={() => setShowCreateDate(!showCreateDate)}
				>
					{showCreateDate ? "Undo" : "+ Create unavailable date"}
				</button>
				{showCreateDate ? (
					<div className="flex justify-evenly items-center w-[480px] h-[30px] bg-[#9AC0B5] rounded-[25px]">
						<input
							onChange={(e) => setUnavailableDate(e.target.value)}
							className="text-center w-[125px] rounded-[15px] h-[22px]"
							type="date"
							min={currentDateString}
						/>
						<div className="flex flex-row gap-[5px]">
							<div>
								<label htmlFor="fromTime">From: </label>
								<select
									className="w-[70px] rounded-[15px] text-center"
									name="fromTime"
									id="fromTime"
									value={fromTime}
									onChange={(e) => {
										setFromTime(e.target.value);
										if (e.target.value >= toTime) {
											if (e.target.value >= "09:00:00") {
												setToTime(+e.target.value.slice(0, 2) + 1 + ":00:00");
											} else {
												setToTime(
													"0" + (+e.target.value.slice(0, 2) + 1) + ":00:00"
												);
											}
										}
									}}
								>
									<option value="00:00:00">00:00</option>
									<option value="01:00:00">01:00</option>
									<option value="02:00:00">02:00</option>
									<option value="03:00:00">03:00</option>
									<option value="04:00:00">04:00</option>
									<option value="05:00:00">05:00</option>
									<option value="06:00:00">06:00</option>
									<option value="07:00:00">07:00</option>
									<option value="08:00:00">08:00</option>
									<option value="09:00:00">09:00</option>
									<option value="10:00:00">10:00</option>
									<option value="11:00:00">11:00</option>
									<option value="12:00:00">12:00</option>
									<option value="13:00:00">13:00</option>
									<option value="14:00:00">14:00</option>
									<option value="15:00:00">15:00</option>
									<option value="16:00:00">16:00</option>
									<option value="17:00:00">17:00</option>
									<option value="18:00:00">18:00</option>
									<option value="19:00:00">19:00</option>
									<option value="20:00:00">20:00</option>
									<option value="21:00:00">21:00</option>
									<option value="22:00:00">22:00</option>
									<option value="23:00:00">23:00</option>
								</select>
							</div>
							<div>
								<label htmlFor="toTime">To: </label>
								<select
									className="w-[70px] rounded-[15px] text-center"
									name="toTime"
									id="toTime"
									value={toTime}
									onChange={(e) => setToTime(e.target.value)}
								>
									{toTimes
										.filter((item) => item.value > fromTime)
										.map((item) => (
											<option value={item.value}>{item.name}</option>
										))}
								</select>
							</div>
						</div>
						<button
							className="flex justify-center items-center w-[100px] h-[22px] bg-[#F2F2F2] rounded-[15px] text-[14px] hover:bg-[#506369] hover:text-white transition delay-20"
							onClick={() =>
								handleCreateUnavailable({
									unavailableDate: unavailableDate,
									fromTime: fromTime,
									toTime: toTime
								})
							}
						>
							Create date
						</button>
					</div>
				) : (
					""
				)}
			</div>
			<div className="flex flex-col items-center">
				{unavailableDates.map((item, index) => (
					<div className="flex flex-row gap-[15px] pb-[15px]" key={index}>
						<div className="flex justify-center items-center text-[#224957] w-[647.5px] h-[40px] bg-[#F2F2F2] rounded-[25px] gap-[15px]">
							<div> Unavailable Date: {item.unavailableDate.slice(0, 10)}</div>
							<div>From: {item.fromTime}</div>
							<div>To: {item.toTime}</div>
						</div>
						<button
							className="text-[20px] text-red-400"
							onClick={() => handleDeleteUnavailable(item.id)}
						>
							<FontAwesomeIcon icon={faXmark} />
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export default DayUnavailable;
