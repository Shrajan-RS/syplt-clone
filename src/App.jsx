import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { MessageSection } from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
    </main>
  );
};

export default App;
