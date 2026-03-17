import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CTA.scss";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ctaRef);

      gsap.fromTo(
        q(".cta-title"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        q(".cta-sub"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        q(".cta-buttons button"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={ctaRef}>
      <h1 className="cta-title">Experience the future.</h1>
      <p className="cta-sub">지금 바로 시작하세요.</p>

      <div className="cta-buttons">
        <button className="primary">Buy Now</button>
        <button className="secondary">Learn More</button>
      </div>
    </section>
  );
};

export default CTA;
