import PageLayout from "../Components/PageLayout";

import GradeTable from "../Components/GradeTable";
import RankDisplay from "../Components/RankDisplay";

function GradeResult() {
  return (
    <div className="ml-64 flex-1 bg-gray-100 p-6 mt-[65px]">
      <PageLayout userName="Abebe" pageTitle="Grades and Results">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Grade Result</h2>
          <div className="flex items-center">
            <label htmlFor="semester" className="mr-2 text-lg font-medium">
              Semester
            </label>
            <select id="semester" className="border rounded px-3 py-1">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>

        {/* Grade Table */}
        <GradeTable />

        {/* Rank Display */}
        <RankDisplay />
      </PageLayout>
    </div>
  );
}

export default GradeResult;
