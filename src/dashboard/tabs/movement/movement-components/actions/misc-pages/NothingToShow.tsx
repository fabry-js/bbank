import { Center, Text } from "@chakra-ui/react";

export const NothingToShow = () => {
  return (
    <>
      <Center>
        <Text fontSize={"2xl"} opacity={0.5}>
          Nothing to show here
        </Text>
      </Center>
      <Center>
        <Text fontSize={"small"} fontStyle={"italic"} opacity={0.5}>
          our servers feel empty :&#40;
        </Text>
      </Center>
    </>
  );
};
