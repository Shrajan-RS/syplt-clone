import { useGSAP } from "@gsap/react";
import { flavorLists } from "../constants/index";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();
  const isTablet = useMediaQuery({
    query: "(max-width 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - innerWidth;

    if (!isTablet) {
      const drinkScrollTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: `+=${scrollAmount + 1250}px`,
          scrub: 1,
          pin: true,
        },
      });

      drinkScrollTimeLine.to(".flavor-section", {
        x: `-${scrollAmount + 1250}px`,
        ease: "power1.inOut",
      });
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map(({ name, color, rotation }) => (
          <div
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${rotation} `}
            key={name}
          >
            <img
              src={`/images/${color}-bg.svg`}
              alt={`${color}-background`}
              className="absolute bottom-0"
            />

            <img
              src={`/images/${color}-drink.webp`}
              alt={`${color}-flavor`}
              className="drinks"
            />

            <img
              src={`images/${color}-elements.webp`}
              alt={`${color}-elements`}
              className="elements"
            />

            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
