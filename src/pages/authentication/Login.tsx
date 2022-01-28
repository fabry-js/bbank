import { useContext, useState } from "react";
import {
  Button,
  Center,
  Container,
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { _auth } from "../../utils/firebase/firebase";

const Login = () => {
  const { actualUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (actualUser) {
    navigate("/dashboard")
  }

  const [showPasswordText, setShowPasswordText] = useState<boolean>(false);
  const toast = useToast();

  const showLoggedSuccessfullyToast = () =>
    toast({
      title: "Successfully logged in! 🦾",
      description: "Good Work!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  const showCouldNotBeLoggedInToast = () =>
    toast({
      title: "Damn! E-mail or password not matching",
      status: "error",
      duration: 9000,
      isClosable: true,
    });

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(_auth, data.email, data.password)
      .then((_userCredential) => {
        showLoggedSuccessfullyToast();
        navigate("/dashboard", {replace: true})
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
              Login! 🚀
            </Button>
          </form>
          <Text fontSize="p">
            Don't have an account yet? <Link to="/register">Click here!</Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Login;