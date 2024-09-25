import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../../assets/student.png'; // Adjust the path as needed
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        studentFirstName: '',
        studentMiddleName: '',
        studentGrandfatherName: '',
        studentId: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [placeholderActive, setPlaceholderActive] = useState({
        fullName: false,
        email: false,
        password: false,
        confirmPassword: false,
        studentFirstName: false,
        studentMiddleName: false,
        studentGrandfatherName: false,
        studentId: false,
    });

    const [passwordError, setPasswordError] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (name === 'password' || name === 'confirmPassword') {
            setPasswordError(''); // Reset error on typing
        }
    };

    const handleFocus = (field) => {
        setPlaceholderActive((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (!value) {
            setPlaceholderActive((prev) => ({ ...prev, [field]: false }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password validation: Check if password and confirm password are the same
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        // Proceed with form submission (e.g., API call)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="flex bg-white rounded-2xl shadow-lg overflow-hidden" style={{ maxHeight: '90%', width: '60%', maxWidth: '1200px' }}>
                {/* Left side with image and slogan */}
                <div className="w-3/4 relative bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h1 className="text-3xl font-bold">Student Result Management System</h1>
                        <p className="text-lg italic mt-2">It's never too late to study</p>
                    </div>
                </div>

                {/* Right side with sign-up form */}
                <div className="w-1/2 p-8 flex flex-col justify-center" style={{ backgroundColor: '#E6F0F3', height: '100%' }}>
                    <div className="text-center mb-8">
                        <p className="text-lg" style={{ color: '#2C387E' }}>Parent Sign up</p>
                    </div>

                    {/* Input Fields */}
                    {[
                        { label: 'Full Name', name: 'fullName' },
                        { label: 'Email', name: 'email' },
                        { label: 'New Password', name: 'password', type: showPassword ? 'text' : 'password', showToggle: true },
                        { label: 'Confirm Password', name: 'confirmPassword', type: showConfirmPassword ? 'text' : 'password', showToggle: true },
                        { label: 'Student First Name', name: 'studentFirstName' },
                        { label: 'Student Middle Name', name: 'studentMiddleName' },
                        { label: 'Student Grandfather Name', name: 'studentGrandfatherName' },
                        { label: 'Student ID', name: 'studentId' },
                    ].map(({ label, name, type = 'text', showToggle }) => (
                        <div key={name} className="mb-4 relative">
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus(name)}
                                onBlur={() => handleBlur(name, formData[name])}
                                className="w-full border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:outline-none"
                                style={{ color: '#2C387E', height: '40px' }} // Reduced height
                            />
                            <label
                                className={`absolute left-3 transition-all duration-200 text-gray-500 ${placeholderActive[name] || formData[name] ? 'text-xs -top-2.5' : 'text-base top-3'}`}
                            >
                                {label}
                            </label>
                            {showToggle && (
                                <div className="absolute right-3 top-3 cursor-pointer" onClick={name === 'password' ? handleShowPassword : handleShowConfirmPassword}>
                                    {name === 'password' ? (showPassword ? <FaEyeSlash /> : <FaEye />) : (showConfirmPassword ? <FaEyeSlash /> : <FaEye />)}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Password Mismatch Error */}
                    {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}

                    {/* Sign-Up Button */}
                    <button type="submit" className="bg-custom-blue text-white rounded-lg py-2 mt-4 hover:bg-blue-700 transition duration-200">
                        Sign Up
                    </button>

                    {/* Link to Login */}
                    <div className="text-center mt-2">
                        <p className="text-sm">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:underline"> Log In</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUpPage;
