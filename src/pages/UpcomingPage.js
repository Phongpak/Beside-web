import { useState } from 'react';

function Upcoming() {
	const [showChat, setShowChat] = useState(false);
	return (
		<div className='flex flex-col gap-[20px] w-[100vw] px-60'>
			<div className='flex justify-between pt-[20px]'>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
					Info
				</div>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
					Pending Confirmation
				</div>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white font-medium rounded-[15px] min-w-[190px] h-[50px]'>
					Upcoming
				</div>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
					Completed
				</div>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] min-w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
					Wallet History
				</div>
			</div>
			<input
				className='min-w-[750px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]'
				placeholder='Search here...'
			/>
			<div className='flex flex-row gap-[10px]'>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white text-[14px] font-medium rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369]'>
					Your Provider
				</div>
				<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] text-[14px] font-medium border-2 border-[#9AC0B5] rounded-[15px] min-w-[130px] h-[30px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
					Your Customer
				</div>
			</div>
			<div className='text-[#C4C4C4]'>Recents :</div>
			<div className='flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]'>
				<div className='flex flex-row justify-between items-center w-[95%] h-[85%]'>
					<div className='flex flex-col justify-center items-center ml-[40px]'>
						<div className='flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden'>
							<img
								className='h-full'
								src={
									'https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a'
								}
							/>
						</div>
						<div className='font-medium text-[#224957]'>Ruka Chan</div>
					</div>
					<div className='flex flex-row gap-[20px] h-[100%] text-[#224957]'>
						<div className='flex flex-col justify-between w-[100px] font-medium'>
							<div>Date:</div>
							<div>Time:</div>
							<div>Location:</div>
							<div>Deal Price:</div>
						</div>
						<div className='flex flex-col justify-between w-[325px] font-medium'>
							<div>Monday 10 September 2022</div>
							<div>10:00 - 18:00</div>
							<div>Siam Paragon</div>
							<div>8,000 THB</div>
						</div>
					</div>
					<button className='flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
						Start chatting now
					</button>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center min-w-[1056px] h-[150px] border-4 border-[#9AC0B5] rounded-[15px]'>
				<div className='flex flex-row justify-between items-center w-[95%] h-[85%]'>
					<div className='flex flex-col justify-center items-center ml-[40px]'>
						<div className='flex justify-center items-center border w-[100px] h-[100px] rounded-[100%] overflow-hidden'>
							<img
								className='h-full'
								src={
									'https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a'
								}
							/>
						</div>
						<div className='font-medium text-[#224957]'>Ruka Chan</div>
					</div>
					<div className='flex flex-row gap-[20px] h-[100%] text-[#224957]'>
						<div className='flex flex-col justify-between w-[100px] font-medium'>
							<div>Date:</div>
							<div>Time:</div>
							<div>Location:</div>
							<div>Deal Price:</div>
						</div>
						<div className='flex flex-col justify-between w-[325px] font-medium'>
							<div>Monday 10 September 2022</div>
							<div>10:00 - 18:00</div>
							<div>Siam Paragon</div>
							<div>8,000 THB</div>
						</div>
					</div>
					{showChat ? (
						<button className='flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px] border-2 border-[#9AC0B5] rounded-[15px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
							Start chatting now
						</button>
					) : (
						<div className='flex justify-center items-center self-end font-medium text-[#224957] w-[175px] h-[40px]'></div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Upcoming;
