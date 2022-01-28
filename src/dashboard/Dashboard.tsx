import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { MUpper } from "../pages/MaxUpperComponent";
import { Analysis } from "./tabs/analysis/Analysis";
import { Movement } from "./tabs/movement/Movement";
import { Settings } from "./tabs/settings/Settings";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { UserContext } from "../providers/GAuthProvider";

export const Dashboard: FC = () => {
  return (
    <MUpper>
      <Tabs
        orientation="vertical"
        isFitted
        isLazy
        variant={"soft-rounded"}
        colorScheme={"purple"}
      >
        <TabList>
          <Box>
            <Tab marginTop={"50%"}>
              <Box as="span" mr="5%">
                <IoAnalyticsOutline />
              </Box>
              Analysis
            </Tab>
            <Tab marginTop={"50%"}>
              <Box as="span" mr="5%">
                <CgArrowsExchangeAlt />
              </Box>
              Movement
            </Tab>
            <Tab marginTop={"50%"}>
              <Box as="span" mr="5%">
                <FiSettings />
              </Box>
              Settings
            </Tab>
          </Box>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Analysis />
          </TabPanel>
          <TabPanel>
            <Movement />
          </TabPanel>
          <TabPanel>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MUpper>
  );
};
