// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Logo from '../../assets/logo.png';
// import backgroundImage from '../../assets/student.png';

// function LoginPage() {
//     const [selectedRole, setSelectedRole] = useState('Select User');
//     const [emailOrId, setEmailOrId] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [placeholderActive, setPlaceholderActive] = useState({ email: false, password: false });

//     // Toggle password visibility
//     const handleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     // Handle role selection
//     const handleRoleChange = (e) => {
//         setSelectedRole(e.target.value);
//     };

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'emailOrId') setEmailOrId(value);
//         if (name === 'password') setPassword(value);
//     };

//     // Placeholder animation on focus and input
//     const handleFocus = (field) => {
//         setPlaceholderActive((prev) => ({ ...prev, [field]: true }));
//     };

//     const handleBlur = (field, value) => {
//         if (!value) {
//             setPlaceholderActive((prev) => ({ ...prev, [field]: false }));
//         }
//     };

//     // Check if user is student to show ID instead of email
//     const isStudent = selectedRole === 'Student';

//     // Hide sign-up link if the selected role is not 'Parent'
//     const showSignUpLink = selectedRole === 'Parent';

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: '80%', width: '60%', maxWidth: '1200px' }}>
//                 {/* Left side with image and slogan */}
//                 <div className="w-3/4 relative bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
//                     {/* Slogan and system name */}
//                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4" style={{  backgroundColor: 'rgba(0,0,0,0.5)' }}>
//                         <h1 className="text-3xl font-bold">Student Result Management System</h1>
//                         <p className="text-lg italic mt-2">It's never too late to study</p>
//                     </div>
//                 </div>

//                 {/* Right side with login form */}
//                 <div className="w-1/2 p-12 flex flex-col justify-center" style={{ backgroundColor: '#E6F0F3', height: '100%' }}>
//                     <div className="text-center mb-8">
//                         <img src={Logo} alt="Logo" className="w-20 mx-auto" />
//                         <h2 className="text-2xl font-semibold" style={{ color: '#2C387E' }}>Welcome Back</h2>
//                         <p className="text-lg" style={{ color: '#2C387E' }}>Login to continue</p>
//                     </div>

//                     {/* Role Selector */}
//                     <div className="mb-4 relative">
//                         <select
//                             className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
//                             value={selectedRole}
//                             onChange={handleRoleChange}
//                             style={{ color: '#2C387E' }}
//                         >
//                             <option>Select User</option>
//                             <option>Student</option>
//                             <option>Teacher</option>
//                             <option>Parent</option>
//                             <option>Admin</option>
//                         </select>
//                     </div>

//                     {/* Email/ID Input */}
//                     <div className="mb-4 relative">
//                         <input
//                             type="text"
//                             name="emailOrId"
//                             value={emailOrId}
//                             onChange={handleInputChange}
//                             onFocus={() => handleFocus('email')}
//                             onBlur={() => handleBlur('email', emailOrId)}
//                             className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
//                             style={{ color: '#2C387E' }}
//                         />
//                         <label
//                             className={`absolute left-3 transition-all duration-200 text-gray-500 ${
//                                 placeholderActive.email || emailOrId ? 'text-xs -top-2.5' : 'text-base top-3'
//                             }`}
//                         >
//                             {isStudent ? 'ID' : 'Email'}
//                         </label>
//                     </div>

//                     {/* Password Input */}
//                     <div className="mb-4 relative">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             name="password"
//                             value={password}
//                             onChange={handleInputChange}
//                             onFocus={() => handleFocus('password')}
//                             onBlur={() => handleBlur('password', password)}
//                             className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
//                             style={{ color: '#2C387E' }}
//                         />
//                         <label
//                             className={`absolute left-3 transition-all duration-200 text-gray-500 ${
//                                 placeholderActive.password || password ? 'text-xs -top-2.5' : 'text-base top-3'
//                             }`}
//                         >
//                             Password
//                         </label>

//                         <div className="absolute right-3 top-4 cursor-pointer" onClick={handleShowPassword}>
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </div>
//                     </div>

//                     {/* Show Password */}
//                     <div className="flex items-center mb-4">
//                         <input
//                             type="checkbox"
//                             checked={showPassword}
//                             onChange={handleShowPassword}
//                             className="mr-2"
//                         />
//                         <label className="text-sm" style={{ color: '#2C387E' }}>Show password</label>
//                     </div>

