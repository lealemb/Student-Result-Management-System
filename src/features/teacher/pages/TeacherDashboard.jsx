import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import teacher from '../../../assets/teacher.png';

const TeacherDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/40');
  const [file, setFile] = useState(null);

  const courses = {
    courseone: "Physics",
    coursetwo: "Chemistry"
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleProfilePictureChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Here you would handle password change logic (e.g., API call)
    console.log('New Password:', newPassword);
    setNewPassword('');
    toggleModal();
  };

  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg p-2 w-full pl-10"
            />
            {/* Search Icon */}
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
          <div className="flex items-center space-x-4">
            <span>Mr. Jackson</span>
            <div className="rounded-full bg-gray-200 p-2 cursor-pointer" onClick={toggleModal}>
              <img
                src={profilePicture}
                alt="User"
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="bg-teal-600 rounded-lg p-6 text-white mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">WELCOME BACK!</h1>
            <p>Track your students for better generation</p>
          </div>
          <div className="w-20 h-20 p-0 rounded-lg overflow-hidden">
            <img
              src={teacher} 
              alt="Teacher"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Profile Info Section */}
        <section className="flex space-x-6">
          <div className="bg-gray-200 p-6 rounded-lg flex-1">
            <h2 className="text-teal-500 font-semibold text-lg">
              <span className='text-gray-600 font-regular'>Name: </span>
              Jackson Solomon
            </h2>
            <p className="text-gray-600">
              <span className='text-gray-600 font-regular'>Email: </span>
              Jacksonsolomon@gmail.com
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg flex-1">
            <p className="text-gray-600">Subject: {courses.courseone}</p>
          </div>
        </section>
      </div>

      {/* Modal for Profile Picture and Password Change */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Update Profile</h2>
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <input type="file" onChange={handleProfilePictureChange} className="mb-2" />
            </div>
            <form onSubmit={handlePasswordChange}>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                required
              />
              <button 
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </form>
            <button 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
