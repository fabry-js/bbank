import React, { useContext, useState } from "react";
import {
  Button,
  Center,
  Container,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import { UserContext } from "../../providers/GAuthProvider";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { _auth } from "../../utils/firebase/firebase";

const Register = () => {
  const { actualUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (actualUser) {
    navigate("/")
  }

  const [showPasswordText, setShowPasswordText] = useState<boolean>(false);
  const toast = useToast();

  const showAccountCreatedToast = () =>
    toast({
      title: "Successfully created your account, yee!",
      description: "Check your e-mail for verification",
      status: "success",
      duration: 10000,
      isClosable: true,
    });
  const showAccountCouldNotBeCreatedToast = (errorCode: string) => {
    let shownErrMessage = "";
    switch (errorCode) {
      case "auth/weak-password":
        shownErrMessage = "Password should be at least 6 characters"
        break;
      case "auth/email-already-in-use":
        shownErrMessage = "E-Mail is already in use"
        break;
      default:
        shownErrMessage = "Unknown error (Maybe a network one?)"
        break;
    }
    return(
      toast({
      title: "Oh no, something went wrong with your account's creation!😢",
      description: shownErrMessage,
      status: "error",
      duration: 9000,
      isClosable: true,
    }))};

  const onSubmit = (data: any) => {
    createUserWithEmailAndPassword(_auth, data.email, data.password)
      .then((_userCredential) => {
        showAccountCreatedToast();
        // TODO: Quando un nuovo utente joina, inviare una notifica al master panel (il mio personale eheh)
        navigate("/", {replace: true})
      })
      .catch((firebaseError) => {
        const errorCode = firebaseError.code
        showAccountCouldNotBeCreatedToast(errorCode)
      });
  };
  const { register, handleSubmit } = useForm();

  return (
    <>
      <TopNavBar />
      <Container mt="8">
        <Stack spacing={3}>
          <Center>
            <Text fontSize="3xl">Register</Text>
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              border="2px"
              borderColor="purple.500"
              placeholder="E-Mail"
              size="lg"
              {...register("email")}
            />
            <InputGroup>
              <Input
                type={showPasswordText ? "text" : "password"}
                border="2px"
                mt="1"
                borderColor="purple.500"
                placeholder="Password"
                size="lg"
                {...register("password")}
                autoFocus
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  mt="4"
                  variant="outline"
                  onClick={() => setShowPasswordText(!showPasswordText)}
                >
                  {showPasswordText ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              size="lg"
              border="2px"
              borderColor="purple.500"
              variant="outline"
              type="submit"
              mt="1"
              width="100%"
            >
              Register! 🌟
            </Button>
          </form>
          <Text fontSize="p">
            Already have an account? <Link to="/login">Click here!</Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Register;