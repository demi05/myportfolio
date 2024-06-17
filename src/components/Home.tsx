import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import myBackgroundImage from "../assets/images/images (4).jpg";
import { Link } from "@chakra-ui/react";

const Home = () => {
  const i =0 
  const textEl: HTMLParagraphElement | null = document.querySelector("#text-el")
  const speed = 50

//  const typeWriter = () => {
//   if(textEl){
//     if (i < textEl.length) {
//       textEl.innerHTML += textEl.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }
//   }

  return (
    <Container as={"section"} id="home" maxWidth={"6xl"}>
      <Flex alignItems={"center"} minH={"90vh"}>
        <Box
          /* backgroundImage={`url(${myBackgroundImage})`}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"} */
        >
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
