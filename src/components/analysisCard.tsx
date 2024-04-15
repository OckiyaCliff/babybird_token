import { ReactNode } from "react";

interface Prop {
  children: ReactNode;

  text: string[];
}

const AnalysisCard = ({ children, text }: Prop) => {
  return (
    <div className="flex space-x-2">
      {children}
      <div className="flex flex-col space-y-3">
        {text.map((text) => (
          <p className="text-white text-lg font-bold">{text}</p>
        ))}
      </div>
    </div>
  );
};

export default AnalysisCard;
