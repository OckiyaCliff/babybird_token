import HeroContent from "./hero-content";
import MobileNavBar from "./mobile-nav-bar";
import DesktopNavBar from "./desktop-nav-bar";

const Hero = () => {
  return (
    <section className="hero-con">
      <MobileNavBar />
      <section className="w-full h-full flex flex-col lg:justify-normal lg:space-y-32">
        <DesktopNavBar />
        <HeroContent />
      </section>
    </section>
  );
};

export default Hero;
