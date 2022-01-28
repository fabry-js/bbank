import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Center,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { collection, getFirestore } from "firebase/firestore";
import { FC, useContext } from "react";
import { UserContext } from "../../../../../../providers/GAuthProvider";
import { app } from "../../../../../../utils/firebase/firebase";
import { ItemComponent } from "../components/ItemComponent";
import { NothingToShow } from "./NothingToShow";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const CurrentItems: FC = () => {
  /**
   * Retrieval is always shown.
   */
  const { actualUser } = useContext(UserContext);
  const [notFilteredItems, loading, error] = useCollectionData(
    collection(getFirestore(app), actualUser.email)
  );

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Text fontSize={"2xl"}>Error occurred!</Text>
      </Center>
    );
  }

  const filteredItems = notFilteredItems?.filter(
    (item) => item.id !== "analytics"
  );
  return (
    <>
      {filteredItems && filteredItems.length > 0 ? (
        <>
          <Text fontSize={"2xl"} fontWeight={"bold"} opacity={0.5}>
            Currently Stored Items:{" "}
          </Text>

          <Accordion allowToggle>
            {filteredItems.map((item, index) => {
              const {
                name,
                id,
                addedBy,
                dateAdded,
                numericId,
                photo_url,
                quantity,
              } = item;
              return (
                <Box key={index}>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex={1} textAlign={"left"}>
                        {name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Box padding={"3%"}>
                        <ItemComponent
                          name={name}
                          id={id}
                          addedBy={addedBy}
                          dateAdded={dateAdded}
                          numericId={numericId}
                          photo_url={photo_url}
                          quantity={quantity}
                        />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Box>
              );
            })}
          </Accordion>
        </>
      ) : (
        <NothingToShow />
      )}
    </>
  );
};
