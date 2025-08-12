import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const MessageSection = () => {
  useGSAP(() => {
    const firstMessageSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondMessageSplit = SplitText.create(".second-message", {
      type: "words",
    });

    const paraTextSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const textRevealTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "-20% center",
        end: "center center",
        scrub: true,
      },
    });

    const paraTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });

    gsap.to(firstMessageSplit.words, {
      ease: "power1.in",
      stagger: 1,
      color: "#faeade",
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: "true",
      },
    });

    textRevealTimeLine.to(".msg-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inout",
    });

    paraTimeLine.from(paraTextSplit.words, {
      yPercent: 300,
      ease: "expo.inOut",
      stagger: 0.01,
      duration: 1,
      rotate: 3,
    });

    gsap.to(secondMessageSplit.words, {
      ease: "power1.in",
      stagger: 1,
      color: "#faeade",
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: "true",
      },
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper ">
            <h1 className="first-message">stir up your fearless past and </h1>
            <div
              className="msg-text-scroll"
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">fuel up</h2>
              </div>
            </div>
            <h1 className="second-message">
              your future with every gulp of perfect protein
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
