import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-bottom">
          <div className="footer-logo">Titanium Phone</div>

          <div className="footer-links">
            <a href="#feature">Overview</a>
            <a href="#gallery">Gallery</a>
            <a href="#specs">Specs</a>
          </div>

          <p className="footer-desc">
            This is a concept project built with React & GSAP.
          </p>

          <p className="copyright">© 2026 Hyojun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
