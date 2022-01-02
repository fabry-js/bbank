import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../providers/GAuthProvider";
import { retrieveAllItemsFromDatabase } from "../../../../../utils/firebase/dbOperations";
import { ItemComponent } from "./components/ItemComponent";
import { Item } from "./models/items";

export const DepositTab: FC = () => {
  const { actualUser } = useContext(UserContext);
  /**
   * Retrieval is always shown.
   */
  const itemsToRetrieve = (): Item[] => {
    let r: Item[] = [];
    retrieveAllItemsFromDatabase(actualUser).then((items) => {
      return items.forEach((item) => r.push(item));
    });
    return r;
  };
  const [dbItems, setDbItems] = useState<Item[]>(itemsToRetrieve);
  console.log(dbItems);
  return (
    <Box>
      {dbItems && dbItems.length > 0 ? (
        <Accordion allowToggle>
          {dbItems.map((item, index) => {
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
                  <AccordionButton>{name}</AccordionButton>
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
      ) : (
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
      )}
    </Box>
  );
};
