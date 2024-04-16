import { MdPieChart } from "react-icons/md";
import { MdBubbleChart } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";

import WhyBabyBirdReason from "./reason";
import AnalysisCard from "./analysisCard";
import { WHY_BABY_BIRD_REASONS } from "../../utils/constant";

const WhyBabyBird = () => {
  return (
    <section className="w-full flex flex-col space-y-20 p-7 bg-black">
      <div className="w-full flex flex-col space-y-5">
        <h2 className="text-center text-3xl font-semibold text-white">
          Why BABY BIRD
        </h2>

        <p className="text-center text-lg font-semibold text-white">
          The next leader offers you many potential features to invest with him
        </p>
      </div>

      <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-12 lg:justify-center">
        {WHY_BABY_BIRD_REASONS.slice(0, 3).map((reason, index) => (
          <WhyBabyBirdReason
            key={index}
            text={reason.text}
            title={reason.title}
          />
        ))}
      </div>

      <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-12 lg:justify-center">
        {WHY_BABY_BIRD_REASONS.slice(3).map((reason, index) => (
          <WhyBabyBirdReason
            key={index}
            text={reason.text}
            title={reason.title}
          />
        ))}
      </div>

      <section className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-20 lg:justify-center">
        <AnalysisCard text={["Total Supply", "420,000,000,000,000,000"]}>
          <MdPieChart className="w-10 h-10 text-primary" />
        </AnalysisCard>

        <AnalysisCard text={["Presale: 60.71 %", "LP: 29.42%", "CEX: 9.87%"]}>
          <BsFillBarChartFill className="w-10 h-10 text-primary" />
        </AnalysisCard>

        <AnalysisCard text={["Tax: 5% (Buy/Sell)Marketing."]}>
          <MdBubbleChart className="w-10 h-10 text-primary" />
        </AnalysisCard>
      </section>
    </section>
  );
};

export default WhyBabyBird;
