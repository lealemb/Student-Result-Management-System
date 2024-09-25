import PropTypes from "prop-types";

const StudentInfoCard = ({ studentName, student_id, class_grade }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold truncate">{studentName}</h2> {/* Use truncate to handle overflow */}
      <p className="text-sm text-gray-600">{student_id}</p>
      <p className="text-sm text-gray-600">{class_grade}</p>
    </div>
  );
};



StudentInfoCard.propTypes = {
  studentName: PropTypes.string.isRequired,
  class_grade: PropTypes.string.isRequired,
};

export default StudentInfoCard;
