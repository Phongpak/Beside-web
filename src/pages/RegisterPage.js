function RegisterPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className=" bg-white rounded-lg shadow flex justify-center">
          <div className=" space-y-8 px-[10px] py-[50px]">
            <h1 className="text-[50px] font-bold text-[#224957]  text-center">
              Sign up
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="flex space-x-6">
                <div>
                  <input
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5]"
                    placeholder="First name"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5]"
                    placeholder="Last name"
                    required=""
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5]"
                  placeholder="E-mail"
                  required=""
                />
              </div>
              <div>
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5]"
                  placeholder="Phone number"
                  required=""
                />
              </div>
              <div className="flex space-x-10">
                <div>
                  <input
                    className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] "
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    placeholder="Birth date"
                  />
                </div>
                <div>
                  <input
                    type="gender"
                    name="gender"
                    id="gender"
                    className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5] text-date"
                    placeholder="Gender"
                    required=""
                  />
                </div>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white bg-[#9AC0B5]"
                  placeholder="Password"
                  required=""
                />
              </div>
              <div>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="text-white text-sm rounded-lg block w-full p-2.5 placeholder-white  bg-[#9AC0B5]"
                  placeholder="Confirm Password"
                  required=""
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
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-[#224957] bg-[#F5F5F5] hover:bg-[3bg-[#9AC0B5] rounded-lg text-[20px] px-5 py-2.5 text-center shadow-lg"
              >
                Submit
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a href="#" className="font-medium text-primary-600">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
