import PropTypes from "prop-types";

const StudentInfoCard = ({ studentName, class_grade }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex items-center justify-between">
      {/* Student Name Section */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 mr-2">
        <h2 className="text-gray-700 font-semibold text-xl text-center">
          {studentName}
        </h2>
      </div>

      {/* Class Grade Section */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 ml-2">
        <h2 className="text-lg font-semibold text-gray-600 text-center">
          Class Grade: {class_grade}
        </h2>
      </div>
    </div>
  );
};

StudentInfoCard.propTypes = {
  studentName: PropTypes.string.isRequired,
  class_grade: PropTypes.string.isRequired,
};

export default StudentInfoCard;
