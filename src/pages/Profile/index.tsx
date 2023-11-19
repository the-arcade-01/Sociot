import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../services/api/user";
import useUser from "../../hooks/useUser";
import ProfileContainer from "../../components/Profile/ProfileContainer";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const userId = useUser((state) => state.userId);
  const token = useUser((state) => state.token);
  const saveUserDetails = useUser((state) => state.saveUserDetails);
  const getUserDetails = async (userId: string, token: string) => {
    const response = await getUserById(userId, token);
    saveUserDetails(response.data);
  };

  useEffect(() => {
    if (userId == "" || token == "") {
      navigate("/auth/login");
    }
    getUserDetails(userId, token);
  }, []);
  return (
    <div className="my-6 mx-4 px-8 flex justify-between gap-10">
      <ProfileContainer />
    </div>
  );
};
