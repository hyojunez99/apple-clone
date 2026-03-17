import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import specs from "../assets/data/SpecsData.json";
import "./Specs.scss";

gsap.registerPlugin(ScrollTrigger);

const Specs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handlers = [];

    cardsRef.current.forEach((card) => {
      if (!card) return;

      const handler = (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      };

      card.addEventListener("mousemove", handler);
      handlers.push({ card, handler });
    });

    return () => {
      handlers.forEach(({ card, handler }) => {
        card.removeEventListener("mousemove", handler);
      });
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".specs-title",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 120, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          },
        );

        gsap.to(card, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: card,
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
    <section id="specs" ref={sectionRef}>
      <h1 className="specs-title">기술 사양</h1>

      <div className="spec-grid">
        {specs.map((item, i) => (
          <div
            className="spec-card"
            key={item.id}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img
              src={require(`../assets/images/icons/${item.icon}`)}
              alt={item.title}
              className="spec-icon"
            />
            <h3 className="spec-card-title">{item.title}</h3>
            <ul className="spec-card-list">
              {item.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specs;
