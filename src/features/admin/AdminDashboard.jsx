import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import ManageStudents from "./Pages/ManageStudents";
import ManageTeachers from "./Pages/ManageTeachers";
import PaymentStatus from "./Pages/PaymentStatus";
import ExamSchedule from "./Pages/ExamSchedule";
import Period from "./Pages/Period";
import "./Styles/input.css";

const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  const [view, setView] = useState("dashboard");

  const showDashboard = () => setView("dashboard");
  const showTeachers = () => setView("manageTeachers");
  const showStudents = () => setView("manageStudents");
  const showPaymentStatus = () => setView("paymentStatus");
  const showExamSchedule = () => setView("examSchedule");

  return (
    <div className="app">
      <Header />
      <Sidebar
        showDashboard={showDashboard}
        showTeachers={showTeachers}
        showStudents={showStudents}
        showPaymentStatus={showPaymentStatus}
        showExamSchedule={showExamSchedule}
      />
      <main className="p-4 ml-64">
        <Routes>
          <Route path="/" element={<Dashboard students={students} />} />
          <Route
            path="/managestudents"
            element={<ManageStudents setStudents={setStudents} />}
          />
          <Route
            path="/manageteachers"
            element={<ManageTeachers setTeachers={setTeachers} />}
          />
          <Route path="/paymentstatus" element={<PaymentStatus />} />
          <Route path="/examschedule" element={<ExamSchedule />} />
          <Route path="/period" element={<Period />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
