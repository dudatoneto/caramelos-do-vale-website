import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles.css";
import "./App.css";
import AboutUs from "./pages/AboutUs.jsx";
import Volunteering from "./pages/Volunteering.jsx";
import Contact from "./pages/Contact.jsx";
import Donations from "./pages/Donations.jsx";

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
