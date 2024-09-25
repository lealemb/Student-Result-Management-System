import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddStudentForm from "../Components/AddStudentForm"; // Import AddStudentForm component

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEditStudent = (updatedStudent, index) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
    setEditIndex(null); // Reset edit index after saving
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Students</h2>
      <AddStudentForm
        setStudents={setStudents}
        editIndex={editIndex}
        students={students}
        onSaveEdit={handleEditStudent}
      />

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Student ID</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Middle Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Date of Birth</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="8" className="border px-4 py-2 text-center">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{student.Student_Id}</td>
                  <td className="border px-4 py-2">{student.firstName}</td>
                  <td className="border px-4 py-2">{student.middleName}</td>
                  <td className="border px-4 py-2">{student.lastName}</td>
                  <td className="border px-4 py-2">{student.dob}</td>
                  <td className="border px-4 py-2">{student.email}</td>
                  <td className="border px-4 py-2">{student.studentClass}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => setEditIndex(index)}
                      className="text-blue-500"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => {
                        const updatedStudents = students.filter(
                          (_, i) => i !== index
                        );
                        setStudents(updatedStudents);
                      }}
                      className="text-red-500 ml-2"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
