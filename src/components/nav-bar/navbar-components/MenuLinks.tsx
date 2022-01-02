import { Stack, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../../providers/GAuthProvider";
import { FiLogIn, FiLogOut, FiUserPlus } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import MenuItem from "./MenuItem";
import { _auth } from "../../../utils/firebase/firebase";
import { useNavigate } from "react-router-dom";

const MenuLinks = ({ isOpened }: any) => {
  const { actualUser } = useContext(UserContext);
  const navigate = useNavigate();

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
          {actualUser && actualUser !== null ? (
            <MenuItem to="/dashboard">
              <Box as="span" mr="5%">
                <MdOutlineSpaceDashboard />
              </Box>
               Dashboard
              </MenuItem>
          ) : (
            <MenuItem to="/">Home</MenuItem>
          )}
          {actualUser && actualUser !== null ? (
            <>
              <Button onClick={() => {
                 _auth.signOut()
                 navigate("/", { replace: true })
              }}>
              <Box as="span" mr="5%">
                <FiLogOut />
              </Box>
                Logout
              </Button>
            </>
          ) : (
            <>
              <MenuItem to="/register">
              <Box as="span" mr="5%">
                <FiUserPlus />
              </Box>
                Register
              </MenuItem>
              <MenuItem to="/login">
              <Box as="span" mr="5%">
                <FiLogIn />
              </Box>
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
