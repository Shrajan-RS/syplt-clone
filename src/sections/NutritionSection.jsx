import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 780px)",
  });

  const [list, setList] = useState(nutrientLists);

  useEffect(() => {
    if (isMobile) {
      setList(nutrientLists.slice(0, 3));
    } else {
      setList(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const headingTextSplit = SplitText.create(".nutrition-section h1", {
      type: "chars",
    });

    const paraTextSplit = SplitText.create(".nutrition-section .capitalize", {
      type: "words lines",
      linesClass: "paragraph-lines",
    });

    const textTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "20% center",
        end: "center center",
        scrub: true,
      },
    });

    textTimeLine
      .from(headingTextSplit.chars, {
        yPercent: 100,
        ease: "power1.inOut",
        stagger: 0.02,
      })
      .from(paraTextSplit.lines, {
        yPercent: 200,
        ease: "power1.inOut",
        stagger: 0.2,
        opacity: 0,
        delay: 1,
      })
      .to(".nutrition-text-scroll", {
        ease: "power1.in",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        yPercent: 65,
        xPercent: 15,
      });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />
      <img src="/images/big-img.png" alt="" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1>it still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                <h2 className="text-milk-yellow">Body good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md ">
            <p className="text-lg md:text-right text-balance font-paragraph capitalize ">
              milk contains a wide array of nutrients, including vitamins,
              minerals and protein and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {list.map(({ label, amount, key }) => (
              <div key={key} className="relative flex-1 col-center">
                <div className="text-center">
                  <p className="md:text-lg font-paragraph">{label}</p>
                  <p className="text-sm mt-2 mb-2 font-paragraph">Up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {amount}
                  </p>
                </div>
                {key !== list.length && <div className="spacer-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
