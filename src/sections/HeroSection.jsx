import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 760px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const heroTitleText = SplitText.create(".hero-title", {
      type: "chars",
    });

    const textAnimationTimeLine = gsap.timeline({
      delay: 1,
    });

    const heroSectionTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "5% top",
        end: "bottom top",
        scrub: true,
      },
    });

    textAnimationTimeLine
      .to(".hero-content", {
        opacity: 1,
        ease: "power1.inOut",
        y: 0,
      })
      .to(
        ".hero-text-scroll",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
          duration: 1,
        },
        "-=0.5"
      )
      .from(
        heroTitleText.chars,
        {
          ease: "power2.inOut",
          yPercent: 200,
          stagger: 0.02,
          opacity: 0,
        },
        "-=0.6"
      );

    heroSectionTimeLine.to(".hero-container", {
      scale: 0.9,
      rotate: 7,
      yPercent: 30,
      ease: "power1.inout",
    });
  });

  return (
    <section id="home" className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}

            <img
              src="images/hero-img.png"
              alt="hero-image"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="videos/hero-bg.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
          />
        )}

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div
            style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>
          <h2 className="capitalize">
            Live life to the fullest with SPYLT: boredom and embrace your inner
            kid with every deliciously smooth chug!!!
          </h2>

          <div className="hero-button">
            <p>Chug A spylt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
