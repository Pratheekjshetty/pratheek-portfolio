import React, { useEffect } from "react";
import pratheek from "../assets/pratheek1.png";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const targetElement = document.getElementById(location.state.targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location.state]);
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    if (location.pathname !== "/") {
      navigate("/", { state: { targetId } });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-5 pt-10">
      {/* Heading */}
      <div className="text-center max-w-4xl">
        <p className="text-[#6E07F3] font-semibold text-lg mb-3">
          Hello, I'm Pratheek J Shetty 👋
        </p>
        <h1 className="font-eurostile font-extrabold text-[34px] sm:text-[55px] leading-tight">
          Software Developer
          <br />
          <span className="text-[#6E07F3]">
            Full Stack Web Developer
          </span>
        </h1>
        <p className="font-sans text-[18px] sm:text-[22px] text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          I build responsive and scalable web applications with a strong
          focus on clean UI, reliable backend development and great user
          experiences.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href="#about" onClick={handleScroll}>
            <Button variant="contained" className="!bg-[#6E07F3] !px-7 !py-3">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outlined" className="!border-[#6E07F3] !text-[#6E07F3] !px-7 !py-3">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
      {/* Profile image */}
      <div className="mt-12">
        <img className="w-[230px] sm:w-[280px] rounded-full"
          src={pratheek} alt="Pratheek J Shetty"/>
      </div>
    </section>
  );
}

export default Home;