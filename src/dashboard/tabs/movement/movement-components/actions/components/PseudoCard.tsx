import { Box } from "@chakra-ui/react";
import { FC } from "react";

export const PseudoCard: FC = ({children}) => {
  return(
    <Box marginTop={"2%"} p={"5%"} borderWidth={"1px"} borderRadius={"lg"} overflow={"hidden"}>
      { children }
    </Box>
  )
}