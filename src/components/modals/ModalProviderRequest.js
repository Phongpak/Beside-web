import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TopupForm from "../profile/TopupForm";
import Loading from "../../context/Loading";
import WithdrawForm from "../profile/WithdrawForm";
import { useAuth } from "../../context/AuthContext";
import * as userService from "../../api/userApi";

function ModalProviderRequest({
	isOpenProviderRequest,
	closeModalProviderRequest
}) {
	const [loading, setLoading] = useState(false);
	const [file, setFile] = useState(null);
	const [bankName, setBankName] = useState("");
	const [bookAccountNumber, setBookAccountNumber] = useState("");
	const inputEl = useRef();
	const { user } = useAuth();
	const handleSendRequest = async (e) => {
		try {
			setLoading(true);
			e.preventDefault();
			const formData = new FormData();
			formData.append("providerRequestStatus", "PENDING");
			file && formData.append("bookBankImage", file);
			bankName && formData.append("bankName", bankName);
			bookAccountNumber &&
				formData.append("bookAccountNumber", bookAccountNumber);

			await userService.updateUser(formData, user.id);
			setFile(null);

			window.location.reload();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	if (loading)
		return (
			<div
				onClick={closeModalProviderRequest}
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="relative w-auto my-6 mx-auto max-w-3xl"
				>
					<div className="border-4 border-[#9AC0B5] rounded-[30px]  min-w-[775px] shadow-lg relative flex flex-col justify-center items-center w-full bg-white outline-none focus:outline-none">
						<div className="flex flex-col items-center min-w-[675px] min-h-[650px] max-h-[650px] gap-[20px]">
							<div className="flex flex-col justify-between items-center min-w-[725px] min-h-[425px] gap-[18px]">
								<div className="flex flex-col justify-between items-center h-[525px]">
									<Loading />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	return (
		<>
			{" "}
			{isOpenProviderRequest ? (
				user.providerRequestStatus === "PENDING" ? (
					<>
						<div
							onClick={closeModalProviderRequest}
							className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						>
							<div
								onClick={(e) => e.stopPropagation()}
								className="relative w-auto my-6 mx-auto max-w-3xl"
							>
								<div className="border-4 border-[#9AC0B5] rounded-[30px]  min-w-[775px] shadow-lg relative flex flex-col justify-center items-center w-full bg-white outline-none focus:outline-none">
									<div className="flex flex-col items-center min-w-[675px] min-h-[200px] max-h-[200px] gap-[20px]">
										<div className="flex flex-col justify-between items-center min-w-[725px] min-h-[200px] gap-[18px]">
											<div className=" m-20 flex flex-col justify-between items-center h-[200px] text-[#224957] text-[30px] font-medium">
												Waiting for approval
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<div
							onClick={closeModalProviderRequest}
							className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						>
							<div
								onClick={(e) => e.stopPropagation()}
								className="relative w-auto my-6 mx-auto max-w-3xl"
							>
								<div className="border-4 border-[#9AC0B5] rounded-[30px]  min-w-[775px] shadow-lg relative flex flex-col justify-center items-center w-full bg-white outline-none focus:outline-none">
									<div className="flex flex-col items-center min-w-[675px] min-h-[650px] max-h-[650px] gap-[20px]">
										<button className="self-end text-[30px] text-gray-400 absolute right-[20px]">
											<FontAwesomeIcon
												icon={faXmark}
												onClick={closeModalProviderRequest}
											/>
										</button>
										<div className="flex flex-col justify-between items-center min-w-[725px] min-h-[550px] gap-[18px]">
											<div className="flex flex-col justify-between items-center h-[525px]">
												<div className="m-20 flex flex-row justify-center items-center w-[600px] h-[300px] bg-gray-100 rounded-[10px]">
													<input
														type="file"
														className="hidden"
														ref={inputEl}
														onChange={(e) => {
															if (e.target.files[0]) {
																setFile(e.target.files[0]);
															}
														}}
													/>
													<div className="flex flex-row justify-center items-center">
														<span onClick={() => inputEl.current.click()}>
															<img
																src={
																	file
																		? URL.createObjectURL(file)
																		: "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344464.jpg"
																}
																width="400"
																alt="slip"
																className="h-72 w-full"
															/>
														</span>
													</div>
												</div>
												<div className="flex flex-row justify-center items-center gap-[15px]">
													<div className="text-[#224957] text-[20px] font-medium">
														Bank Name:
													</div>
													<input
														onChange={(e) => setBankName(e.target.value)}
														value={bankName}
														className="flex flex-row justify-center items-center text-center text-[#9AC0B5] text-[16px] w-[150px] h-[30px] border-2 border-[#9AC0B5] rounded-[20px]"
													/>
													<div className="text-[#224957] text-[20px] font-medium">
														Bank Account Number:
													</div>
													<input
														onChange={(e) =>
															setBookAccountNumber(e.target.value)
														}
														value={bookAccountNumber}
														className="flex flex-row justify-center items-center text-center text-[#9AC0B5] text-[16px] w-[150px] h-[30px] border-2 border-[#9AC0B5] rounded-[20px]"
													/>
												</div>
												<div className="flex flex-row justify-center items-center gap-[20px]">
													<button
														onClick={handleSendRequest}
														className="m-16 flex justify-center items-center font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
													>
														Submit Request
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)
			) : (
				""
			)}
		</>
	);
}

export default ModalProviderRequest;
