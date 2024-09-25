import React, { useState } from "react";
import AddTeacherForm from "../Components/AddTeacherForm";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([]); // State for managing the list of teachers
  const [editingIndex, setEditingIndex] = useState(null); // Index of teacher being edited

  // Handle editing a teacher
  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  // Handle deleting a teacher
  const handleDelete = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
  };

  // Handle saving the edited teacher
  const handleSaveEdit = (updatedTeacher) => {
    const updatedTeachers = teachers.map((teacher, index) =>
      index === editingIndex ? updatedTeacher : teacher
    );
    setTeachers(updatedTeachers);
    setEditingIndex(null); // Exit edit mode
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Manage Teachers</h2>

      {/* Add the form to add/edit teachers */}
      <AddTeacherForm
        setTeachers={setTeachers}
        teachers={teachers}
        editIndex={editingIndex}
        onSaveEdit={handleSaveEdit}
      />

      {/* Display list of teachers */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Middle Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Title (Academic Level)</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{teacher.firstName}</td>
                <td className="border px-4 py-2">{teacher.middleName}</td>
                <td className="border px-4 py-2">{teacher.lastName}</td>
                <td className="border px-4 py-2">{teacher.subject}</td>
                <td className="border px-4 py-2">{teacher.email}</td>
                <td className="border px-4 py-2">{teacher.phone}</td>
                <td className="border px-4 py-2">{teacher.title}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-yellow-500 hover:text-yellow-700 mr-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeachers;
