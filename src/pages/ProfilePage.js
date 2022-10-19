import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faEnvelope,
	faAddressCard,
	faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
	faSquareFacebook,
	faSquareInstagram
} from '@fortawesome/free-brands-svg-icons';

function ProfilePage() {
	return (
		<div>
			<div className='flex items-center bg-[#F4F2F2] h-[300px] w-[100vw] px-60'>
				<div className='flex items-center justify-between h-[250px] w-[1000px]'>
					<div className='flex justify-center w-[500px]'>
						<img
							className='rounded-[5px]'
							src={
								'https://preview.redd.it/i13zau5gs1j51.jpg?auto=webp&s=77ac0d41d59d1e9aa774f218ad5f9f3ff18e905a'
							}
							width='325'
						/>
					</div>
					<div className='flex flex-col justify-center w-[500px] gap-[10px]'>
						<div>
							<div className='text-[30px] text-[#224957] font-bold'>
								nayeoony
							</div>
							<small className='text-[#818182]'>Active 6 minutes ago</small>
						</div>
						<div className='flex flex-row gap-[5px]'>
							<FontAwesomeIcon
								icon={faStar}
								className='text-[#E6C3C1]'
							></FontAwesomeIcon>
							<FontAwesomeIcon
								icon={faStar}
								className='text-[#E6C3C1]'
							></FontAwesomeIcon>
							<FontAwesomeIcon
								icon={faStar}
								className='text-[#E6C3C1]'
							></FontAwesomeIcon>
							<FontAwesomeIcon
								icon={faStar}
								className='text-[#E6C3C1]'
							></FontAwesomeIcon>
							<FontAwesomeIcon
								icon={faStar}
								className='text-[#E6C3C1]'
							></FontAwesomeIcon>
						</div>
						<div className='text-[#224957] break-words'>Sawad dee ka</div>
						<div className='flex justify-center items-center text-[#224957] bg-white border-2 border-[#9AC0B5] w-[170px] h-[30px] rounded-[50px]'>
							rate: 10,000 THB/hr
						</div>
						<div className='flex flex-row gap-[20px]'>
							<div className='flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[180px] h-[60px]'>
								Wallet: 50,000 THB
							</div>
							<div className='flex flex-row justify-center items-center bg-[#9AC0B5] text-white font-bold rounded-[20px] w-[140px] h-[60px]'>
								Availability
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-[100vw] h-[650px] px-60'>
				<div className='flex justify-between py-[20px]'>
					<div className='cursor-pointer flex flex-row justify-center items-center bg-[#506369] text-white font-medium rounded-[15px] w-[190px] h-[50px]'>
						Info
					</div>
					<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
						Pending Confirmation
					</div>
					<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
						Upcoming
					</div>
					<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
						Completed
					</div>
					<div className='cursor-pointer flex flex-row justify-center items-center bg-white text-[#224957] border-2 border-[#9AC0B5] font-medium rounded-[15px] w-[190px] h-[50px] hover:bg-[#506369] hover:text-white transition delay-20 hover:border-0'>
						Wallet History
					</div>
				</div>
				<div className='flex flex-row justify-between'>
					<div className='flex flex-col w-[350px] h-[650px] gap-[12px] text-[#224957]'>
						<div className='flex flex-row justify-center items-center w-[350px] h-[150px] border-2 border-[#224957] rounded-[10px]'>
							<div className='flex flex-col w-[90%] h-[90%] gap-[10px]'>
								<div className='text-[20px] font-medium'>Information</div>
								<div className='flex flex-row justify-between text-sm'>
									<div>Join</div>
									<div>01 January 2022</div>
								</div>
								<div className='flex flex-row justify-between text-sm'>
									<div>Work Sold</div>
									<div>150 Times</div>
								</div>
								<div className='flex flex-row justify-between text-sm'>
									<div>Success Rate</div>
									<div>99%</div>
								</div>
							</div>
						</div>
						<div className='flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]'>
							<div className='flex flex-col w-[90%] h-[90%] gap-[10px]'>
								<div className='text-[20px] font-medium'>Verified</div>
								<div className='flex flex-row justify-start gap-[15px]'>
									<FontAwesomeIcon
										icon={faEnvelope}
										className='text-[#809590] text-[25px]'
									></FontAwesomeIcon>
									<FontAwesomeIcon
										icon={faAddressCard}
										className='text-[#809590] text-[25px]'
									></FontAwesomeIcon>
									<FontAwesomeIcon
										icon={faPhone}
										className='text-[#809590] text-[25px]'
									></FontAwesomeIcon>
									<FontAwesomeIcon
										icon={faSquareFacebook}
										className='text-[#809590] text-[25px]'
									></FontAwesomeIcon>
									<FontAwesomeIcon
										icon={faSquareInstagram}
										className='text-[#809590] text-[25px]'
									></FontAwesomeIcon>
								</div>
							</div>
						</div>
						<div className='flex flex-row justify-center items-center w-[350px] h-[150px] border-2 border-[#224957] rounded-[10px]'>
							<div className='flex flex-col w-[90%] h-[90%] gap-[10px]'>
								<div className='text-[20px] font-medium'>Personal Details</div>
								<div className='flex flex-row justify-between text-sm'>
									<div>Date of birth:</div>
									<div>10 August 1994</div>
								</div>
								<div className='flex flex-row justify-between text-sm'>
									<div>Gender:</div>
									<div>Not specific</div>
								</div>
								<div className='flex flex-row justify-between text-sm'>
									<div>Interest:</div>
									<div>Men</div>
								</div>
							</div>
						</div>
						<div className='flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]'>
							<div className='flex flex-col w-[90%] h-[90%] gap-[10px]'>
								<div className='text-[20px] font-medium'>Language</div>
								<div className='flex flex-row justify-start gap-[15px] text-sm'>
									<div>Thai, English, Chinese</div>
								</div>
							</div>
						</div>
						<div className='flex flex-row justify-center items-center w-[350px] h-[90px] border-2 border-[#224957] rounded-[10px]'>
							<div className='flex flex-col w-[90%] h-[90%] gap-[10px]'>
								<div className='text-[20px] font-medium'>Hobby</div>
								<div className='flex flex-row justify-start gap-[15px] text-sm'>
									<div>Reading Book, Play Game, Piano, Football</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col w-[650px] h-[650px]'>
						<div className='flex flex-col gap-[10px]'>
							<div className='text-[20px] text-[#224957] font-medium'>
								My reviews (150)
							</div>
							<input
								className='w-[375px] h-[30px] rounded-[20px] border-2 border-[#9AC0B5] pl-[20px] placeholder-[#C4C4C4]'
								placeholder='Search here...'
							/>
							<div className='flex flex-row flex-wrap gap-[8px]'>
								<div className='flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]'>
									<div className='flex flex-row w-[90%] h-[90%] gap-[10px]'>
										<div className='flex flex-col gap-[5px]'>
											<div className='text-[17px] text-[#224957] font-medium'>
												"Siam paragon"
											</div>
											<img
												src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
												width='100'
											/>
											<div className='flex items-center gap-[5px] text-[#E6C3C1] text-[10px]'>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<div classname>4.5</div>
											</div>
										</div>
										<div className='flex flex-col gap-[5px]'>
											<div className='flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words'>
												<div className='w-[90%] h-[90%]'>
													Test message D Mak Mak Ka Test Review eiei
												</div>
											</div>
											<div className='flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]'>
												<div className='flex flex-row gap-[5px] w-[90%] h-[90%]'>
													<div className='flex flex-col'>
														<img
															className='rounded-[100%]'
															src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU'
															width='30'
														/>
													</div>
													<div className='flex flex-col gap-[5px]'>
														<div className='flex flex-col'>
															<div className='text-[#224957] text-[12px] font-medium'>
																Mackensy
															</div>
															<div className='text-[#818182] text-[8px]'>
																Review date 01/01/2022
															</div>
														</div>
														<div className='text-[#224957] text-[9px]'>
															"Best service I ever had !!!"
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]'>
									<div className='flex flex-row w-[90%] h-[90%] gap-[10px]'>
										<div className='flex flex-col gap-[5px]'>
											<div className='text-[17px] text-[#224957] font-medium'>
												"Siam paragon"
											</div>
											<img
												src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
												width='100'
											/>
											<div className='flex items-center gap-[5px] text-[#E6C3C1] text-[10px]'>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<div classname>4.5</div>
											</div>
										</div>
										<div className='flex flex-col gap-[5px]'>
											<div className='flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words'>
												<div className='w-[90%] h-[90%]'>
													Test message D Mak Mak Ka Test Review eiei
												</div>
											</div>
											<div className='flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]'>
												<div className='flex flex-row gap-[5px] w-[90%] h-[90%]'>
													<div className='flex flex-col'>
														<img
															className='rounded-[100%]'
															src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU'
															width='30'
														/>
													</div>
													<div className='flex flex-col gap-[5px]'>
														<div className='flex flex-col'>
															<div className='text-[#224957] text-[12px] font-medium'>
																Mackensy
															</div>
															<div className='text-[#818182] text-[8px]'>
																Review date 01/01/2022
															</div>
														</div>
														<div className='text-[#224957] text-[9px]'>
															"Best service I ever had !!!"
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]'>
									<div className='flex flex-row w-[90%] h-[90%] gap-[10px]'>
										<div className='flex flex-col gap-[5px]'>
											<div className='text-[17px] text-[#224957] font-medium'>
												"Siam paragon"
											</div>
											<img
												src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
												width='100'
											/>
											<div className='flex items-center gap-[5px] text-[#E6C3C1] text-[10px]'>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<div classname>4.5</div>
											</div>
										</div>
										<div className='flex flex-col gap-[5px]'>
											<div className='flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words'>
												<div className='w-[90%] h-[90%]'>
													Test message D Mak Mak Ka Test Review eiei
												</div>
											</div>
											<div className='flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]'>
												<div className='flex flex-row gap-[5px] w-[90%] h-[90%]'>
													<div className='flex flex-col'>
														<img
															className='rounded-[100%]'
															src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU'
															width='30'
														/>
													</div>
													<div className='flex flex-col gap-[5px]'>
														<div className='flex flex-col'>
															<div className='text-[#224957] text-[12px] font-medium'>
																Mackensy
															</div>
															<div className='text-[#818182] text-[8px]'>
																Review date 01/01/2022
															</div>
														</div>
														<div className='text-[#224957] text-[9px]'>
															"Best service I ever had !!!"
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]'>
									<div className='flex flex-row w-[90%] h-[90%] gap-[10px]'>
										<div className='flex flex-col gap-[5px]'>
											<div className='text-[17px] text-[#224957] font-medium'>
												"Siam paragon"
											</div>
											<img
												src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
												width='100'
											/>
											<div className='flex items-center gap-[5px] text-[#E6C3C1] text-[10px]'>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<div classname>4.5</div>
											</div>
										</div>
										<div className='flex flex-col gap-[5px]'>
											<div className='flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words'>
												<div className='w-[90%] h-[90%]'>
													Test message D Mak Mak Ka Test Review eiei
												</div>
											</div>
											<div className='flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]'>
												<div className='flex flex-row gap-[5px] w-[90%] h-[90%]'>
													<div className='flex flex-col'>
														<img
															className='rounded-[100%]'
															src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU'
															width='30'
														/>
													</div>
													<div className='flex flex-col gap-[5px]'>
														<div className='flex flex-col'>
															<div className='text-[#224957] text-[12px] font-medium'>
																Mackensy
															</div>
															<div className='text-[#818182] text-[8px]'>
																Review date 01/01/2022
															</div>
														</div>
														<div className='text-[#224957] text-[9px]'>
															"Best service I ever had !!!"
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]'>
									<div className='flex flex-row w-[90%] h-[90%] gap-[10px]'>
										<div className='flex flex-col gap-[5px]'>
											<div className='text-[17px] text-[#224957] font-medium'>
												"Siam paragon"
											</div>
											<img
												src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
												width='100'
											/>
											<div className='flex items-center gap-[5px] text-[#E6C3C1] text-[10px]'>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<div classname>4.5</div>
											</div>
										</div>
										<div className='flex flex-col gap-[5px]'>
											<div className='flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words'>
												<div className='w-[90%] h-[90%]'>
													Test message D Mak Mak Ka Test Review eiei
												</div>
											</div>
											<div className='flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]'>
												<div className='flex flex-row gap-[5px] w-[90%] h-[90%]'>
													<div className='flex flex-col'>
														<img
															className='rounded-[100%]'
															src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU'
															width='30'
														/>
													</div>
													<div className='flex flex-col gap-[5px]'>
														<div className='flex flex-col'>
															<div className='text-[#224957] text-[12px] font-medium'>
																Mackensy
															</div>
															<div className='text-[#818182] text-[8px]'>
																Review date 01/01/2022
															</div>
														</div>
														<div className='text-[#224957] text-[9px]'>
															"Best service I ever had !!!"
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex flex-row justify-center items-center w-[310px] h-[175px] border-2 border-[#9AC0B5] rounded-[10px]'>
									<div className='flex flex-row w-[90%] h-[90%] gap-[10px]'>
										<div className='flex flex-col gap-[5px]'>
											<div className='text-[17px] text-[#224957] font-medium'>
												"Siam paragon"
											</div>
											<img
												src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'
												width='100'
											/>
											<div className='flex items-center gap-[5px] text-[#E6C3C1] text-[10px]'>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
												<div classname>4.5</div>
											</div>
										</div>
										<div className='flex flex-col gap-[5px]'>
											<div className='flex justify-center items-center text-[10px] w-[140px] h-[70px] border-2 border-[#9AC0B5] rounded-[5px] break-words'>
												<div className='w-[90%] h-[90%]'>
													Test message D Mak Mak Ka Test Review eiei
												</div>
											</div>
											<div className='flex justify-center items-center w-[140px] h-[80px] border-2 border-[#9AC0B5] rounded-[5px]'>
												<div className='flex flex-row gap-[5px] w-[90%] h-[90%]'>
													<div className='flex flex-col'>
														<img
															className='rounded-[100%]'
															src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRoAMwNQfMniBnAsehPj6SF_qLYtNrUuSsg&usqp=CAU'
															width='30'
														/>
													</div>
													<div className='flex flex-col gap-[5px]'>
														<div className='flex flex-col'>
															<div className='text-[#224957] text-[12px] font-medium'>
																Mackensy
															</div>
															<div className='text-[#818182] text-[8px]'>
																Review date 01/01/2022
															</div>
														</div>
														<div className='text-[#224957] text-[9px]'>
															"Best service I ever had !!!"
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
