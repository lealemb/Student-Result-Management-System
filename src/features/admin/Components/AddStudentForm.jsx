import React, { useState, useEffect } from "react";

const AddStudentForm = ({ setStudents, editIndex, students, onSaveEdit }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const studentToEdit = students[editIndex];
      setFirstName(studentToEdit.firstName);
      setMiddleName(studentToEdit.middleName);
      setLastName(studentToEdit.lastName);
      setDob(studentToEdit.dob);
      setEmail(studentToEdit.email);
      setStudentClass(studentToEdit.studentClass);
    } else {
      // Reset form for adding a new student
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDob("");
      setEmail("");
      setStudentClass("");
    }
  }, [editIndex, students]);

  const generateStudentId = () => {
    const uniqueId = Math.floor(1000 + Math.random() * 9000);
    return `ST/${uniqueId}/${studentClass}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentId =
      editIndex !== null ? students[editIndex].Student_Id : generateStudentId();
    const newStudent = {
      Student_Id: studentId,
      firstName,
      middleName,
      lastName,
      dob,
      email,
      studentClass,
    };

    if (editIndex !== null) {
      onSaveEdit(newStudent, editIndex);
    } else {
      setStudents((prevStudents) => [...prevStudents, newStudent]);
    }

    // Reset form
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDob("");
    setEmail("");
    setStudentClass("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded-lg mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            placeholder="Middle Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="studentClass"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            placeholder="Class"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {editIndex !== null ? "Save Changes" : "Add Student"}
      </button>
    </form>
  );
};

export default AddStudentForm;
