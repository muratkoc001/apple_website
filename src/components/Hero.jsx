import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  // UseState usage get screen width
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  // Handle changes screen size
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };

  // Resize trigger function
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return window.removeEventListener("resize",handleVideoSrcSet);
  }, []);

  // Gsap usage
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
      ease: "power1.inOut",
    }),

    gsap.to('#cta',{
      opacity: 1,
      y: -50,
      delay: 2
    })
  }, []);
  return (
    // Hero section
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        {/* Hero title */}

        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        {/* Video container */}
      </div>
      {/* Hero container */}
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
      {/* CTA button container */}
    </section>
  );
};

export default Hero;
