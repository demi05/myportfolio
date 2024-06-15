import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import backgroundImage from "../assets/images/images (4).jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box backgroundImage={`url(${backgroundImage})`} backgroundSize={"cover"} backgroundPosition={"center"} backgroundRepeat={"no-repeat"}>
      <Container>
        <Heading>Leshi Taiwo Oluwademilade</Heading>
        <Text>Frontend Developer</Text>
        <Flex>
        <Link to={"https://github.com/demi05"}><FaGithub /></Link>
        <Link to={"https://x.com/toniiaa___"}><FaTwitter /></Link>
        <Link to={""}><FaLinkedin /></Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Home
