import PropTypes from "prop-types";

const GradeCard = ({ grade }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg">
      <h3 className="text-gray-600">Grade/Class:{grade}</h3>
    </div>
  );
};

GradeCard.propTypes = {
  grade: PropTypes.number.isRequired,
};

export default GradeCard;
