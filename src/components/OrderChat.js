import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import * as chatService from "../api/chatApi";

function OrderChat({
	socket,
	room,
	myId,
	myName,
	otherName,
	otherImage,
	setShowChat,
	oldMessages
}) {
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	const timeHour =
		new Date(Date.now()).getHours() >= 0 && new Date(Date.now()).getHours() <= 9
			? "0" + new Date(Date.now()).getHours()
			: "" + new Date(Date.now()).getHours();
	const timeMinute =
		new Date(Date.now()).getMinutes() >= 0 &&
		new Date(Date.now()).getMinutes() <= 9
			? "0" + new Date(Date.now()).getMinutes()
			: "" + new Date(Date.now()).getMinutes();

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				room: room,
				authorId: myId,
				author: myName,
				message: currentMessage,
				time: timeHour + ":" + timeMinute
			};
			await socket.emit("send_message", messageData);
			setMessageList((list) => [...list, messageData]);
			setCurrentMessage("");
		}
	};

	const leaveRoom = async () => {
		await socket.emit("leave_room", room);
		setShowChat(false);
	};

	useEffect(() => {
		socket.on("receive_message", async (data) => {
			setMessageList((item) => {
				return [...item, data];
			});
			await chatService.updateIsSeenChatMessage(room);
		});
	}, [socket]);

	useEffect(() => {
		if (oldMessages) {
			setMessageList(oldMessages);
		}
	}, [oldMessages]);

	return (
		<div className="flex justify-center bg-white h-[440px] rounded-t-[15px]">
			<div className="chat-window">
				<div className="chat-header">
					<div className="flex flex-row items-center gap-[10px] ml-[10px]">
						<div className="flex justify-center items-center border w-[50px] h-[50px] rounded-[100%] overflow-hidden">
							<img className="h-full" src={otherImage} alt="provider" />
						</div>
						<p className="font-semibold text-[18px] text-[#224957]">
							{otherName}
						</p>
					</div>
					<button
						className="flex justify-center items-center mr-[10px] w-[30px] h-[25px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
						onClick={leaveRoom}
					>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>
				<div className="chat-body">
					<ScrollToBottom className="message-container">
						{messageList.map((messageContent, index) => (
							<div
								className="message"
								id={myName === messageContent.author ? "you" : "other"}
								key={index}
							>
								<div>
									<div className="message-content">
										<p>{messageContent.message}</p>
									</div>
									<div className="message-meta">
										<p id="time">{messageContent.time}</p>
										<p id="author">{messageContent.author}</p>
									</div>
								</div>
							</div>
						))}
					</ScrollToBottom>
				</div>
				<div className="chat-footer">
					<input
						type="text"
						value={currentMessage}
						placeholder="Hey..."
						onChange={(e) => setCurrentMessage(e.target.value)}
						onKeyPress={(e) => {
							e.key === "Enter" && sendMessage();
						}}
					/>
					<button onClick={sendMessage}>&#9658;</button>
				</div>
			</div>
		</div>
	);
}

export default OrderChat;
