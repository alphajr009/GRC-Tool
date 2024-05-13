import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Home from "./pages/user/home";
import Admin from "./pages/admin/admin";
import ForgetPassword from "./pages/user/ForgetPassword";
import Project from "./pages/Project";
import Question from "./pages/Question";
import Questionnaire from "./pages/Questionnaire";
import QuestionDashboard from "./pages/QuestionDashboard";
import RiskScore from "./pages/RiskScore";
import PsScore from "./pages/PsScore";

// Custom component to validate admin access
const AdminRouteGuard = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user && user.isAdmin) {
    return <Admin />;
  } else {
    // Redirect to homepage or any other page
    return <Navigate to="/home" />;
  }
};

// Custom component to validate user access
const UserRouteGuard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/projects" element={<Project />} exact />
          <Route path="/questionnaire" element={<Question />} exact />
          <Route path="/ps-score/score" element={<PsScore />} exact />
          <Route path="/questions/dialog" element={<Questionnaire />} exact />
          <Route
            path="/questions/110283921"
            element={<QuestionDashboard />}
            exact
          />
          <Route path="/ps-score" element={<RiskScore />} exact />
          {/* Protected Routes */}
          {/* <Route
            path="/account"
            element={
              <UserRouteGuard>
                <Account />
              </UserRouteGuard>
            }
          />


          <Route path="/admin/*" element={<AdminRouteGuard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
