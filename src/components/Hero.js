import React, { useLayoutEffect, useRef } from "react";
import HeroImg from "../assets/images/hero-img.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.scss";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.from(".hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          ".hero-sub",
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".hero-img",
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
            duration: 1.4,
          },
          "-=0.9",
        );

      gsap.to(".hero-img", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-inner">
        <h1 className="hero-title">Titanium Phone</h1>
        <p className="hero-sub">Strong. Light. Powerful.</p>
        <img className="hero-img" src={HeroImg} alt="Titanium Phone" />
      </div>
    </section>
  );
};

export default Hero;
