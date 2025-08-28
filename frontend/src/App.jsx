import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./Home";
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


