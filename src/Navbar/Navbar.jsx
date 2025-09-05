import "./Navabr.css";



import { useState,useEffect } from 'react'
function Navbar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setLoaded(true);
  }, []);
  function About(){
    location.href = 'Home.jsx';
    console.log("clickedded");
  }
  function Project(){
    location.href = 'Cards.jsx';
    console.log("clicked");
  }

    return (
        <div id="container">
       <a href="#home" className="nav-item">Home</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#Certifitae" className="nav-item">Certificate</a>
        <a href="#contact" className="nav-item">Contact</a>
        </div>
    )
}

export default Navbar;