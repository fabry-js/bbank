import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { MUpper } from "./MaxUpperComponent";

export const Home: FC = () => {
  return(
    <MUpper>
      <Box padding={"5%"}>
        <Text fontSize={"4xl"} textAlign={"center"}>Welcome to boxes.</Text>
        <Text fontStyle={"italic"} textAlign={"center"}>🚧This page is a WIP🚧</Text>
      </Box>
    </MUpper>
  )
}