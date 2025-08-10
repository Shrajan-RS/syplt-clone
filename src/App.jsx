import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <div className="bg-main-bg w-full h-screen"></div>
    </main>
  );
};

export default App;
