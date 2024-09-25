// src/ExamSchedule.jsx
import React, { useState } from 'react';
import { FaHome, FaClipboard, FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import SideBar from '../componet/sideBar';

const ExamSchedule = () => {
  const allExams = {
    "Class 1": [
      { subject: 'Mathematics', date: '2024-09-25', time: '10:00 AM - 12:00 PM', location: 'Room 101', examiner: 'Mr. Smith' },
      { subject: 'Physics', date: '2024-09-26', time: '01:00 PM - 03:00 PM', location: 'Room 102', examiner: 'Ms. Johnson' },
    ],
    "Class 2": [
      { subject: 'Chemistry', date: '2024-09-27', time: '09:00 AM - 11:00 AM', location: 'Room 103', examiner: 'Mr. Brown' },
      { subject: 'Biology', date: '2024-09-28', time: '02:00 PM - 04:00 PM', location: 'Room 104', examiner: 'Ms. Davis' },
    ],
  };

  const [selectedClass, setSelectedClass] = useState('Class 1');

  return (
    <>
      <div className="flex h-screen">
        {/* <SideBar/> */}
        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Exam Schedule</h1>
            <input
              type="text"
              placeholder="Search Exam..."
              className="border border-gray-300 rounded-lg p-2 w-1/3"
            />
            <div className="flex items-center space-x-4">
              <span>Mr. Jackson</span>
              <div className="rounded-full bg-gray-200 p-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="rounded-full"
                />
              </div>
            </div>
          </header>

          {/* Select Class */}
          <div className="flex items-center mb-6">
            <label htmlFor="classSelect" className="mr-4 font-bold">Select Class:</label>
            <select
              id="classSelect"
              className="border border-gray-300 rounded-lg p-2"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {Object.keys(allExams).map((className) => (
                <option key={className} value={className}>{className}</option>
              ))}
            </select>
          </div>

          {/* Exam Table */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-gray-700">#</th>
                  <th className="p-3 text-gray-700">Subject</th>
                  <th className="p-3 text-gray-700">Date</th>
                  <th className="p-3 text-gray-700">Time</th>
                  <th className="p-3 text-gray-700">Location</th>
                  <th className="p-3 text-gray-700">Examiner</th> {/* New column */}
                </tr>
              </thead>
              <tbody>
                {allExams[selectedClass].map((exam, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{exam.subject}</td>
                    <td className="p-3">{exam.date}</td>
                    <td className="p-3">{exam.time}</td>
                    <td className="p-3">{exam.location}</td>
                    <td className="p-3">{exam.examiner}</td> {/* Display examiner */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamSchedule;
