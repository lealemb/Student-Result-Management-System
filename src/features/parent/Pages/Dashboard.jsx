import PageLayout from "../Components/PageLayout";
import WelcomeBackCard from "../Components/WelcomeBackCard";
import StudentInfoCard from "../Components/StudentInfoCard";

const ParentDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <PageLayout userName="Parent Name" pageTitle="Parent Dashboard">
        <div className="ml-64 flex-1 p-8 pt-[60px]">
          {/* Welcome back section */}
          <WelcomeBackCard studentName="Parent Name" />

          {/* Main content section */}
          <section className="flex mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Parent's Children Info */}
            <StudentInfoCard
              studentName="Child Name: Abebe Kebede"
              student_id="ST/4536/7"
              class_grade="7B"
            />
            {/* <StudentInfoCard
              studentName="Child 2: Mahlet Kebede"
              student_id="ST/4536/8"
              class_grade="8A"
            /> */}
            {/* Add more cards if there are more children */}
          </section>
        </div>
      </PageLayout>
    </div>
  );
};

export default ParentDashboard;
