import React from "react";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
