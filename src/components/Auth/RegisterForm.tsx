import { Link } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <div className="w-[400px] h-[400px] border border-gray-200 rounded-lg flex flex-col items-center p-5 justify-between">
      <h1 className="text-xl">Register</h1>
      <div className="flex flex-col items-center gap-5">
        <input
          className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
          placeholder="username"
        />

        <input
          className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
          placeholder="email"
        />

        <input
          className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
          placeholder="password"
        />
      </div>
      <button className="px-4 py-2 rounded-lg text-white bg-green-500 font-medium">
        Signup
      </button>
      <p className="text-gray-800">
        Already have an account?{" "}
        <Link to="/auth/login" className="underline text-purple-500">
          Login
        </Link>
      </p>
    </div>
  );
};
