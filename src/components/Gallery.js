import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PhoneImg from "../assets/images/phone-img.png";

import GalleryImg1 from "../assets/images/gallery-img-1.png";
import GalleryImg2 from "../assets/images/gallery-img-2.png";
import GalleryImg3 from "../assets/images/gallery-img-3.png";
import GalleryImg4 from "../assets/images/gallery-img-4.png";
import GalleryImg5 from "../assets/images/gallery-img-5.png";
import GalleryImg6 from "../assets/images/gallery-img-6.png";

import "./Gallery.scss";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-top h1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-top",
          start: "top 80%",
        },
      });

      gsap.from(".phoneimg", {
        scale: 0.9,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".phoneimg",
          start: "top 80%",
        },
      });

      gsap.to(".phoneimg", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: ".gallery-top",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".gallery-bottom h1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-bottom",
          start: "top 80%",
        },
      });

      gsap.set(".gallery-grid img", { opacity: 0 });

      gsap.to(".gallery-grid img", {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef}>
      <div className="gallery-top">
        <h1>완벽한 디자인</h1>
        <img src={PhoneImg} alt="PhoneImg" className="phoneimg" />
      </div>

      <div className="gallery-bottom">
        <h1>모든 각도에서 완벽</h1>

        <div className="gallery-grid">
          <img src={GalleryImg1} alt="" />
          <img src={GalleryImg2} alt="" />
          <img src={GalleryImg3} alt="" />
          <img src={GalleryImg4} alt="" />
          <img src={GalleryImg5} alt="" />
          <img src={GalleryImg6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
