import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/api/user";
import { UserRegisterBody } from "../../utils/types";

export const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body: UserRegisterBody = {
            username,
            email,
            password,
        };
        const response = await registerUser(body);
        console.log(response.meta);

        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <form
            className="w-[400px] h-[400px] border border-gray-200 rounded-lg flex flex-col items-center p-5 justify-between"
            onSubmit={handleSubmit}
        >
            <h1 className="text-xl">Register</h1>
            <div className="flex flex-col items-center gap-5">
                <input
                    className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
                    placeholder="username"
                    onChange={handleChangeUsername}
                    value={username}
                />

                <input
                    className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
                    placeholder="email"
                    onChange={handleChangeEmail}
                    type="email"
                    value={email}
                />

                <input
                    className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
                    placeholder="password"
                    onChange={handleChangePassword}
                    type="password"
                    value={password}
                />
            </div>
            <button
                className="px-4 py-2 rounded-lg text-white bg-green-500 font-medium"
                type="submit"
            >
                Signup
            </button>
            <p className="text-gray-800">
                Already have an account?{" "}
                <Link to="/auth/login" className="underline text-purple-500">
                    Login
                </Link>
            </p>
        </form>
    );
};
