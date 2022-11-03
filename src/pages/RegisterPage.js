import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
	const { register } = useAuth();
	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		mobile: "",
		birthDate: "",
		gender: "NOT_SPECIFIC",
		password: "",
		nationality: "",
		age: ""
	});
	const [isPasswordMatched, setIsPasswordMatched] = useState(false);
	const [passwordInput, setPasswordInput] = useState({
		password: "",
		confirmPassword: ""
	});

	const [image, setImage] = useState(null);
	const inputEl = useRef(null);
	const navigate = useNavigate();

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			for (const key in input) {
				formData.append(`${key}`, input[key]);
			}
			for (let item of image) {
				formData.append("idCardImage", item);
			}
			const res = await register(formData);
			alert(`555${res?.data?.message}`);
			navigate("/login");
		} catch (err) {
			console.log(err);
		}
	};
	const validatePassword = () => {
		if (
			passwordInput.password === passwordInput.confirmPassword &&
			passwordInput.password !== "" &&
			passwordInput.confirmPassword !== ""
		) {
			setIsPasswordMatched(true);
			setInput({ ...input, password: passwordInput.password });
		} else {
			setIsPasswordMatched(false);
			setInput({ ...input, password: "" });
		}
	};
	const handlePasswordInput = (e) => {
		setPasswordInput({ ...passwordInput, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		validatePassword();
	}, [passwordInput]);

	return (
		<>
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
				<div className=" bg-white rounded-lg shadow flex justify-center">
					<div className=" space-y-8 px-[10px] py-[50px]">
						<h1 className="text-[50px] font-bold text-[#224957]  text-center">
							Sign up
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							action="#"
							onSubmit={handleSubmitForm}
						>
							<div className="flex space-x-6">
								<div>
									<input
										type="firstName"
										name="firstName"
										id="firstName"
										className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] ${
											input.firstName ? "" : "border-red-500 border-2"
										}`}
										placeholder="First name"
										required=""
										onChange={handleChangeInput}
									/>
								</div>
								<div>
									<input
										type="lastName"
										name="lastName"
										id="lastName"
										className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] ${
											input.lastName ? "" : "border-red-500 border-2"
										}`}
										placeholder="Last name"
										required=""
										onChange={handleChangeInput}
									/>
								</div>
							</div>
							<div>
								<input
									type="email"
									name="email"
									id="email"
									className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] ${
										input.email ? "" : "border-red-500 border-2"
									}`}
									placeholder="E-mail"
									required=""
									onChange={handleChangeInput}
								/>
							</div>
							<div>
								<input
									type="mobile"
									name="mobile"
									id="mobile"
									className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] ${
										input.mobile ? "" : "border-red-500 border-2"
									}`}
									placeholder="Phone number"
									required="required"
									onChange={handleChangeInput}
								/>
							</div>
							<div>
								<input
									type="text"
									name="nationality"
									id="nationality"
									className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] ${
										input.nationality ? "" : "border-red-500 border-2"
									}`}
									placeholder="Nationality"
									required=""
									onChange={handleChangeInput}
								/>
							</div>
							<div className="flex space-x-10">
								<div>
									<input
										className={` text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] ${
											input.birthDate ? "" : "border-red-500 border-2"
										}`}
										type="date"
										name="birthDate"
										placeholder="Birth date"
										onChange={handleChangeInput}
									/>
								</div>
								<div>
									<select
										type="gender"
										name="gender"
										id="gender"
										defaultValue="NOT_SPECIFIC"
										className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] text-date ${
											input.gender ? "" : "border-red-500 border-2"
										}`}
										placeholder="Gender"
										required=""
										onChange={handleChangeInput}
									>
										<option value="MALE">Male</option>
										<option value="FEMALE">Female</option>
										<option value="NOT_SPECIFIC">Not specific</option>
									</select>
								</div>
							</div>
							<div>
								<input
									type="password"
									name="password"
									id="password"
									className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white  bg-[#9AC0B5] ${
										passwordInput.password && isPasswordMatched
											? ""
											: "border-red-500 border-2"
									}`}
									placeholder="Password"
									required=""
									onChange={handlePasswordInput}
								/>
							</div>
							<div>
								<input
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									className={`text-white text-sm rounded-lg block w-full p-2.5 placeholder-white  bg-[#9AC0B5] ${
										passwordInput.confirmPassword && isPasswordMatched
											? ""
											: "border-red-500 border-2"
									}`}
									placeholder="Confirm Password"
									required=""
									onChange={handlePasswordInput}
								/>
							</div>
							<div>
								<input
									ref={inputEl}
									type="file"
									className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white  bg-[#9AC0B5]"
									onChange={(e) => {
										if (e.target.files.length <= 3) {
											setImage(e.target.files);
										} else {
											inputEl.current.value = "";
											alert("Only 3 files accepted.");
											setImage([]);
										}
									}}
								/>
							</div>

							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="terms"
										aria-describedby="terms"
										type="checkbox"
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										required=""
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										for="terms"
										className="font-light text-gray-500 dark:text-gray-300"
									>
										I accept the
										<Link
											className="font-medium text-primary-600 hover:underline dark:text-primary-500"
											href="#"
										>
											Terms and Conditions
										</Link>
									</label>
								</div>
							</div>
							<button
								type="submit"
								className={`w-full text-[#224957] ${
									isPasswordMatched ||
									(passwordInput.password !== "" &&
										passwordInput.confirmPassword !== "")
										? " bg-[#F5F5F5] "
										: "bg-gray-300 "
								} hover:bg-[3bg-[#9AC0B5] rounded-lg text-[20px] px-5 py-2.5 text-center shadow-lg`}
								disabled={
									!isPasswordMatched ||
									passwordInput.password === "" ||
									passwordInput.confirmPassword === ""
								}
							>
								Submit
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{" "}
								<Link to="/login" className="font-medium text-primary-600">
									Login here
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default RegisterPage;
