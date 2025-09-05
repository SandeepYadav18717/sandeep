import "./Home.css";
import Linkdin from "../Pages/Linkdin.png"; // Adjust the path based on the actual location
import insta from "../Pages/instagram.png";
import sandeep from"../Pages/sandeep.webp";
function Home() {
  return (
    <>
      <div id="detail">
        <div id="overlay">
          I'm sandeep Yadav
          <div id="Linkdin">
            <a
              href="https://www.linkedin.com/in/sandeep-yadav-0b6357210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Linkdin}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #0A66C2",
                  marginTop: "0px",
                }}
              />
            </a>
          </div>
          <div id="Instagram">
            <a
              href="https://www.instagram.com/sandeepyadav782707/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #0A66C2",
                  marginTop: "200px",
                }}
              />
            </a>
          </div>
          <div id="twitter"></div>
        </div>
        <div id="bg-Photo">
          <img src={sandeep}
            style={{
    height: "250px",
    width: "250px",
    background: "linear-gradient(to right, #ff9966, #ff5e62)",
    borderRadius: "50%",
    marginBottom: "30px",
    marginLeft: "0%",
    boxShadow: "12px 5px 25px #ff5e62",
    animation: "photoSlide 1.5s ease forwards",
    display: "flex",
    justifyContent: "space-between",
  }}
/>
        </div>

        <div id="intro">
          I am a dedicated and passionate individual with a strong interest in
          software development and data analytics. I am eager to apply my skills
          and knowledge in a professional setting, contributing to innovative
          projects and collaborating with a dynamic team. I am committed to
          continuous learning and growth in the ever-evolving field of
          technology.
        </div>

        <div id="name">Sandeep Yadav</div>

        <div id="role">Aspiring Software Developer</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
