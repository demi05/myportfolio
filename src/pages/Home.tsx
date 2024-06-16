import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import myBackgroundImage from "../assets/images/images (4).jpg";
import { Link } from "react-router-dom";

const Home = () => {
  {
    console.log(myBackgroundImage);
  }
  return (
    <Container maxWidth={"6xl"}>
      <Flex alignItems={"center"} minH={"90vh"}>
        <Box
          backgroundImage={`url(${myBackgroundImage})`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
        >
          <Flex flexDirection={"column"} gap={"1em"}>
            <Heading fontSize={"3rem"}>Leshi Taiwo Oluwademilade</Heading>
            <Text fontSize={"1.5rem"}>Frontend Developer</Text>
            <Flex fontSize={"1.5rem"} gap={"1.2em"}>
              <Link to={"https://github.com/demi05"}>
                <FaGithub />
              </Link>
              <Link to={"https://x.com/toniiaa___"}>
                <FaTwitter />
              </Link>
              <Link to={"https://www.linkedin.com/in/demiladeleshi276/"}>
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
