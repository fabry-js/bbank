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
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { _auth } from "../../utils/firebase/firebase";

const Login = () => {
  const { actualUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (actualUser) {
    navigate("/")
  }

  const [showPasswordText, setShowPasswordText] = useState<boolean>(false);
  const toast = useToast();

  const showLoggedSuccessfullyToast = () =>
    toast({
      title: "Login Eseguito con successo! 🎉",
      description: "Fantastico!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  const showCouldNotBeLoggedInToast = () =>
    toast({
      title: "Oh no no, password o username errati!😢",
      description: "Mannaggia, puoi riprovare per favore? Graziee!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(_auth, data.email, data.password)
      .then((_userCredential) => {
        showLoggedSuccessfullyToast();
        navigate("/", {replace: true})
      })
      .catch(() => showCouldNotBeLoggedInToast());
  };
  const { register, handleSubmit } = useForm();

  return (
    <>
      <TopNavBar />
      <Container mt="8">
        <Stack spacing={3}>
          <Center>
            <Text fontSize="3xl">Login</Text>
          </Center>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              border="2px"
              borderColor="green.500"
              placeholder="E-Mail"
              size="lg"
              {...register("email")}
            />
            <InputGroup>
              <Input
                type={showPasswordText ? "text" : "password"}
                border="2px"
                mt="1"
                borderColor="green.500"
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
              borderColor="green.500"
              variant="outline"
              type="submit"
              mt="1"
              width="100%"
            >
              Login! 🚀
            </Button>
          </form>
        </Stack>
      </Container>
    </>
  );
};

export default Login;