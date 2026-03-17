import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const headerHeight = 80; // fixed header 높이
      window.scrollTo({
        top: el.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <div className="logo" onClick={() => scrollToSection("#hero")}>
          Titanium Phone
        </div>

        <nav>
          <a onClick={() => scrollToSection("#feature")}>Overview</a>
          <a onClick={() => scrollToSection("#gallery")}>Gallery</a>
          <a onClick={() => scrollToSection("#specs")}>Specs</a>
          <a onClick={() => scrollToSection("#cta")} className="buy">
            Buy
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
