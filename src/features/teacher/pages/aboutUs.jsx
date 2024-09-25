import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide a comprehensive education that empowers students to achieve their full potential, fostering a love for learning and critical thinking skills.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="mb-4">
          We envision a community where every student has access to quality education, diverse opportunities, and a supportive environment that promotes growth and success.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Integrity: We uphold the highest standards of honesty and ethical behavior.</li>
          <li>Respect: We foster an inclusive environment that respects diversity and individuality.</li>
          <li>Excellence: We strive for excellence in education and encourage continuous improvement.</li>
          <li>Collaboration: We believe in teamwork and partnerships with parents, students, and the community.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
        <p className="mb-4">
          Our dedicated team of educators and staff work tirelessly to create a nurturing and inspiring environment for our students. Together, we aim to foster a culture of learning, creativity, and achievement.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
        <p>
          We would love to hear from you! If you have any questions or need further information, feel free to contact us at:
        </p>
        <p className="font-semibold">Email: contact@schoolname.com</p>
        <p className="font-semibold">Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default AboutUs;
