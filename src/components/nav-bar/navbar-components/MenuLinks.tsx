import { Stack, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../../providers/GAuthProvider";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import MenuItem from "./MenuItem";
import { _auth } from "../../../utils/firebase/firebase";
const MenuLinks = ({ isOpened }: any) => {
  const { actualUser } = useContext(UserContext);

  return (
    <>
      <Box
        display={{ base: isOpened ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          {actualUser && actualUser !== null ? (
            <>
              <MenuItem to="/dashboard">
                <MdOutlineSpaceDashboard />
                Dashboard
              </MenuItem>
              <Button onClick={() => _auth.signOut()}>
                <FiLogOut />
                Logout
              </Button>
            </>
          ) : (
            <>
              <MenuItem to="/register">
                <FiUserPlus />
                Register
              </MenuItem>
              <MenuItem to="/login">
                <FiLogIn />
                Login
              </MenuItem>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default MenuLinks;
