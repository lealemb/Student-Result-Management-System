import React, { useState } from 'react';

const PerformancePage = () => {
  const [studentId, setStudentId] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.split(' ').length > 20) {
      setError('Description cannot exceed 20 words.');
    } else {
      // Handle message submission (e.g., send to an API)
      console.log('Sending message:', { studentId, description });
      // Clear inputs
      setStudentId('');
      setDescription('');
      setError('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar and other components can be added here */}
      
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Performance Page</h1>
          <div className="flex items-center space-x-4">
            <span>Mr. Jackson</span>
            <div className="rounded-full bg-gray-200 p-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Form */}
        <h1 className="text-2xl font-bold mb-4">Send Message to Student</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
          <div className="mb-4">
            <label htmlFor="studentId" className="block font-bold mb-1">Student ID:</label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-1">Description (max 20 words):</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows="3"
              maxLength={100} // To limit the character count
              required
            />
            <small className="text-gray-500">{20 - description.split(' ').length} words remaining</small>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default PerformancePage;
