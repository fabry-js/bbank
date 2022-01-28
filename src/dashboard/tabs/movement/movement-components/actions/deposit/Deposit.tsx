import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { PseudoCard } from "../components/PseudoCard";
import { CurrentItems } from "../misc-pages/CurrentItems";
import { MakeItemDeposit } from "./make-item-deposit/MakeItemDeposit";
export const DepositTab: FC = () => {
  return (
    <Box>
      <PseudoCard>
        <CurrentItems />
      </PseudoCard>
      <PseudoCard>
        <MakeItemDeposit />
      </PseudoCard>
    </Box>
  );
};
