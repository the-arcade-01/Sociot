import useUser from "../../hooks/useUser";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const Logout = () => {
  const removeUserState = useUser((state) => state.removeUserState);
  return (
    <div
      className="flex items-center gap-4 text-base"
      onClick={removeUserState}
    >
      <RiLogoutCircleRLine />
      Logout
    </div>
  );
};
