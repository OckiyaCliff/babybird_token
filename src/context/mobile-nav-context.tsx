import { ReactNode, createContext } from "react";

export type TMobileNavContext = {
  isSideBarHidden: boolean;
  toggleSideBar: () => void;
};

interface Prop {
  children: ReactNode;
  value: TMobileNavContext;
}

export const MobileNavContext = createContext<TMobileNavContext>({
  isSideBarHidden: true,
  toggleSideBar() {},
});

const MobileNavContextProvider = ({ value, children }: Prop) => {
  return (
    <MobileNavContext.Provider value={value}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavContextProvider;
