function LoginPage() {
	return (
		<div className='flex items-center justify-center h-[745.6px]'>
			<form className='flex flex-col items-center justify-center w-[800px] h-[500px] gap-[30px]'>
				<div className='text-[60px] text-[#224957]'>Sign in</div>
				<div className='text-[#224957]'>
					Sign in and start managing your candidates!
				</div>
				<input
					className='w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white'
					placeholder='Email'
				/>
				<input
					className='w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white'
					placeholder='Password'
					type='password'
				/>
				<div className='flex w-[400px]'>
					<div className='flex flex-row gap-[10px]'>
						<input type='checkbox' name='remember' />
						<label className='text-[#224957]' htmlFor='remember'>
							Remember me
						</label>
					</div>
				</div>
				<button className='bg-gray-200 shadow-md hover:shadow-xl transition delay-20 text-[#224957] w-[400px] h-[50px] rounded-[10px]'>
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginPage;
