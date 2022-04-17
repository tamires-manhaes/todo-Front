import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const DEFAULT_VALUE: ILoadingContext = {
  isLoading: false,
  setIsLoading: () => false,
};

export const LoadingContext = createContext<ILoadingContext>(DEFAULT_VALUE);

export const LoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
