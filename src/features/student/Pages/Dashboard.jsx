import PageLayout from "../Components/PageLayout";
import WelcomeBackCard from "../Components/WelcomeBackCard";
import StudentInfoCard from "../Components/StudentInfoCard";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <PageLayout userName="Abebe" pageTitle="Dashboard">
        <div className="ml-64 flex-1 p-8 pt-[60px]">
          {/* Welcome back section */}
          <WelcomeBackCard studentName="Abebe Kebede" />
          
          {/* Main content section */}
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Student Info Card */}
            <StudentInfoCard
              studentName="Abebe Kebede"
              student_id="ST/4536/7"
              class_grade="7B"
            />
            {/* Add more cards or sections as needed */}
          </section>
        </div>
      </PageLayout>
    </div>
  );
};

export default Dashboard;
