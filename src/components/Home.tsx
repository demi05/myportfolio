import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const nameElement = useRef<HTMLHeadingElement | null>(null);
  const roleElement = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const typedName = new Typed(nameElement.current!, {
      strings: ["Leshi Taiwo Oluwademilade"],
      typeSpeed: 100,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          new Typed(roleElement.current!, {
            strings: ["Front-end Developer"],
            typeSpeed: 100,
            showCursor: false,
          });
        }, 500); 
      },
    });

    return () => {
      typedName.destroy();
    };
  }, []);

  return (
    <Container as={"section"} id="home" maxWidth={"6xl"} mx={"auto"}>
      <Flex alignItems={"center"} minH={"90vh"}>
        <Box>
          <Flex flexDirection={"column"} gap={"1em"}>
            <Text>Hi, my name is</Text>
            <Heading fontSize={"3rem"} ref={nameElement} color={"teal"}></Heading>
            <Text fontSize={"1.5rem"} fontWeight={500} ref={roleElement}></Text>
            <Text>
            I'm a Front-end Developer specializing in building and occasionally designing exceptional digital experiences. With a strong foundation in React, TypeScript, and modern UI frameworks, I create responsive, user-friendly interfaces that enhance usability and engagement. My experience extends to collaborating with cross-functional teams, integrating RESTful APIs, and optimizing performance for seamless user experiences across devices.

            </Text>
            <Button w={"30%"} backgroundColor={"transparent"} border={"1px solid teal"} color={"teal"}>
              <Link href="#projects" _hover={{ textDecoration: "none" }}>
                View Projects
              </Link>
            </Button>
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
