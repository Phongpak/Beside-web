import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import OrderChat from "../OrderChat";
import * as chatService from "../../api/chatApi";
import * as orderService from "../../api/orderApi";
import "dayjs/locale";
import dayjs from "dayjs";
import moment from "moment";
import proPic from "../../image/profileImg.png";

const socket = io.connect("http://localhost:4000");

function UpcomingCard({ props, type }) {
	const [showChat, setShowChat] = useState(false);
	const [oldMessages, setOldMessages] = useState([]);
	const [unseenMessages, setUnseenMessages] = useState([]);
	const { user } = useAuth();
	const navigate = useNavigate();

	const profileId =
		(type === "all" && user.id === props.providerId) ||
		(type === "customer" && user.id === props.providerId)
			? props.customerId
			: props.providerId;

	const currentDate = new Date();
	const currentTimeMinute = currentDate.getTime() / 1000 / 60;
	const orderDateStart = new Date(props.appointmentDate + "T" + props.fromTime);
	const orderDateEnd = new Date(props.appointmentDate + "T" + props.toTime);
	const orderStartTimeMinute = orderDateStart.getTime() / 1000 / 60;
	const orderEndTimeMinute = orderDateEnd.getTime() / 1000 / 60;
	const timeDiffStart = (orderStartTimeMinute - currentTimeMinute) / 60; // if less than 24, show chat button
	const timeDiffEnd = (currentTimeMinute - orderEndTimeMinute) / 60; // if more than 0, show end job button

	const userUnseenMessages = unseenMessages.filter(
		(item) => item.userId !== user.id
	);

	const joinRoom = async () => {
		setUnseenMessages([]);

		socket.emit("join_room", props.id);

		await chatService.updateIsSeenChatMessage(props.id);

		setShowChat(true);

		const res = await chatService.getChatMessage(props.id);
		const messages = res.data.messages;
		const newMessages = messages.map((item) => {
			delete item["id"];
			delete item["updatedAt"];
			delete Object.assign(item, { authorId: item.userId })["userId"];
			Object.assign(item, { author: item.User.penName || item.User.firstName });
			delete Object.assign(item, {
				time: dayjs(item.createdAt).locale("th").format("HH:mm")
			})["createdAt"];
			return item;
		});
		setOldMessages(newMessages);
	};

	const updateOrderStatusToSuccess = async (orderId, input) => {
		try {
			await orderService.updateOrder(orderId, input);
			navigate("/completed");
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const forSetUnseenMessage = async (orderId) => {
			const res = await chatService.getUnseenMessage(orderId);
			setUnseenMessages(res.data.unseenMessages);
		};

		forSetUnseenMessage(props.id);
	}, [socket]);

	return (
		<>
			<div
				className={`flex flex-row justify-center items-center min-w-[1039.2px] h-[170px] rounded-[15px] border-4 ${
					(type === "all" && user.id === props.providerId) ||
					(type === "customer" && user.id === props.providerId)
						? "border-[#E8D3D0]"
						: "border-[#9AC0B5]"
				}`}
			>
				<div className="flex flex-row justify-between items-center w-[95%] h-[85%]">
					<div
						className="flex flex-col justify-center items-center w-[110px] ml-[40px] cursor-pointer"
						onClick={() => navigate(`/profile/${profileId}`)}
					>
						<div className="font-medium text-[#224957] text-[16px]">
							{(type === "all" && user.id === props.providerId) ||
							(type === "customer" && user.id === props.providerId)
								? "Your Customer"
								: "Your Provider"}
						</div>
						<div className="flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden">
							<img
								className="h-full"
								src={
									(type === "all" && user.id === props.providerId) ||
									(type === "customer" && user.id === props.providerId)
										? props.customer.ProfileImages.filter(
												(item) => item.isShow === true
										  )[0]?.Image ||
										  props.customer.ProfileImages[0]?.Image ||
										  proPic
										: props.provider.ProfileImages.filter(
												(item) => item.isShow === true
										  )[0]?.Image ||
										  props.provider.ProfileImages[0]?.Image ||
										  proPic
								}
							/>
						</div>
						<div className="font-semibold text-[#224957]">
							{(type === "all" && user.id === props.providerId) ||
							(type === "customer" && user.id === props.providerId)
								? props.customer.penName || props.customer.firstName
								: props.provider.penName || props.provider.firstName}
						</div>
					</div>
					<div className="flex flex-row gap-[20px] h-[100%] text-[#224957]">
						<div className="flex flex-col justify-between w-[100px] font-medium">
							<div>Date:</div>
							<div>Time:</div>
							<div>Location:</div>
							<div>Deal Price:</div>
						</div>
						<div className="flex flex-col justify-between w-[325px] font-medium">
							<div>
								{moment(props.appointmentDate).format("dddd, MMMM Do YYYY")}
							</div>
							<div>
								{props.fromTime.slice(0, 5)} - {props.toTime.slice(0, 5)}
							</div>
							<div>{props.location}</div>
							<div>{props.rentPriceTotal} THB</div>
						</div>
					</div>
					{timeDiffStart <= 24 ? (
						<div className="flex flex-row justify-end items-center self-end gap-[10px] w-[280px]">
							{props.providerId === user.id && timeDiffEnd > 0 ? (
								<button
									className={`flex flex-row justify-center items-center text-[#224957] w-[80px] h-[40px] border-2 rounded-[15px] hover:text-white transition delay-20 hover:border-2 ${
										(type === "all" && user.id === props.providerId) ||
										(type === "customer" && user.id === props.providerId)
											? "border-[#E8D3D0] hover:bg-[#E8D3D0]"
											: "border-[#9AC0B5] hover:bg-[#9AC0B5]"
									}`}
									onClick={() =>
										updateOrderStatusToSuccess(props.id, {
											status: "SUCCESS"
										})
									}
								>
									End Job
								</button>
							) : (
								""
							)}
							<button
								className={`relative flex justify-center items-center font-medium text-[#224957] w-[175px] h-[40px] border-2 rounded-[15px] hover:text-white transition delay-20 hover:border-2 ${
									(type === "all" && user.id === props.providerId) ||
									(type === "customer" && user.id === props.providerId)
										? "border-[#E8D3D0] hover:bg-[#E8D3D0]"
										: "border-[#9AC0B5] hover:bg-[#9AC0B5]"
								}`}
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
						</div>
					) : (
						<div className="flex justify-center items-center self-end font-medium text-[#224957] w-[280px] h-[40px]"></div>
					)}
				</div>
			</div>
			{showChat ? (
				<div className="fixed right-[20px] bottom-[0px] z-10">
					<OrderChat
						socket={socket}
						myId={user.id}
						myName={user.penName || user.firstName}
						otherName={
							(type === "all" && user.id === props.providerId) ||
							(type === "customer" && user.id === props.providerId)
								? props.customer.penName || props.customer.firstName
								: props.provider.penName || props.provider.firstName
						}
						otherImage={
							(type === "all" && user.id === props.providerId) ||
							(type === "customer" && user.id === props.providerId)
								? props.customer.ProfileImages.filter(
										(item) => item.isShow === true
								  )[0]?.Image ||
								  props.customer.ProfileImages[0]?.Image ||
								  proPic
								: props.provider.ProfileImages.filter(
										(item) => item.isShow === true
								  )[0]?.Image ||
								  props.provider.ProfileImages[0]?.Image ||
								  proPic
						}
						room={props.id}
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
