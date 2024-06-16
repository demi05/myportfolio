import { Box, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container as={"section"} id="contact" maxW={"6xl"}>
      <Flex flexDirection={"column"} justifyContent={"center"}>
        <Heading fontSize={"1.5rem"}>Collaborate with Me</Heading>
        <Text fontSize={"1rem"}>Let's make magic together!</Text>
        <SimpleGrid>
            <Box>Send me a mail: demiladeleshi@gmail.com</Box>
            <Box>Reach Out - (+234)8125428118</Box>
            {/* <Box></Box> */}
        </SimpleGrid>
      </Flex>
    </Container>
  )
}

export default Contact
