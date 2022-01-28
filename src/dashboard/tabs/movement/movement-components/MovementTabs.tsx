import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC } from "react";
import { DepositTab } from "./actions/deposit/Deposit";
import { RetrieveTab } from "./actions/Retrieve";
import { StatusTab } from "./actions/Status";
import { GrStatusInfo } from "react-icons/gr";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const MovementTabs: FC = () => {
  return (
    <Tabs
      orientation="vertical"
      isFitted
      isLazy
      variant={"soft-rounded"}
      colorScheme={"purple"}
    >
      <TabList>
        <Tab marginTop={"50%"}>
          <Box as="span" mr="5%">
            <GrStatusInfo />
          </Box>
          Status
        </Tab>
        <Tab marginTop={"50%"}>
          <Box as="span" mr="5%">
            <AiOutlineArrowRight />
          </Box>
          Deposit
        </Tab>
        <Tab marginTop={"50%"}>
          <Box as="span" mr="5%">
            <AiOutlineArrowLeft />
          </Box>
          Retrieve
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <StatusTab />
        </TabPanel>
        <TabPanel>
          <DepositTab />
        </TabPanel>
        <TabPanel>
          <RetrieveTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
