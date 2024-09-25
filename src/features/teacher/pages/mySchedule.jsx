import React, { useState } from 'react';

const MySchedule = () => {
  const [schedule, setSchedule] = useState({
    Monday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Tuesday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Wednesday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Thursday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
    Friday: { '8:00 - 8:45': '', '8:45 - 9:30': '', '9:30 - 10:15': '', '10:15 - 11:00': '', '11:00 - 11:45': '', '12:45 - 1:30': '', '1:30 - 2:15': '', '2:15 - 3:00': '' },
  });

  const handleSubjectChange = (day, time, value) => {
    const updatedSchedule = { ...schedule, [day]: { ...schedule[day], [time]: value } };
    setSchedule(updatedSchedule);
  };

  const handleSave = () => {
    console.log('Schedule saved:', schedule);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="flex justify-between items-center  text-black p-6">
        <h1 className="text-3xl font-semibold">My Weekly Schedule</h1>
        <div className="flex items-center space-x-4">
          <span>Mr. Jackson</span>
          <div className="rounded-full bg-gray-200 p-2">
            <img src="https://via.placeholder.com/40" alt="User" className="rounded-full" />
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto p-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <table className="min-w-full table-fixed border-collapse">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="p-3 text-center font-bold">Time</th>
                <th className="p-3 text-center font-bold">Monday</th>
                <th className="p-3 text-center font-bold">Tuesday</th>
                <th className="p-3 text-center font-bold">Wednesday</th>
                <th className="p-3 text-center font-bold">Thursday</th>
                <th className="p-3 text-center font-bold">Friday</th>
              </tr>
            </thead>
            <tbody>
              {['8:00 - 8:45', '8:45 - 9:30', '9:30 - 10:15', '10:30 - 11:15', '11:15 - 12:00'].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="p-3 text-center font-semibold text-gray-700">{timeSlot}</td>
                  {Object.keys(schedule).map((day) => (
                    <td key={day} className="p-3 text-center">
                      <input
                        type="text"
                        value={schedule[day][timeSlot]}
                        onChange={(e) => handleSubjectChange(day, timeSlot, e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Subject"
                      />
                    </td>
                  ))}
                </tr>
              ))}
              {/* Break Period
              <tr className="bg-gray-200">
                <td className="p-3 text-center font-semibold text-gray-600">Break</td>
                {Object.keys(schedule).map((day) => (
                  <td key={day} className="p-3 text-center text-gray-600">10:15 - 10:30</td>
                ))}
              </tr> */}
              {/* Afternoon Periods */}
              {['1:00 - 1:45', '1:45 - 2:30', '2:30 - 3:00'].map((timeSlot) => (
                <tr key={timeSlot} className="border-b">
                  <td className="p-3 text-center font-semibold text-gray-700">{timeSlot}</td>
                  {Object.keys(schedule).map((day) => (
                    <td key={day} className="p-3 text-center">
                      <input
                        type="text"
                        value={schedule[day][timeSlot]}
                        onChange={(e) => handleSubjectChange(day, timeSlot, e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Subject"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
            onClick={handleSave}
          >
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
