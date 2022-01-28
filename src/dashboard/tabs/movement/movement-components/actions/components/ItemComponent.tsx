import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineFieldNumber, AiOutlineNumber } from "react-icons/ai";
import { CgRename } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { ImStack } from "react-icons/im";
import { BsCalendarDate, BsPerson } from "react-icons/bs";

import { Item } from "../../../../../../models/items";

export const ItemComponent: FC<Item> = ({
  addedBy,
  dateAdded,
  id,
  name,
  numericId,
  photo_url,
  quantity
}) => {
  return(
    <List spacing={3}>
      <ListItem title="ID">
        <ListIcon as={AiOutlineFieldNumber} color={"purple.500"} />
        {id}
      </ListItem>
      <ListItem title="Item Name">
        <ListIcon as={CgRename} color={"purple.500"} />
        {name}
      </ListItem>
      <ListItem title="Quantity">
        <ListIcon as={ImStack} color={"purple.500"} />
        {quantity}
      </ListItem>
      <ListItem title="Numeric ID">
        <ListIcon as={AiOutlineNumber} color={"purple.500"} />
        {numericId}
      </ListItem>
      <ListItem title="Photo URL">
        <ListIcon as={HiOutlinePhotograph} color={"purple.500"} />
        {photo_url}
      </ListItem>
      <ListItem title="Date Added">
        <ListIcon as={BsCalendarDate} color={"purple.500"} />
        {dateAdded}
      </ListItem>
      <ListItem title="Added By">
        <ListIcon as={BsPerson} color={"purple.500"} />
        {addedBy}
      </ListItem>
    </List>
  )
}