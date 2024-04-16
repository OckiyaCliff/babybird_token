import { ReactNode } from "react";
import LineDivider from "./line-dividers";

interface Prop {
  phaseNo: number;
  steps: string[];
  children: ReactNode;
}

const RoadMapCard = ({ steps, phaseNo, children }: Prop) => {
  return (
    <div className="w-full flex flex-col space-y-">
      <header className="w-full flex flex-col items-center space-y-5">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary">
          {children}
        </div>
        <LineDivider />
      </header>

      <aside className="flex flex-col space-y-5">
        <h4 className="text-lg text-center text-white font-bold">
          PHASE {phaseNo}
        </h4>
        {steps.map((step, i) => (
          <p key={i} className="text-lg text-white font-bold">
            ✅ {step}
          </p>
        ))}
      </aside>
    </div>
  );
};

export default RoadMapCard;
