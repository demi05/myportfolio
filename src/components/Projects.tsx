import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container as={"section"} id="projects" maxW={"6xl"}>
        <Flex flexDir={"column"} justifyContent={"center"}>
      <Heading fontSize={"3rem"}>My Work</Heading>
      <Text fontSize={"1.5rem"}>Check out some of my projects...</Text>
      {/* give 5 projects  */}
      </Flex>
    </Container>
  )
}

export default Projects
