import { MdCampaign } from "react-icons/md";
import { LuBarChart3 } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

import RoadMapCard from "./road-map-card";
import { ROAD_MAP_PHASES } from "../../utils/constant";

const RoadMap = () => {
  return (
    <section className="w-full flex flex-col space-y-20 p-7 bg-black lg:items-center">
      <h2 className="text-center text-3xl font-semibold text-white">ROADMAP</h2>

      <section className="w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 lg:w-5/6">
        <RoadMapCard
          phaseNo={ROAD_MAP_PHASES[0].phaseNo}
          steps={ROAD_MAP_PHASES[0].steps}
        >
          <FaPeopleGroup className="w-11 h-11 text-gray-400" />
        </RoadMapCard>

        <RoadMapCard
          phaseNo={ROAD_MAP_PHASES[1].phaseNo}
          steps={ROAD_MAP_PHASES[1].steps}
        >
          <LuBarChart3 className="w-11 h-11 text-gray-400" />
        </RoadMapCard>
      </section>

      <section className="w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 lg:w-5/6">
        <RoadMapCard
          phaseNo={ROAD_MAP_PHASES[2].phaseNo}
          steps={ROAD_MAP_PHASES[2].steps}
        >
          <MdCampaign className="w-11 h-11 text-gray-400" />
        </RoadMapCard>

        <RoadMapCard
          phaseNo={ROAD_MAP_PHASES[3].phaseNo}
          steps={ROAD_MAP_PHASES[3].steps}
        >
          <FaGlobeAmericas className="w-11 h-11 text-gray-400" />
        </RoadMapCard>
      </section>
    </section>
  );
};

export default RoadMap;
