import { clipPathContent } from "../constants";
import ClipPathTitle from "../components/ClipPathTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const HighLightedFeatures = () => {
  useGSAP(() => {
    const textTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top center",
        end: "top top",
        scrub: 1.5,
      },
    });

    clipPathContent.forEach(({ className, finalClipPath }) =>
      textTimeLine.to(`.benefit-section .${className}`, {
        clipPath: finalClipPath,
        ease: "circ.out",
        duration: 1,
      })
    );
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center capitalize">
          <p>
            unlock advantages: <br /> explore the key benefits for choosing
            SPYLT
          </p>

          <div className="mt-20 col-center ">
            {clipPathContent.map((props, index) => (
              <ClipPathTitle key={index} {...props} />
            ))}
          </div>
          <div className="md:mt-0 mt-10">
            <p>And Much More!!!</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default HighLightedFeatures;
