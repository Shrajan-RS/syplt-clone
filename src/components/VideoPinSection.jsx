import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const videoAnimationTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-10% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      videoAnimationTimeLine.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src="videos/pin-video.mp4" playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <img
            src="images/circle-text.svg"
            alt="play-video"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="images/play.svg"
              alt="play-icon"
              className="size-[3vw] ml-[0.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
