import { useState } from "react";

import Hero from "./components/hero-section";
import SideNavBar from "./components/side-nav-bar";
import OurPartners from "./components/ourPartners";
import RoadMap from "./components/road-map-section";
import WhyBabyBird from "./components/why-baby-bird-section";
import MobileNavContextProvider from "./context/mobile-nav-context";

function App() {
  const [isSideBarHidden, setIsSideBarHidden] = useState<boolean>(true);

  const toggleSideBar = (): void => {
    setIsSideBarHidden((prev) => !prev);
  };
  return (
    <MobileNavContextProvider value={{ isSideBarHidden, toggleSideBar }}>
      <main className="w-screen h-fit overflow-hidden">
        {!isSideBarHidden && <SideNavBar />}
        <Hero />
        <WhyBabyBird />
        <RoadMap />
        <OurPartners />
      </main>
    </MobileNavContextProvider>
  );
}

export default App;
