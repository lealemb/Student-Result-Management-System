import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import PerformancePage from './pages/PerformancePage';
import SideBar from './componet/sideBar';
import Dashboard from './pages/TeacherDashboard';
import InputGrade from './pages/InputGrade';
import ExamSchedule from './pages/ExamSchedule'; 
import MySchedule from './pages/mySchedule';



const TeacherDashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-6">
        
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inputgrade" element={<InputGrade />} />
            <Route path="/examschedule" element={<ExamSchedule />} />
            <Route path="/myschedule" element={<MySchedule />} />
            <Route path="/performance" element={<PerformancePage/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        
      </div>
    </div>
  );
};

export default TeacherDashboard;
