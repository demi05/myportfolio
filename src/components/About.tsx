import { Box, Container, Flex, Heading} from "@chakra-ui/react";

const About = () => {
  const languages = ["HTML5", "CSS3", "Tailwind", "Sass", "ReactJs", "TypeScript"]
  const boxStyles = {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "1rem",
    padding: "1em"
  }
  return (
    <Container as={"section"} id="about" maxW={"6xl"} textAlign={"center"} mb={"5em"}>
      <Heading as={"h2"}>Languages & FrameWorks</Heading>
      <Flex flexWrap={"wrap"} gap={"1em"} alignItems={"center"} justifyContent={"center"} mt={"1.5em"}>
        {languages.map((language, index) => {
          return(
            <Box sx={boxStyles} key={index}>
              <Heading as={"h3"}>{language}</Heading>
            </Box>
          )
        })}
      </Flex>
    </Container>
  )
}

export default About
