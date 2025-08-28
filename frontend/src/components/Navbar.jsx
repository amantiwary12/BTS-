// // import React, { useState } from "react";
// // // import Imgs from "../../Accest/myphoto.jpg"; // check path

// // const Navqbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <nav className="relative flex justify-between items-center p-4">
// //       {/* Logo */}
// //       <div className="flex items-center">
// //         {/* <img src={Imgs} alt="logo" className="h-10 w-10 mr-2" /> */}
// //         <a href="/" className="text-2xl font-bold text-black dark:text-white">
// //           BTS-2000
// //         </a>
// //       </div>

// //       {/* Hamburger (Mobile) */}
// //       <div className="md:hidden">
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-black dark:text-white focus:outline-none">
// //           ☰
// //         </button>
// //       </div>

// //       {/* Desktop Menu */}
// //       <ul className="hidden md:flex space-x-8 pr-4 text-black dark:text-white">
// //         <li><a href="/">Home</a></li>
// //         <li><a href="/About">About</a></li>
// //         <li><a href="/Contact">Contact</a></li>
// //         <li><a href="/Login">Login</a></li>
// //       </ul>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 text-black dark:text-white md:hidden z-10">
// //           <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
// //           <li><a href="/About" onClick={() => setIsOpen(false)}>About</a></li>
// //           <li><a href="/Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
// //           <li><a href="/Login" onClick={() => setIsOpen(false)}>Login</a></li>
// //         </ul>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navqbar;


// // import { Link } from "react-router-dom";


// // export default function Navbar() {
// // return (
// // <nav className="bg-lightBlue p-4 flex justify-around text-lg font-semibold">
// // <Link to="/home">Home</Link>
// // <Link to="/about">About</Link>
// // <Link to="/contact">Contact</Link>
// // <Link to="/settings">Settings</Link>
// // </nav>
// // );
// // }

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);  

//   return (
//     <nav className="   bg-#1616A6   animation shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo / Brand */}
//           <div className="text-xl font-bold">⚡ Monitor</div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 text-lg font-medium">
//             <Link to="/home" className="hover:text-blue-400">Home</Link>
//             <Link to="/about" className="hover:text-blue-400">About</Link>
//             <Link to="/contact" className="hover:text-blue-400">Contact</Link>
//             <Link to="/settings" className="hover:text-blue-400">Settings</Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden px-4 py-2 space-y-2">
//           <Link
//             to="/home"
//             className="block hover:text-blue-400"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block hover:text-blue-400"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="block hover:text-blue-400"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>
//           <Link
//             to="/settings"
//             className="block hover:text-blue-400"
//             onClick={() => setIsOpen(false)}
//           >
//             Settings
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // const checkAuth = async () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     setIsAuthenticated(false);
  //     return;
  //   }

  //   try {
  //     const response = await axios.get(
  //       "https://iat-backend-5h88.onrender.com/api/v1/user/verify-token",
  //       {
  //         headers: { Authorization: Bearer ${token} }
  //       }
  //     );
      
  //     if (response.data.valid) {
  //       setIsAuthenticated(true);
  //       setUser(response.data.user);
  //     } else {
  //       localStorage.removeItem("token");
  //       setIsAuthenticated(false);
  //     }
  //   } catch (err) {
  //     localStorage.removeItem("token");
  //     setIsAuthenticated(false);
  //     console.error("Token verification failed:", err);
  //   }
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       await axios.post(
  //         "https://iat-backend-5h88.onrender.com/api/v1/user/logout",
  //         {},
  //         { headers: { Authorization: Bearer ${token} } }
  //       );
  //     }
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("user");
  //     setIsAuthenticated(false);
  //     setUser(null);
  //     navigate("/login");
  //   } catch (err) {
  //     console.error("Logout failed:", err);
  //   }
  // };

  return (
    <header className="bg-black text-blue-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="hover:text-white transition text-2xl font-bold"
        >
          Aartech Solonics Limited
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <Link to="/developers" className="hover:text-white transition">Developers</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {user && (
                <span className="hover:text-white font-bold text-yellow-400">Welcome {user.username}</span>
              )}
              <button
                // onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-400 hover:text-white transition"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-blue-800">
          <ul className="flex flex-col gap-4 px-6 py-2 text-lg">
            <li><Link to="/developers" onClick={() => setIsMenuOpen(false)} className="block py-2">Developers</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-2">About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2">Contact</Link></li>
            <li>
              {isAuthenticated ? (
                <div className="flex flex-col gap-4 py-2">
                  {user && (
                    <span className="hover:text-white font-bold text-yellow-400 text-center">Welcome {user.username}</span>
                  )}
                  <button
                    // onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="block bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                {/* <button
                  onClick={() => { navigate("/login"); setIsMenuOpen(false); }}
                  className="block bg-green-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-green-700 transition w-full"
                >
                  Login
                </button> */}
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}