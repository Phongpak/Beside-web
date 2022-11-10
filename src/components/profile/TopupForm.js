import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import generatePayload from "promptpay-qr";
import { QRCodeSVG } from "qrcode.react";
import * as transactionService from "../../api/transactionApi";
import Loading from "../../context/Loading";

function TopupForm() {
	const mobileNumber = "0811111111";
	const inputEl = useRef();
	const { user } = useAuth();
	const [amount, setAmount] = useState(0);
	const [loading, setLoading] = useState(false);

	const [file, setFile] = useState(null);
	const payload = generatePayload(mobileNumber, { amount: parseInt(amount) });
	useEffect(() => {}, [amount]);

	const handleCreateTransaction = async (e) => {
		try {
			setLoading(true);
			e.preventDefault();
			const formData = new FormData();
			formData.append("task", "TOPUP");
			file && formData.append("slipImage", file);
			amount && formData.append("amount", amount);

			await transactionService.createTransaction(formData);
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
			<div className="flex flex-col justify-between items-center min-w-[725px] min-h-[425px] gap-[18px]">
				<div className="flex flex-col justify-between items-center h-[525px]">
					<Loading />
				</div>
			</div>
		);
	return (
		<div className="flex flex-col justify-between items-center min-w-[725px] min-h-[550px] gap-[18px]">
			<div className="flex flex-col justify-between items-center h-[525px]">
				<div className="flex flex-row justify-center items-center w-[250px] h-[75px] bg-[#9AC0B5] rounded-[30px] text-white text-[24px] font-medium">
					Wallet:
					{user.wallet.toLocaleString()} {""}
					THB
				</div>
				<div className="flex flex-row justify-center items-center w-[600px] h-[300px] bg-gray-100 rounded-[10px]">
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
					<div className="flex justify-between w-full ">
						<QRCodeSVG value={payload} className=" w-1/2" size="300" />,
						<div
							className="h-[300px]  w-1/2 flex justify-center"
							onClick={() => inputEl.current.click()}
						>
							<img
								className="h-full"
								src={
									file
										? URL.createObjectURL(file)
										: "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344464.jpg"
								}
								alt="slip"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-center items-center gap-[15px]">
					<div className="text-[#224957] text-[20px] font-medium">Amout:</div>
					<input
						onChange={(e) => setAmount(e.target.value)}
						type="number"
						value={amount}
						className="flex flex-row justify-center items-center text-center text-[#9AC0B5] text-[24px] w-[150px] h-[50px] border-2 border-[#9AC0B5] rounded-[20px]"
					/>
					<div className="text-[#224957] text-[20px] font-medium">THB</div>
				</div>
				<div className="flex flex-row justify-center items-center gap-[20px]">
					<button
						onClick={handleCreateTransaction}
						className="flex justify-center items-center font-medium text-[#224957] w-[150px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0"
					>
						Submit Topup
					</button>
				</div>
			</div>
		</div>
	);
}

export default TopupForm;
