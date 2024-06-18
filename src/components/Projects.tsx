import { Box, Container, Flex, Heading, Image, Link } from "@chakra-ui/react";
import plantsRuS from "../assets/images/plantsRUs.jpg";
import tipCalculator from "../assets/images/tip calculator.jpg"

const Projects = () => {
  const projectStyles = {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "1rem",
    padding: "1em"
  }

  const images = [plantsRuS, tipCalculator, ]
  const linksLive = ["https://plantsrus.netlify.app/", "https://tipcalculatorappdemi05.netlify.app/"]
  const linksProject = ["https://github.com/demi05/PlantsRUs", "https://github.com/demi05/tip-calculator-app"]
  return (
    <Container as={"section"} id="projects" maxW={"6xl"} mb={"5em"}>
        <Flex flexDir={"column"} justifyContent={"center"}>
      <Heading fontSize={"3rem"}>My Work</Heading>
      <Flex flexWrap={"wrap"} gap={"1em"} alignItems={"center"} justifyContent={"center"} mt={"1.5em"}>
        {linksLive.map((link, index) => {
          return (
            <Box key={index} sx={projectStyles} >
              <Link href={link}>
          <Image src={images[index]} height={"40vh"} cursor={"pointer"} margin={"0 auto"}/>
          </Link>
          <Flex flexDir={"column"} gap={"1em"} alignItems={"center"} mt={"0.5em"} flexWrap={"wrap"}>
          <Link href={linksProject[index]}>Project</Link>
          </Flex>
        </Box>
          )
        })}
        </Flex>
      </Flex>
    </Container>
  )
}

export default Projects
