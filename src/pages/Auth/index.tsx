import { Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <div className="w-full flex justify-center my-10">
      <Outlet />
    </div>
  );
};
