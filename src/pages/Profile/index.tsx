import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import ProfileContainer from "../../components/Profile/ProfileContainer";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { getUserDetails, isUserLoggedIn } = useUser();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      navigate("/auth/login");
    }
    getUserDetails();
  }, []);
  return (
    <div className="my-6 mx-4 px-8 flex justify-between gap-10">
      <ProfileContainer />
    </div>
  );
};