//                     {/* Login Button */}
//                     <button className="w-full bg-blue-600 text-white rounded-full p-3 font-semibold hover:bg-blue-700 transition-colors" style={{ backgroundColor: '#2C387E' }}>
//                         Login
//                     </button>

//                     {/* Sign up and Privacy statement */}
//                     <div className="text-center mt-4">
//                         {showSignUpLink && (
//                             <p className="text-sm" style={{ color: '#2C387E' }}>
//                                 Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up here</a>
//                             </p>
//                         )}
//                         <p className="text-sm mt-2" style={{ color: '#2C387E' }}>
//                             By logging in, you agree to our <a href="/privacy" className="text-blue-500 hover:underline">privacy statement</a>.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginPage;
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import backgroundImage from '../../assets/student.png';

function LoginPage() {
    const [selectedRole, setSelectedRole] = useState('Select User');
    const [emailOrId, setEmailOrId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [placeholderActive, setPlaceholderActive] = useState({ email: false, password: false });
    const navigate = useNavigate();

    // Toggle password visibility
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // Handle role selection
    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'emailOrId') setEmailOrId(value);
        if (name === 'password') setPassword(value);
    };

    // Placeholder animation on focus and input
    const handleFocus = (field) => {
        setPlaceholderActive((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (!value) {
            setPlaceholderActive((prev) => ({ ...prev, [field]: false }));
        }
    };

    // Handle form submission based on role selection
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to validate and navigate based on the role
        if (selectedRole === 'Student') {
            navigate('/student');
        } else if (selectedRole === 'Teacher') {
            navigate('/teacher/dashboard');
        } else if (selectedRole === 'Parent') {
            navigate('/parent');
        } else if (selectedRole === 'Admin') {
            navigate('/admin');
        }
    };

    // Check if user is a student to show ID instead of email
    const isStudent = selectedRole === 'Student';

    // Show sign-up link only for parents
    const showSignUpLink = selectedRole === 'Parent';

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: '80%', width: '60%', maxWidth: '1200px' }}>
                {/* Left side with image and slogan */}
                <div className="w-3/4 relative bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h1 className="text-3xl font-bold">Student Result Management System</h1>
                        <p className="text-lg italic mt-2">It's never too late to study</p>
                    </div>
                </div>

                {/* Right side with login form */}
                <div className="w-1/2 p-12 flex flex-col justify-center" style={{ backgroundColor: '#E6F0F3', height: '100%' }}>
                    <div className="text-center mb-8">
                        <img src={Logo} alt="Logo" className="w-20 mx-auto" />
                        <h2 className="text-2xl font-semibold" style={{ color: '#2C387E' }}>Welcome Back</h2>
                        <p className="text-lg" style={{ color: '#2C387E' }}>Login to continue</p>
                    </div>

                    {/* Role Selector */}
                    <div className="mb-4 relative">
                        <select
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            value={selectedRole}
                            onChange={handleRoleChange}
                            style={{ color: '#2C387E' }}
                        >
                            <option>Select User</option>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Parent</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    {/* Email/ID Input */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="emailOrId"
                            value={emailOrId}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email', emailOrId)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${
                                placeholderActive.email || emailOrId ? 'text-xs -top-2.5' : 'text-base top-3'
                            }`}
                        >
                            {isStudent ? 'ID' : 'Email'}
                        </label>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('password')}
                            onBlur={() => handleBlur('password', password)}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                            style={{ color: '#2C387E' }}
                        />
                        <label
                            className={`absolute left-3 transition-all duration-200 text-gray-500 ${
                                placeholderActive.password || password ? 'text-xs -top-2.5' : 'text-base top-3'
                            }`}
                        >
                            Password
                        </label>

                        <div className="absolute right-3 top-4 cursor-pointer" onClick={handleShowPassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Show Password */}
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={handleShowPassword}
                            className="mr-2"
                        />
                        <label className="text-sm" style={{ color: '#2C387E' }}>Show password</label>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white rounded-full p-3 font-semibold hover:bg-blue-700 transition-colors"
                        style={{ backgroundColor: '#2C387E' }}
                    >
                        Login
                    </button>

                    {/* Sign up and Privacy statement */}
                    <div className="text-center mt-4">
                        {showSignUpLink && (
                            <p className="text-sm" style={{ color: '#2C387E' }}>
                                Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up here</a>
                            </p>
                        )}
                        <p className="text-sm mt-2" style={{ color: '#2C387E' }}>
                            By logging in, you agree to our <a href="/privacy" className="text-blue-500 hover:underline">privacy statement</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;


