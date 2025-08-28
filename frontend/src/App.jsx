import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/Aboute";
import Contact from "./pages/Contact";
import Settings from "./pages/Setting";


function App() {
return (
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/settings" element={<Settings />} />
</Routes>
);
}


export default App;




//// using redxux to fetch data from backend
// src/App.jsx
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchUsers } from "./features/users/userSlice";
// import Page1 from "./pages/Page1";
// import Page2 from "./pages/Page2";

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers()); // fetch user data once at start
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>React Redux User Fetch Example</h1>
//       <Page1 />
//       <Page2 />
//     </div>
//   );
// }
