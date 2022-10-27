import type { FC, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type ActivePanelValue = string | number | null;

interface ExpansionPanelContextType {
  activePanel: ActivePanelValue;
  setActivePanel(panelId: string | number | null): void;
}

export const defaultContext: ExpansionPanelContextType = {
  activePanel: null,
  setActivePanel: () => {
    //
  },
};

export const ExpansionPanelContext =
  createContext<ExpansionPanelContextType>(defaultContext);

export const useExpansionPanelContext = () => useContext(ExpansionPanelContext);

interface ExpansionPanelContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const ExpansionPanelContextProvider: FC<
  ExpansionPanelContextProviderProps
> = ({ children }) => {
  const [activePanel, setActivePanel] = useState<ActivePanelValue>(null);
  console.log(activePanel);
  return (
    <ExpansionPanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </ExpansionPanelContext.Provider>
  );
};
