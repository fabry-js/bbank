import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { ItemComponent } from "./components/ItemComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDbItems, retrieveAllDbItems } from "../../../../../utils/store/slices/itemsSlice";

export const DepositTab: FC = () => {
  /**
   * Retrieval is always shown.
   */
  // Redux here...
  const dispatch = useDispatch()
  const items = useSelector(getCurrentDbItems)
  useEffect(() => {
    dispatch(retrieveAllDbItems())
  }, [])
  console.log(items, typeof items)
  return (
    <Box>
      {items && items.length > 0 ? (
        <Accordion allowToggle>
          {items.map((item, index) => {
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
