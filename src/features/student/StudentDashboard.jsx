import {  Routes, Route } from "react-router-dom";

import "./Styles/App.css";
import Dashboard from "./Pages/Dashboard";
import GradeResult from "./Pages/GradeResult";
import Period from "./Pages/Period";
import Exams from "./Pages/ExamSchedule";
import Performance from "./Pages/Performance";
import About from "./Pages/About";
import Sidebar from "./Components/Sidebar";
import NoPage from "./Pages/NoPage";
import PageLayout from "./Components/PageLayout";

function StudentDashboard() {
  const userName = "Abebe";

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout userName={userName} pageTitle="Dashboard">
                <Dashboard />
              </PageLayout>
            }
          />
          <Route
            path="/grade"
            element={
              <PageLayout userName={userName} pageTitle="Grade Result">
                <GradeResult />
              </PageLayout>
            }
          />
          <Route
            path="/period"
            element={
              <PageLayout userName={userName} pageTitle="Period">
                <Period />
              </PageLayout>
            }
          />

          <Route
            path="/exams"
            element={
              <PageLayout userName={userName} pageTitle="Exams Schedule">
                <Exams />
              </PageLayout>
            }
          />
          <Route
            path="/performance"
            element={
              <PageLayout userName={userName} pageTitle="Performance">
                <Performance />
              </PageLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PageLayout userName={userName} pageTitle="About">
                <About />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout userName={userName} pageTitle="Page Not Found">
                <NoPage />
              </PageLayout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default StudentDashboard;
