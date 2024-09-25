import PropTypes from "prop-types";
import "../Styles/MainContent.css";
import studentImage from "../../../assets/student1.png";

const WelcomeBackCard = ({ studentName }) => {
  return (
    <section
      className="rounded-lg p-6 text-white mb-6 flex items-center justify-between"
      style={{ backgroundColor: "#2C437E" }}
    >
      <div className="w-full h-full  text-white text-center p-10">
        <h1 className="text-2xl font-bold">WELCOME BACK! {studentName}</h1>
        <p>
          stay informed about your academic progress, results, exam schedule,
          announcement and performance.
        </p>
      </div>
      <div className="w-20 h-20 p-0 rounded-lg overflow-hidden">
        <img src={studentImage} alt="Student" className="w-full h-full" />
      </div>
    </section>
  );
};

WelcomeBackCard.propTypes = {
  studentName: PropTypes.string.isRequired,
};
export default WelcomeBackCard;
