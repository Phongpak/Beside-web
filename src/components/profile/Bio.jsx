import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ModalWallet from "../modals/ModalWallet";
import { useState } from "react";
import ModalAvailable from "../modals/ModalAvailable";
// import { useReducer } from "react";
import ProfileImg from "./ProfileImg";

function Bio({ toggleEditing, isEditing, user, handleChangeInput, input }) {
	const [isOpenModalWallet, setIsOpenModalWallet] = useState(false);
	const [isOpenModalAvailable, setIsOpenModalAvailable] = useState(false);

	const openModalWallet = () => {
		setIsOpenModalWallet(true);
	};

	const closeModalWallet = () => {
		setIsOpenModalWallet(false);
	};

	const openModalAvailable = () => {
		setIsOpenModalAvailable(true);
	};

	const closeModalAvailable = () => {
		setIsOpenModalAvailable(false);
	};
	return (
		<div className="flex items-center bg-[#F4F2F2] h-[300px] w-[100vw] px-60">
			<div className="flex items-center justify-between h-[250px] w-[1000px]">
				{/* <div className="flex justify-center w-[500px]">
          <img
            className="rounded-[5px]"
            src={
              "https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a"
            }
            width="325"
          />
        </div> */}
				<ProfileImg input={input} />

				<div className="flex flex-col justify-center w-[500px] gap-[10px]">
					<div>
						{isEditing ? (
							<input
								className="text-[30px] font-bold border-2 border-[#809590] rounded-xl"
								type="text"
								// placeholder={user?.penName}
								name="penName"
								value={input?.penName}
								onChange={handleChangeInput}
							/>
						) : (
							<div className="text-[30px] text-[#224957] font-bold ">
								{user?.penName || user?.firstName}
							</div>
						)}
						<p className="text-[#818182]">Active 6 minutes ago</p>
					</div>
					<div className="flex flex-row gap-[5px]">
						<FontAwesomeIcon
							icon={faStar}
							className="text-[#E6C3C1]"
						></FontAwesomeIcon>
						<FontAwesomeIcon
							icon={faStar}
							className="text-[#E6C3C1]"
						></FontAwesomeIcon>
						<FontAwesomeIcon
							icon={faStar}
							className="text-[#E6C3C1]"
						></FontAwesomeIcon>
						<FontAwesomeIcon
							icon={faStar}
							className="text-[#E6C3C1]"
						></FontAwesomeIcon>
						<FontAwesomeIcon
							icon={faStar}
							className="text-[#E6C3C1]"
						></FontAwesomeIcon>
					</div>

					{isEditing ? (
						<input
							className="text-lg text-[#224957] rounded-xl break-words border-2 border-[#809590] "
							type="text"
							// placeholder={user?.description}
							name="description"
							value={input?.description}
							onChange={handleChangeInput}
						/>
					) : (
						<div className="text-[#224957] break-words">
							{user?.description}
						</div>
					)}

					{isEditing ? (
						<div className="flex justify-center items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
							rate:
							<input
								className="w-14 text-center "
								type="text"
								// placeholder={user?.rate}
								name="rate"
								value={input?.rate}
								onChange={handleChangeInput}
							/>
							THB/hr
						</div>
					) : (
						<div className="flex justify-around items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]">
							rate:
							<div className="text-center">{user?.rate}</div>
							THB/hr
						</div>
					)}
					<div className="flex flex-row gap-[20px]">
						<div
							onClick={openModalWallet}
							className="flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[180px] h-[60px] cursor-pointer hover:bg-[#79AB9D]"
						>
							Wallet: 50,000 THB
						</div>
						<div
							onClick={openModalAvailable}
							className="flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] cursor-pointer hover:bg-[#79AB9D]"
						>
							Availability
						</div>
						<div
							className="flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px] cursor-pointer hover:bg-[#79AB9D]"
							onClick={toggleEditing}
						>
							Edit profile
						</div>
					</div>
				</div>
			</div>
			<ModalWallet
				isOpenModalWallet={isOpenModalWallet}
				closeModalWallet={closeModalWallet}
			/>
			<ModalAvailable
				isOpenModalAvailable={isOpenModalAvailable}
				closeModalAvailable={closeModalAvailable}
			/>
		</div>
	);
}

export default Bio;
