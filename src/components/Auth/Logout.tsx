import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const Logout = () => {
  const navigate = useNavigate();
  const removeUserState = useUser((state) => state.removeUserState);
  const handleLogout = () => {
    removeUserState();
    navigate("/");
  };
  return (
    <div className="flex items-center gap-4 text-base" onClick={handleLogout}>
      <RiLogoutCircleRLine />
      Logout
    </div>
  );
};
