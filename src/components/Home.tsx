import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

const Home = () => {

  return (
    <Container as={"section"} id="home" maxWidth={"6xl"}>
      <Flex alignItems={"center"} minH={"90vh"}>
        <Box>
          <Flex flexDirection={"column"} gap={"1em"}>
            <Heading fontSize={"3rem"}>Leshi Taiwo Oluwademilade</Heading>
            <Text id="text-el" fontSize={"1.5rem"}>Frontend Developer</Text>
            <Flex fontSize={"1.5rem"} gap={"1.2em"}>
              <Link href={"https://github.com/demi05"} isExternal>
                <FaGithub />
              </Link>
              <Link href={"https://x.com/toniiaa___"} isExternal>
                <FaTwitter />
              </Link>
              <Link href={"https://www.linkedin.com/in/demiladeleshi276/"} isExternal>
                <FaLinkedin />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
