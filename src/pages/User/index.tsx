import { useParams } from "react-router-dom";
import { UsersPostDetails } from "../../components/Profile/UsersPostDetails";

export const UserPage = () => {
  const userId = Number(useParams().userId);

  return (
    <div className="mx-12 my-4 px-10 py-4 border border-gray-200 rounded-lg flex flex-col gap-2">
      <UsersPostDetails userId={userId} />
    </div>
  );
};
