import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });
    // gsap.to("#title", {
    //   opacity: 1,
    //   y: 0,
    //   ease: "power1.inOut",
    // });
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.25,
    });
    // gsap.to(".link", {
    //   opacity: 1,
    //   y: 0,
    //   ease: "power1.inOut",
    //   duration: 1,
    //   stagger: 0.25, //stagger makes animation one by one
    // });
  }, []);

  return (
    <section
      id="#highlights"
      className="w-screen h-full overflow-hidden bg-zinc common-padding"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the flim
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the eventflim
              <img src={rightImg} alt="right" className="ml-2 mt-1" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
