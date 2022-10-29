import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../../context/AuthContext";
import OrderChat from "../OrderChat";
import * as chatService from "../../api/chatApi";
import "dayjs/locale";
import dayjs from "dayjs";

const socket = io.connect("http://localhost:4000");

function UpcomingCard({
	orderId,
	firstName,
	image,
	appointmentDate,
	fromTime,
	toTime,
	location,
	rentPriceTotal
}) {
	const [showChat, setShowChat] = useState(false);
	const [oldMessages, setOldMessages] = useState([]);
	const [unseenMessages, setUnseenMessages] = useState([]);
	const { user } = useAuth();

	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	const currentDate = new Date();
	const currentTimeMinute = currentDate.getTime() / 1000 / 60;
	const orderDate = new Date(appointmentDate + "T" + fromTime);
	const orderTimeMinute = orderDate.getTime() / 1000 / 60;
	const timeHourDiff = (orderTimeMinute - currentTimeMinute) / 60;

	const newFormatAppointmentDate =
		weekday[orderDate.getDay()] +
		", " +
		orderDate.getDate() +
		" " +
		month[orderDate.getMonth()] +
		" " +
		orderDate.getFullYear();

	const userUnseenMessages = unseenMessages.filter(
		(item) => item.userId !== user.id
	);

	const joinRoom = async () => {
		setUnseenMessages([]);

		socket.emit("join_room", orderId);

		await chatService.updateIsSeenChatMessage(orderId);

		setShowChat(true);

		const res = await chatService.getChatMessage(orderId);
		const messages = res.data.messages;
		const newMessages = messages.map((item) => {
			delete item["id"];
			delete item["updatedAt"];
			delete Object.assign(item, { authorId: item.userId })["userId"];
			Object.assign(item, { author: item.User.firstName });
			delete Object.assign(item, {
				time: dayjs(item.createdAt).locale("th").format("HH:mm")
			})["createdAt"];
			return item;
		});
		setOldMessages(newMessages);
	};

	useEffect(() => {
		const forSetUnseenMessage = async (orderId) => {
			const res = await chatService.getUnseenMessage(orderId);
			setUnseenMessages(res.data.unseenMessages);
		};

		forSetUnseenMessage(orderId);
	}, [socket]);

	return (
		<>
			<div className="flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]">
				<div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
					<div className="flex flex-col justify-center items-center ml-[40px]">
						<div className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden">
							<img className="h-full" src={image} />
						</div>
						<div className="font-medium text-[#224957]">{firstName}</div>
					</div>
					<div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
						<div className="flex flex-col justify-between w-[100px] font-medium">
							<div>Date:</div>
							<div>Time:</div>
							<div>Location:</div>
							<div>Deal Price:</div>
						</div>
						<div className="flex flex-col justify-between w-[325px] font-medium">
							<div>{newFormatAppointmentDate}</div>
							<div>
								{fromTime} - {toTime}
							</div>
							<div>{location}</div>
							<div>{rentPriceTotal} THB</div>
						</div>
					</div>
					{timeHourDiff <= 24 ? (
						<button
							className="relative flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-2 hover:border-[#506369]"
							onClick={joinRoom}
						>
							Start chatting now
							{userUnseenMessages.length !== 0 ? (
								<div className="flex justify-center items-center w-[25px] h-[25px] rounded-full bg-[#E37383] text-white absolute -top-3 -right-3">
									{userUnseenMessages.length}
								</div>
							) : (
								""
							)}
						</button>
					) : (
						<div className="flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px]"></div>
					)}
				</div>
			</div>
			{showChat ? (
				<div className="fixed right-[20px] bottom-[0px] z-10">
					<OrderChat
						socket={socket}
						myId={user.id}
						myName={user.firstName}
						otherName={firstName}
						otherImage={image}
						room={orderId}
						setShowChat={setShowChat}
						oldMessages={oldMessages}
					/>
				</div>
			) : (
				""
			)}
		</>
	);
}

export default UpcomingCard;
