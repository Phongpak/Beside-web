import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function LoginPage() {
  const { login } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(input);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center h-[745.6px]">
      <form
        className="flex flex-col items-center justify-center w-[800px] h-[500px] gap-[30px]"
        onSubmit={handleSubmitForm}
      >
        <div className="text-[60px] text-[#224957]">Sign in</div>
        <div className="text-[#224957]">
          Sign in and start managing your candidates!
        </div>
        <input
          className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
          placeholder="Email"
          name="email"
          onChange={handleChangeInput}
        />
        <input
          className="w-[400px] h-[50px] bg-[#9AC0B5] rounded-[10px] pl-[20px] placeholder-white text-white"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChangeInput}
        />
        <div className="flex w-[400px]">
          <div className="flex flex-row gap-[10px]">
            <input type="checkbox" name="remember" />
            <label className="text-[#224957]" htmlFor="remember">
              Remember me
            </label>
          </div>
        </div>
        <button className="bg-gray-200 shadow-md hover:shadow-xl transition delay-20 text-[#224957] w-[400px] h-[50px] rounded-[10px]">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
