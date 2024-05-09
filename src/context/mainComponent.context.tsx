
import React, { createContext, useContext, useState } from 'react';
import { MainComponentContextType } from '../constants/page-constants';


const MainComponentContext = createContext<{
    mainComponent: MainComponentContextType;
    viewMobileSideBar: boolean;
    setMainComponent: any;
    setViewMobileSideBar: any;
    reset: any;
  } | null>(null);


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MainComponentContextProvider = ({ children }) => {
const [mainComponent,setMainComponent] = useState(MainComponentContextType.HOME);
const [viewMobileSideBar, setViewMobileSideBar] = useState(false);
console.log('render store', mainComponent)

  const reset = () => {
    setMainComponent(MainComponentContextType.HOME);
    setViewMobileSideBar(false)
  };

  return (
    <MainComponentContext.Provider
      value={{
        mainComponent,
        viewMobileSideBar,
        setViewMobileSideBar,
        setMainComponent,
        reset,
      }}
    >
      {children}
    </MainComponentContext.Provider>
  );
};

export const useMainComponent = () => {
  return useContext(MainComponentContext);
};
