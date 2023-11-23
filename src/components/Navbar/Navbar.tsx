import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";

import SearchBar from "../Search/SearchBar";
import useUser from "../../hooks/useUser";
import { Logout } from "../Auth/Logout";

export const Navbar = () => {
  const userId = useUser((state) => state.userId);
  const userDetails = useUser((state) => state.userDetails);
  return (
    <>
      <div className="m-4 px-8 flex justify-between items-center ">
        <Link to="/" className="text-2xl italic text-blue-400 font-semibold">
          Sociot
        </Link>
        <SearchBar />
        <div className="flex items-center gap-4">
          {userId ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <label
                tabIndex={0}
                className="btn m-1 text-base font-medium border-gray-200"
              >
                {userDetails.username}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
              >
                <li className="text-base">
                  <Link to="/profile" className="flex gap-4 items-center">
                    <FaRegUser />
                    Profile
                  </Link>
                </li>
                <li>
                  <Logout />
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="flex justify-between items-center gap-2 px-4 py-2 rounded-md bg-blue-400 text-white cursor-pointer shadow-md"
            >
              <FaRegUser />
              <p className="font-semibold">Login</p>
            </Link>
          )}
        </div>
      </div>
      <hr />
    </>
  );
};
