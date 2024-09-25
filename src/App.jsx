import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import LoginPage from "./features/Login/Landing";
import SignUpPage from "./features/Login/signup";
import TeacherDashboard from "./features/teacher/techDash"; 
import StudentDashboard from "./features/student/StudentDashboard";
import AdminDashboard from "./features/admin/AdminDashboard";
import ParentDashboard from "./features/parent/ParentDashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/teacher/dashboard/*" element={<TeacherDashboard />} />
        <Route path="/student/*" element={<StudentDashboard/>}/>
        <Route path="/admin/*" element={<AdminDashboard/>}/>
        <Route path="/parent/*" element={<ParentDashboard/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
