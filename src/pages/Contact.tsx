import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container as={"section"} id="contact" maxW={"6xl"}>
      <Flex flexDirection={"column"} justifyContent={"center"} minH={"90vh"}>
        <Heading fontSize={"3rem"}>Collaborate with Me</Heading>
        <Text fontSize={"1.5rem"}>Let's make magic together!</Text>
        <SimpleGrid>
            <Box>Email: demiladeleshi@gmail.com</Box>
            <Box>(+234)8125428118</Box>
            {/* <Box></Box> */}
        </SimpleGrid>
      </Flex>
    </Container>
  )
}

export default Contact
