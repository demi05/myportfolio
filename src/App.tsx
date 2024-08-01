import { Box, Button, ChakraProvider, Flex } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa6";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <ChakraProvider>
      <Box
        className="App"
        pos={"relative"}
        bgGradient="linear(to-br, #1a202c, #2d3748, #4a5568)"
        color="white"
      >
        <Nav />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          pos={"fixed"}
          bottom={"2em"}
          right={"2em"}
          zIndex={1000}
        >
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Go up"
            background={"transparent"} _hover={{background: "transparent"}}
          >
            <FaArrowUp size={16} color="#fff"/>
          </Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
