import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css";
import AboutUs from "./pages/AboutUs.jsx";
import Volunteering from "./pages/Volunteering.jsx";
import Contact from "./pages/Contact.jsx";
import Donations from "./pages/Donations.jsx";
import LandingPage from "./pages/LandingPage.jsx";

const App = () => {
  const navItems = [{
    description: "Página Inicial",
    link: "/" }, {
    description: "Como ajudar",
    link: "/como-ajudar" },{
    description: "Sobre Nós",
    link: "/sobre-nos" }, {
    description: "Animais para Adoção",
    link: "/animais" }, {
    description: "Loja",
    link: "/loja" }, {
    description: "Eventos",
    link: "/eventos" }, {
    description: "Voluntariado",
    link: "/voluntariado" }, {
    description: "Contato",
    link: "/contato" }, 
  ];


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/voluntariado" element={<Volunteering />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/doacoes" element={<Donations />} />
      </Routes>
      <Header props={ navItems }/>
      <Footer props={ navItems }/>
    </>
  );
};

export default App;
