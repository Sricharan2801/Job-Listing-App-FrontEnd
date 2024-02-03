import { Route, Routes } from "react-router-dom";
import "./App.css"

// Pages
import Home from "./pages/HomePage/Home";
import Registration from "./pages/RegistrationPage/Registration";
import Login from "./pages/LoginPage/Login"
import JobDetails from "./pages/JobDetailsPage/JobDetails";
import JobPosting from "./pages/JobPostingPage/JobPosting";
// import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div className="main">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/jobPosting" element={<JobPosting />} />
        
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
