import { Routes, Route } from "react-router-dom";
import "./styles.css";
import "./App.css";
import AboutUs from "./components/AboutUs.jsx";
import Volunteering from "./components/Volunteering.jsx";
import Contact from "./components/Contact.jsx";
import Donations from "./components/Donations.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </>
  );
};

export default App;
