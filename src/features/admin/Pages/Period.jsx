import React, { useState } from "react";

const Period = () => {
  // Initial schedule data for Grade 5 Section A
  const initialSchedules = {
    "Grade 5-A": {
      Monday: [
        "Math",
        "Physics",
        "Moral Education",
        "Tea break",
        "English",
        "",
        "Sport",
      ],
      Tuesday: ["English", "Chemistry", "", "", "", "", "አማርኛ"],
      Wednesday: [
        "Chemistry",
        "",
        "English",
        "Tea break",
        "Biology",
        "",
        "Moral Education",
      ],
      Thursday: ["Biology", "", "Geography", "", "Math", "English", ""],
      Friday: [
        "አማርኛ",
        "Chemistry",
        "Math",
        "Tea break",
        "",
        "Biology",
        "Sport",
      ],
    },
  };

  const emptySchedule = {
    Monday: Array(7).fill(""),
    Tuesday: Array(7).fill(""),
    Wednesday: Array(7).fill(""),
    Thursday: Array(7).fill(""),
    Friday: Array(7).fill(""),
  };

  const timeSlots = [
    "2:00 - 3:00",
    "3:00 - 4:00",
    "4:00 - 5:00",
    "Break (5:00 - 5:20)",
    "5:30 - 6:30",
    "6:30 - 7:30",
    "7:30 - 8:30",
  ];

  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [schedules, setSchedules] = useState(initialSchedules);
  const [schedule, setSchedule] = useState(emptySchedule); // Holds current grade-section schedule
  const [editingDay, setEditingDay] = useState(null);
  const [editingTimeSlot, setEditingTimeSlot] = useState(null);
  const [newSubject, setNewSubject] = useState("");

  // Update the schedule based on the selected grade and section
  const handleGradeSectionChange = (grade, section) => {
    const key = `${grade}-${section}`;
    setSelectedGrade(grade);
    setSelectedSection(section);

    // If schedule for grade-section exists, load it; otherwise start with an empty schedule
    if (schedules[key]) {
      setSchedule(schedules[key]);
    } else {
      setSchedule(emptySchedule);
    }
  };

  // Handle adding or editing the schedule
  const handleEditSchedule = (day, timeSlotIndex) => {
    setEditingDay(day);
    setEditingTimeSlot(timeSlotIndex);
    setNewSubject(schedule[day][timeSlotIndex] || "");
  };

  const handleSaveSchedule = () => {
    // Update the current grade-section schedule with the new subject
    const updatedDaySchedule = [...schedule[editingDay]];
    updatedDaySchedule[editingTimeSlot] = newSubject;

    const updatedSchedule = {
      ...schedule,
      [editingDay]: updatedDaySchedule,
    };

    // Save the updated schedule in the main schedules object
    const key = `${selectedGrade}-${selectedSection}`;
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [key]: updatedSchedule,
    }));

    // Update the displayed schedule
    setSchedule(updatedSchedule);

    // Reset edit state
    setEditingDay(null);
    setEditingTimeSlot(null);
    setNewSubject("");
  };

  return (
    <div className="text-xl font-bold">
      <h2 className="text-xl mb-4">Manage Students' Schedule</h2>

      {/* Grade and Section Selection */}
      <div className="mb-4">
        <label className="block">Select Grade:</label>
        <select
          value={selectedGrade}
          onChange={(e) =>
            handleGradeSectionChange(e.target.value, selectedSection)
          }
          className="border rounded w-full p-2 mb-2"
        >
          <option value="">Select Grade</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
        </select>

        <label className="block">Select Section:</label>
        <select
          value={selectedSection}
          onChange={(e) =>
            handleGradeSectionChange(selectedGrade, e.target.value)
          }
          className="border rounded w-full p-2 mb-2"
        >
          <option value="">Select Section</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>
      </div>

      {/* Schedule Table */}
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="border p-2 font-bold">Day</th>
            {timeSlots.map((slot, index) => (
              <th key={index} className="border p-2 font-bold">
                {slot}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(schedule).map((day, index) => (
            <tr key={index}>
              <td className="border p-2 font-bold">{day}</td>
              {schedule[day].map((period, idx) => (
                <td
                  key={idx}
                  className="border p-2 text-center text-sm cursor-pointer hover:bg-blue-100"
                  onClick={() => handleEditSchedule(day, idx)}
                >
                  {period || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Schedule Modal */}
      {editingDay !== null && editingTimeSlot !== null && (
        <div className="mt-4">
          <h3 className="font-bold">
            Edit Schedule for {editingDay} - {timeSlots[editingTimeSlot]}
          </h3>
          <input
            type="text"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="border rounded w-full p-2 mb-2"
          />
          <button
            onClick={handleSaveSchedule}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Period;
