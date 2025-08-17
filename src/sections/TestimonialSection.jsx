import { useRef } from "react";
import { cards } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  const videoRefs = useRef([]);

  const handleVideoPlay = (index) => {
    const video = videoRefs.current[index];
    video.play();
    console.log(video);
  };

  const handleVideoPause = (index) => {
    const video = videoRefs.current[index];
    video.pause();
  };

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const textTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    const pinVideoTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "15% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    textTimeLine
      .to(".first-title", {
        xPercent: 70,
      })
      .to(
        ".sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    pinVideoTimeLine.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.rotation} ${card.translation}`}
            onMouseEnter={() => handleVideoPlay(index)}
            onMouseLeave={() => handleVideoPause(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />

            <div className="absolute bottom-5 left-4 flex justify-center items-center gap-3">
              <div className="h-14 w-14 rounded-[50%] flex justify-center items-center">
                <img
                  src={card.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="md:text-[2vw] text-2xl tracking-[0.1vw] text-milk m-0">
                {card.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
