import { useEffect } from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Index from "./Pages/Index";
import Skills from "./Pages/Skills";

import Cards  from "./Cards/Cards";
import Contact from "./Contact/contact";
import Cert from "./Certifitae/Certi.jsx"; 
import "./responsive.css"  // 👈 yaha import kar

import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // 20% section visible hote hi trigger
    );

    document.querySelectorAll(".section").forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>


      <Navbar />
      <section id="home" className="section"><Index /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Cards /></section>
      <section id="Certifitae" className="section"><Cert /></section>
       <section id="contact" className="section"><Contact /></section>
    </>
  );
}

export default App;