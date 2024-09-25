import React, { useState } from "react";

const ExamSchedule = () => {
  // State to hold the selected grade
  const [selectedGrade, setSelectedGrade] = useState("");

  // State to hold the exam schedule data
  const [examSchedules, setExamSchedules] = useState([]);

  // State to manage form inputs
  const [newSection, setNewSection] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newExaminer, setNewExaminer] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Track index for editing

  // Function to handle form submission (add or edit schedule)
  const handleAddOrEditSchedule = (e) => {
    e.preventDefault();

    if (!selectedGrade) {
      alert("Please select a grade before adding a schedule.");
      return;
    }

    const newSchedule = {
      grade: selectedGrade,
      section: newSection,
      subject: newSubject,
      date: newDate,
      location: newLocation,
      examiner: newExaminer,
    };

    if (editIndex !== null) {
      // Update the existing schedule
      const updatedSchedules = [...examSchedules];
      updatedSchedules[editIndex] = newSchedule;
      setExamSchedules(updatedSchedules);
      setEditIndex(null); // Clear edit state
    } else {
      // Add new schedule
      setExamSchedules([...examSchedules, newSchedule]);
    }

    // Clear form inputs
    setNewSection("");
    setNewSubject("");
    setNewDate("");
    setNewLocation("");
    setNewExaminer("");
  };

  // Function to handle edit action
  const handleEdit = (index) => {
    const scheduleToEdit = examSchedules[index];
    setNewSection(scheduleToEdit.section);
    setNewSubject(scheduleToEdit.subject);
    setNewDate(scheduleToEdit.date);
    setNewLocation(scheduleToEdit.location);
    setNewExaminer(scheduleToEdit.examiner);
    setEditIndex(index); // Set index for editing mode
  };

  // Function to handle delete action
  const handleDelete = (index) => {
    const updatedSchedules = examSchedules.filter((_, i) => i !== index);
    setExamSchedules(updatedSchedules);
  };

  return (
    <div>
      {/* Grade selection dropdown */}
      <div className="mb-4">
        <label className="block text-xl font-bold">Select Grade:</label>
        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          className="border rounded w-full p-2"
          required
        >
          <option value="">Select Grade</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
          {/* Add more grades as needed */}
        </select>
      </div>

      <h2 className="text-xl font-bold">
        Exam Schedule for {selectedGrade || "Select a Grade"}
      </h2>

      {/* Display the exam schedule table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">Section</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Examiner</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {examSchedules
              .filter((schedule) => schedule.grade === selectedGrade)
              .map((schedule, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{schedule.section}</td>
                  <td className="border px-4 py-2">{schedule.subject}</td>
                  <td className="border px-4 py-2">{schedule.date}</td>
                  <td className="border px-4 py-2">{schedule.location}</td>
                  <td className="border px-4 py-2">{schedule.examiner}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

            {examSchedules.filter(
              (schedule) => schedule.grade === selectedGrade
            ).length === 0 && (
              <tr>
                <td colSpan="6" className="border px-4 py-2 text-center">
                  No schedules found for {selectedGrade}.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Form to add or edit a new exam schedule */}
      <form onSubmit={handleAddOrEditSchedule} className="mt-8">
        <div className="mb-4">
          <label className="block">Section:</label>
          <input
            type="text"
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Subject:</label>
          <input
            type="text"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Date:</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Location:</label>
          <input
            type="text"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Examiner:</label>
          <input
            type="text"
            value={newExaminer}
            onChange={(e) => setNewExaminer(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          {editIndex !== null ? "Update Exam Schedule" : "Add Exam Schedule"}
        </button>
      </form>
    </div>
  );
};

export default ExamSchedule;
