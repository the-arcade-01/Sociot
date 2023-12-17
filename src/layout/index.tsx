import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../pages/Home";
import { AuthPage } from "../pages/Auth";
import { PostPage } from "../pages/Post";
import { RegisterForm } from "../components/Auth/RegisterForm";
import { LoginForm } from "../components/Auth/LoginForm";
import { ProfilePage } from "../pages/Profile";
import { SearchPage } from "../pages/Search";
import { UserPage } from "../pages/User";
import { Toaster } from "react-hot-toast";
import useUser from "../hooks/useUser";
import { useEffect } from "react";

const Layout = () => {
  const getUserDetails = useUser((state) => state.getUserDetails);

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Router>
      <main>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />}>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search/:type/:search" element={<SearchPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Layout;
