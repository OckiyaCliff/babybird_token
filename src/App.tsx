import { useState } from "react";
import Hero from "./components/hero";
import SideNavBar from "./components/side-nav-bar";
import MobileNavContextProvider from "./context/mobile-nav-context";
import WhyBabyBird from "./components/why-baby-bird";
import RoadMap from "./components/road-map";
import OurPartners from "./components/ourPartners";

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
