import {
  Box,
  Container,
  Flex,
  Link as ChakraLink,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const navStyles = {
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
  };

  const navData = [
    ["Home", "/"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  // const shadow = scrollY > 0 ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none";

  return (
    <Box padding={"2em"} >
      <Container
        maxW={"screen"}
        pos={"fixed"}
        top={0}
        left={0}
        right={0}
        // boxShadow={shadow}
        zIndex={1000}
      >
        <Flex as={"nav"} sx={navStyles} display={{ base: "none", md: "flex" }}>
          {navData.map(([data, link], index) => (
            <ChakraLink key={index} href={link} paddingY={{ base: "0.5em", md: "0" }}>
              {data}
            </ChakraLink>
          ))}
        </Flex>
        <Flex>
        <IconButton
          aria-label="Open Menu"
          icon={<FiMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen} background={"transparent"} ml={"auto"} color={"#fff"} _hover={{background: "transparent"}}
          />
          </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <Button
                onClick={onClose}
                pos="absolute"
                top="1em"
                right="1em"
                variant="ghost"
                aria-label="Close Menu" 
                background={"transparent"} 
                fontSize={"1.5rem"} color={"#fff"}  _hover={{background: "transparent"}}
              >
                <FiX />
              </Button>
              <DrawerBody bgGradient="linear(to-br, #1a202c, #2d3748, #4a5568)"
        color="white">
                <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} gap={"1.5em"} h={"100%"}>
                  {navData.map(([data, link], index) => (
                    <ChakraLink key={index} href={link} onClick={onClose} fontSize={"1.25rem"} _hover={{textDecoration: "none", color:"teal"}}>
                      {data}
                    </ChakraLink>
                  ))}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Nav;
