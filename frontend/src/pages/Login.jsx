// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Login() {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     if (username && password) navigate("/home");
// //     else alert("Enter username and password");
// //   };

// //   return (
// //     <div className="flex items-center bg-blue-800 justify-center h-screen">
// //       <div className=" p-8 rounded-2xl bg-white shadow-lg w-80">
// //         <h2 className="text-2xl mb-4">Login</h2>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           className="w-full p-2 mb-3 rounded border "
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full p-2 mb-3 rounded border"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button
// //           onClick={handleLogin}
// //           className="bg-blue-600 w-full py-2 rounded hover:bg-blue-700"
// //         >
// //           Login
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // error state
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username && password) {
//       setError(""); // clear error if valid
//       navigate("/home");
//     } else {
//       setError("⚠️ Please fill in both Username and Password!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center  h-screen bg-gradient-to-br from-gray-800  to-blue-900">
//       {/* Animated Card */}
//       <motion.div
//         initial={{ opacity: 0, y: -50, scale: 0.8 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="p-8 rounded-2xl bg-white shadow-2xl w-80"
//       >
//         {/* Heading with animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-3xl font-bold mb-6 text-center text-black"
//         >
//           Welcome Back 👋
//         </motion.h2>

//         {/* Username Input */}
//         <motion.input
//           whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
//           type="text"
//           placeholder="Username"
//           className="w-full p-3 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         {/* Password Input */}
//         <motion.input
//           whileFocus={{ scale: 1.05, borderColor: "#2563eb" }}
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 mb-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Error Message */}
//         {error && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-red-600 text-sm mb-4 text-center"
//           >
//             {error}
//           </motion.p>
//         )}

//         {/* Login Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleLogin}
//           className="bg-blue-500 text-white w-full py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors"
//         >
//           Login
//         </motion.button>

//         {/* Footer text */}
//         {/* <p className="text-gray-500 text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-600 font-semibold hover:underline">
//             Sign Up
//           </a>
//         </p> */}
//       </motion.div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setError("");
      navigate("/home");
    } else {
      setError("⚠️ Please fill in both Username and Password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl w-96 p-8"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-center text-gray-800 mb-6"
        >
          Sign in to your account
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206A8.959 8.959 0 0112 21"
                />
              </svg>
            </span>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Sign in
          </motion.button>

          {/* Footer */}
          <p className="text-sm text-gray-500 text-center mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
