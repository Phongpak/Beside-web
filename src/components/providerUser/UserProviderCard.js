import { useState } from "react";
import ProviderUserModal from "../../pages/admin/UserProviderModal";
import * as adminService from "../../api/adminApi";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

function UserProviderCard({ user }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const accept = async (id) => {
		await adminService.updateUser(id, { providerRequestStatus: "SUCCESS" });
		window.location.reload();
		closeModal();
	};
	const deny = async (id) => {
		await adminService.updateUser(id, { providerRequestStatus: "REJECT" });
		window.location.reload();
		closeModal();
	};
	return (
		<>
			<div className="flex justify-center p-2 min-w-[300px] border-4 border-[#9AC0B5] rounded-[15px]">
				<div className="flex flex-col gap-5 justify-between items-center  ">
					<div className="flex flex-row gap-5  text-[#224957] mx-auto ">
						<div className="flex flex-col justify-between  font-medium">
							<div>First name:</div>
							<div>Last name:</div>
							<div>Email:</div>
							<div>Nationality:</div>
							<div>Phone:</div>
						</div>
						<div className="flex flex-col justify-between ">
							<div>{user.firstName}</div>
							<div>{user.lastName}</div>
							<div>{user.email}</div>
							<div>{user.nationality}</div>
							<div>{user.mobile}</div>
						</div>
					</div>
					<div className="flex flex-row justify-center gap-[20px] self-end ">
						{user.providerRequestStatus === "SUCCESS" ? (
							<button
								onClick={openModal}
								className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
							>
								Verified
							</button>
						) : user.providerRequestStatus == null ? (
							<button className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0">
								no Request
							</button>
						) : user.providerRequestStatus == "REJECT" ? (
							<button className="disabled flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0">
								Rejected
							</button>
						) : (
							<button
								onClick={openModal}
								className="flex flex-row justify-center items-center w-[100px] h-[40px] border-2 text-[#224957] border-[#9AC0B5] rounded-[20px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0"
							>
								Verification
							</button>
						)}
					</div>
				</div>
			</div>
			<ProviderUserModal
				isOpen={isOpen}
				closeModal={closeModal}
				user={user}
				accept={accept}
				deny={deny}
			/>
		</>
	);
}

export default UserProviderCard;
