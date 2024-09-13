import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type HeaderMenuProvider = {
  children: ReactNode;
}

type HeaderMenuContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMenuContext = createContext<HeaderMenuContextType | null>(null);

export function useHeaderMenuContext(): HeaderMenuContextType {
  const context = useContext(HeaderMenuContext);
    if (context === null) {
      throw new Error('useHeaderMenuContext must be used within a HeaderMenuProvider');
    }
    return context;
}

export default function HeaderMenuProvider(props: HeaderMenuProvider): JSX.Element {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HeaderMenuContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </HeaderMenuContext.Provider>
  )
}