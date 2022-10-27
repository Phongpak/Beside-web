import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ModalPending({ isOpen, closeModal }) {
	return (
		<>
			{isOpen ? (
				<>
					<div
						onClick={closeModal}
						className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className='relative w-auto my-6 mx-auto max-w-3xl'
						>
							<div className='border-4 border-[#9AC0B5] rounded-lg min-w-[775px] min-h-[500px] shadow-lg relative flex flex-row justify-center items-center w-full bg-white outline-none focus:outline-none'>
								<div className='flex flex-col min-w-[725px] min-h-[400px] gap-[10px]'>
									<button className='self-end text-[30px] text-gray-400'>
										<FontAwesomeIcon icon={faXmark} onClick={closeModal} />
									</button>
									<div className='flex flex-row justify-center items-center gap-[25px]'>
										<div className='flex flex-col gap-[15px] min-w-[325px] min-h-[350px]'>
											<div className='text-[20px] text-[#224957] font-medium'>
												nayeooony
											</div>
											<img
												src={
													'https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a'
												}
												width='325'
											/>
										</div>
										<div className='flex flex-row justify-center min-w-[325px] min-h-[330px] self-start border-4 border-[#9AC0B5] rounded-[20px]'>
											<div className='flex flex-col w-[295px] h-[150px] pt-[10px] gap-[10px]'>
												<div className='flex flex-row gap-[20px] text-[#224957] text-[14px]'>
													<div className='flex flex-col justify-between w-[140px] gap-[10px] font-medium'>
														<div>Date:</div>
														<div>Time:</div>
														<div>Location:</div>
														<div>Deal Price:</div>
													</div>
													<div className='flex flex-col justify-between w-[400px] gap-[10px] font-medium'>
														<div>Monday 10 September 2022</div>
														<div>10:00 - 18:00</div>
														<div>Siam Paragon</div>
														<div>8,000 THB</div>
													</div>
												</div>
												<div className='font-medium text-[#224957] text-[14px]'>
													Description:
												</div>
												<div className='font-medium text-[#224957] text-[14px] break-words'>
													อยากจะจ้างมาช่วยตัดสวนให้หน่อยนะครับ กินข้าว กินน้ำ
													ดูประการัง เล่นเกม เล่นกีฬา ทำทุกอย่างเลย กินข้าว
													กินบุฟเฟ่ด้วยนะครับ
												</div>
											</div>
										</div>
									</div>
									<div className='flex flex-row justify-center gap-[20px]'>
										<button className='flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#9AC0B5] hover:text-white transition delay-20 hover:border-0'>
											ACCEPT
										</button>
										<button className='flex flex-row justify-center items-center w-[100px] h-[40px] border-2 border-[#E6C3C1] rounded-[15px] hover:bg-[#E6C3C1] hover:text-white transition delay-20 hover:border-0'>
											DENY
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
}

export default ModalPending;
