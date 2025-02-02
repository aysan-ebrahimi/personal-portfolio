import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Works from "./components/works/Works";

import "typeface-ibm-plex-sans";

function App() {
  return (
    // {/* <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold text-blue-500">
    //       Tailwind CSS Installed Successfully! 🎉
    //     </h1>
    //     <p className="text-lg mt-4 text-gray-700">
    //       Tailwind CSS is now working in your project.
    //     </p>
    //     <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition">
    //       Test Button
    //     </button>
    //   </div>
    // </div> */}
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/works" element={<Works />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
