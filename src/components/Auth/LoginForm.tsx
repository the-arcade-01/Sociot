import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserLoginBody } from "../../utils/types";
import { loginUser } from "../../services/api/user";
import { toastResponse } from "../../utils/toast";
import useUser from "../../hooks/useUser";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { saveUserId, saveToken, getUserDetails } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body: UserLoginBody = {
      email,
      password,
    };

    const response = await loginUser(body);
    toastResponse(response.meta.statusCode, response.meta.message);
    saveToken(response.data.token);
    saveUserId(response.data.userId);
    getUserDetails();
    navigate("/");

    setEmail("");
    setPassword("");
  };

  return (
    <form
      className="w-[400px] h-[300px] border border-gray-200 rounded-lg flex flex-col items-center p-5 justify-between"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl">Welcome</h1>
      <div className="flex flex-col items-center gap-5">
        <input
          className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
          placeholder="email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
        <input
          className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg text-white bg-green-500 font-medium"
      >
        Login
      </button>
      <p className="text-gray-800">
        Don't have an account?{" "}
        <Link to="/auth/register" className="underline text-purple-500">
          Register
        </Link>
      </p>
    </form>
  );
};
