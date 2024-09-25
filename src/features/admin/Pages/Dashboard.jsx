import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin!</h1>
      <p className="mb-4">
        Here’s a quick overview of the school management system. You can manage
        Students and Teachers, view payment statuses, and update exam schedules.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold">Total Students</h2>
          <p className="text-xl">200</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold">Total Payments</h2>
          <p className="text-xl">$15,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold">Upcoming Exams</h2>
          <p className="text-xl">5</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-bold">Quick Actions</h2>
        <ul className="list-disc ml-5">
          <li>
            <a
              href="/manage-students"
              className="text-blue-500 hover:underline"
            >
              Manage Students
            </a>
          </li>
          <li>
            <a
              href="/manage-teachers"
              className="text-blue-500 hover:underline"
            >
              Manage Teachers
            </a>
          </li>
          <li>
            <a href="/payment-status" className="text-blue-500 hover:underline">
              View Payment Status
            </a>
          </li>
          <li>
            <a href="/exam-schedule" className="text-blue-500 hover:underline">
              Update Exam Schedule
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
