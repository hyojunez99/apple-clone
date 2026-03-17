import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Specs from "../components/Specs";
import CTA from "../components/CTA";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import "../assets/scss/global.scss";

const AppleLandingPage = () => {
  return (
    <>
      <Header />

      <main className="apple-landing">
        <Hero />
        <Feature />
        <Gallery />
        <Specs />
        <CTA />
      </main>

      <Footer />
    </>
  );
};

export default AppleLandingPage;
