import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import {
  UserUpdateUserPasswordBody,
  UserUpdateUsernameBody,
} from "../../utils/types";
import {
  deleteUser,
  updateUserById,
  updateUserPasswordById,
} from "../../services/api/user";
import { toastResponse } from "../../utils/toast";

export const AccountDetails = () => {
  const navigate = useNavigate();
  const token = useUser((state) => state.token);
  const userDetails = useUser((state) => state.userDetails);
  const removeUserState = useUser((state) => state.removeUserState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: UserUpdateUsernameBody = {
      username,
    };
    const response = await updateUserById(userDetails.userId, body, token);
    toastResponse(response.meta.statusCode, response.meta.message);
    setUsername("");
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: UserUpdateUserPasswordBody = {
      password,
    };
    const response = await updateUserPasswordById(
      userDetails.userId,
      body,
      token
    );
    toastResponse(response.meta.statusCode, response.meta.message);
    setPassword("");
  };

  const handleDelete = async () => {
    const response = await deleteUser(userDetails.userId, token);
    toastResponse(response.meta.statusCode, response.meta.message);
    removeUserState();
    navigate("/");
  };

  return (
    <div className="px-2 flex flex-col gap-10 items-center">
      <form
        className="flex flex-col justify-center items-center gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start gap-5 w-[500px]">
          <div className="flex justify-between items-center w-full">
            <label>Username</label>
            <input
              className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
              placeholder={userDetails.username}
              onChange={handleChangeUsername}
              value={username}
              required
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <label>Email</label>
            <input
              className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
              placeholder={userDetails.email}
              type="email"
              readOnly
            />
          </div>
        </div>
        <div className="flex justify-end items-center w-[500px]">
          <button
            className="px-4 py-2 rounded-lg text-white bg-green-500 font-medium"
            type="submit"
          >
            Update Account
          </button>
        </div>
      </form>
      <form
        className="flex flex-col justify-center items-center gap-10"
        onSubmit={handlePasswordSubmit}
      >
        <div className="flex flex-col items-start gap-5 w-[500px]">
          <div className="flex justify-between items-center w-full">
            <label>Password</label>
            <input
              className="w-72 py-2 px-4 outline-none border-2 border-gray-200 rounded-lg text-gray-600 "
              placeholder="Want to change password?"
              onChange={handleChangePassword}
              type="password"
              value={password}
              required
            />
          </div>

          <div className="flex justify-end items-center w-[500px]">
            <button
              className="px-4 py-2 rounded-lg text-white bg-cyan-500 font-medium"
              type="submit"
            >
              Update Password
            </button>
          </div>
        </div>
      </form>

      <div className="flex items-center w-[500px] justify-between">
        <button
          className="px-4 py-2 rounded-lg text-white bg-red-500 font-medium"
          onClick={() => toastResponse(0, "Double click for deleting account")}
          onDoubleClick={handleDelete}
          type="button"
        >
          Delete Account
        </button>
        <p>Want to delete account?</p>
      </div>
    </div>
  );
};
