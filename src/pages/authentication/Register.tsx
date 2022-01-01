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
      title: "Account Creato con successo, si festeggia!🎉",
      description: "Controlla la tua E-Mail per la verifica!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  const showAccountCouldNotBeCreatedToast = () =>
    toast({
      title: "Non ci voleva, non è stato possibile creare l'account!😢",
      description: "Forse hai già usato questa email",
      status: "error",
      duration: 9000,
      isClosable: true,
    });

  const onSubmit = (data: any) => {
    createUserWithEmailAndPassword(_auth, data.email, data.password)
      .then((_userCredential) => {
        showAccountCreatedToast();
        // forse firebase invia automaticamente la verify...
        navigate("/", {replace: true})
      })
      .catch(() => showAccountCouldNotBeCreatedToast());
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