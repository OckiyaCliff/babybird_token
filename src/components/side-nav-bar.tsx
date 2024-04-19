import { useContext } from "react";
import { FaTimes } from "react-icons/fa";

import { MobileNavContext } from "../context/mobile-nav-context";

const SideNavBar = () => {
  const { toggleSideBar } = useContext(MobileNavContext);

  return (
    <aside
      className="w-screen h-screen flex flex-col z-50 space-y-5 bg-black fixed left-0 top-0 lg:hidden
    "
    >
      <div className="w-full p-5 flex justify-end">
        <FaTimes
          className="text-white font-bold text-2xl"
          onClick={toggleSideBar}
        />
      </div>

      <div className="flex flex-col space-y-10 px-5 py-10">
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          Gate.IO
        </a>
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          BITGET
        </a>
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          MEXC
        </a>
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          CERTIX Audit
        </a>
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          White Paper
        </a>
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          Tokenomics
        </a>
        <a
          href=""
          className="text-lg text-white font-medium font-ChelseaMarket hover:text-gray-400"
        >
          RoadMap
        </a>
      </div>
    </aside>
  );
};

export default SideNavBar;
