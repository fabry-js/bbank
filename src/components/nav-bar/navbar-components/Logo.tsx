import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Box {...props}>
      <SimpleGrid columns={[1, 2]}>
        <Text fontWeight="semibold">
        bbank.
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default Logo;
