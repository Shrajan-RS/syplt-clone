import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import HighLightedFeatures from "./sections/HighLightedFeatures";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <HighLightedFeatures />
        </div>
      </div>
    </main>
  );
};

export default App;
