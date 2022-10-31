import type { FC, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type ActivePanelValue = string | number | null;

interface ExpansionPanelContextType {
  activePanel: ActivePanelValue;
  setActivePanel(panelId: string | number | null): void;
}

export const ExpansionPanelContext =
  createContext<ExpansionPanelContextType | null>(null);

export const useExpansionPanelContext = () => useContext(ExpansionPanelContext);

interface ExpansionPanelContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const ExpansionPanelContextProvider: FC<
  ExpansionPanelContextProviderProps
> = ({ children }) => {
  const [activePanel, setActivePanel] = useState<ActivePanelValue>(null);
  return (
    <ExpansionPanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </ExpansionPanelContext.Provider>
  );
};
