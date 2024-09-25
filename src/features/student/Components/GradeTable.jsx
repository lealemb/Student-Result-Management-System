function GradeTable() {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-200 text-sm uppercase text-gray-600">
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Student Result</th>
            <th className="px-4 py-2">Class AVG</th>
            <th className="px-4 py-2">Highest Grade</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="bg-white">
            <td className="border px-4 py-2">Maths</td>
            <td className="border px-4 py-2">25</td>
            <td className="border px-4 py-2">20.5</td>
            <td className="border px-4 py-2 font-semibold">30</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">English</td>
            <td className="border px-4 py-2">29</td>
            <td className="border px-4 py-2">20.5</td>
            <td className="border px-4 py-2 font-semibold">29</td>
          </tr>
          <tr className="bg-white">
            <td className="border px-4 py-2">Chemistry</td>
            <td className="border px-4 py-2">14</td>
            <td className="border px-4 py-2">20.5</td>
            <td className="border px-4 py-2 font-semibold">30</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">Physics</td>
            <td className="border px-4 py-2">24</td>
            <td className="border px-4 py-2">20.5</td>
            <td className="border px-4 py-2 font-semibold">27</td>
          </tr>
          <tr className="bg-white">
            <td className="border px-4 py-2">Biology</td>
            <td className="border px-4 py-2">--</td>
            <td className="border px-4 py-2">--</td>
            <td className="border px-4 py-2">--</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border px-4 py-2">Amharic</td>
            <td className="border px-4 py-2">28</td>
            <td className="border px-4 py-2">20.5</td>
            <td className="border px-4 py-2 font-semibold">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
