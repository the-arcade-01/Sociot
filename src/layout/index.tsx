import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../pages/Home";
import { AuthPage } from "../pages/Auth";
import { PostPage } from "../pages/Post/PostPage";
import { RegisterForm } from "../components/Auth/RegisterForm";
import { LoginForm } from "../components/Auth/LoginForm";

const Layout = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />}>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
          <Route path="/post/:postId" element={<PostPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Layout;
