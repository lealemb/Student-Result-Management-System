import React, { useState, useEffect } from "react";

const AddTeacherForm = ({ setTeachers, teachers, editIndex, onSaveEdit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    subject: "",
    email: "",
    phone: "",
    title: "",
  });

  // Load teacher data into the form when editing
  useEffect(() => {
    if (editIndex !== null) {
      setFormData(teachers[editIndex]);
    } else {
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        subject: "",
        email: "",
        phone: "",
        title: "",
      });
    }
  }, [editIndex, teachers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      onSaveEdit(formData);
    } else {
      setTeachers([...teachers, formData]);
    }
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      subject: "",
      email: "",
      phone: "",
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title (Academic Level)"
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {editIndex !== null ? "Save Changes" : "Add Teacher"}
      </button>
    </form>
  );
};

export default AddTeacherForm;
