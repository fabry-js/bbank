import { FC } from "react";
import Routes from "../routing/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { GAuthProvider } from "./GAuthProvider";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import mergedReducers from "../utils/store/index"

const store = configureStore({
  reducer: mergedReducers
})

export const Providers: FC = () => {
  return (
    <>
      <GAuthProvider>
        <ChakraProvider>
          <ReduxProvider store={store}>
            <Routes />
          </ReduxProvider>
        </ChakraProvider>
      </GAuthProvider>
    </>
  );
};
