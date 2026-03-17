import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import features from "../assets/data/FeatureData.json";
import "./Feature.scss";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.utils.toArray(".feature-item").forEach((el) => {
        const img = el.querySelector(".feature-img");
        const txt = el.querySelector(".feature-txt");

        const isLeft = el.classList.contains("left");

        gsap.from(img, {
          x: isLeft ? 120 : -120,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });

        gsap.from(txt, {
          x: isLeft ? -120 : 120,
          opacity: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });

        gsap.to(img, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="feature" ref={sectionRef}>
      <div className="feature-title">
        <h1 className="feature-main">
          가장 진보된
          <br />
          스마트폰 경험
        </h1>
        <p className="feature-sub">정밀함, 성능, 완벽함</p>
      </div>

      {features.map((item) => (
        <div className={`feature-item ${item.layout}`} key={item.id}>
          <img
            src={require(`../assets/images/${item.img}`)}
            alt={item.title}
            className="feature-img"
          />

          <div className="feature-txt">
            <h3 className="feature-item-title">{item.title}</h3>
            <p className="feature-item-sub">{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feature;
