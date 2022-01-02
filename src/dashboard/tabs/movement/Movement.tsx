import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { MovementTabs } from "./movement-components/MovementTabs";

export const Movement: FC = () => {
  return(
    <Box>
      <MovementTabs />
    </Box>
  )
}