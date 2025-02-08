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
