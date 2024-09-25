import PageLayout from "../Components/PageLayout";

const PeriodTable = () => {
  const schedule = {
    Monday: ["Math", "", "", "Physics", "", "", ""],
    Tuesday: ["English", "", "", "English ", "", "", ""],
    Wednesday: ["Sport", "", "English", "", "", "", ""],
    Thursday: ["", "", "", "Amharic", "", "English ", ""],
    Friday: ["amharic", "Chemistry", "", "", "", "Biology ", ""],
  };

  const timeSlots = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
  ];

  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="Period">
        <h2 className="text-xl font-semibold mb-4">My Schedule</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="border p-2">Day</th>
              {timeSlots.map((slot, index) => (
                <th key={index} className="border p-2">
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((day, index) => (
              <tr key={index}>
                <td className="border p-2 font-medium">{day}</td>
                {schedule[day].map((period, idx) => (
                  <td key={idx} className="border p-2 text-center">
                    {period || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </PageLayout>
    </div>
  );
};

export default PeriodTable;