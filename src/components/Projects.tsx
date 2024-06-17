import { Box, Container, Flex, Heading, Image, Link } from "@chakra-ui/react";
import myPic from "../assets/images/my-pic.jpg";

const Projects = () => {
  const images = [myPic, myPic, myPic, myPic, myPic]
  return (
    <Container as={"section"} id="projects" maxW={"6xl"} mb={"5em"}>
        <Flex flexDir={"column"} justifyContent={"center"}>
      <Heading fontSize={"3rem"}>My Work</Heading>
      <Flex flexWrap={"wrap"} gap={"1em"} alignItems={"center"} justifyContent={"center"} mt={"1.5em"}>
        {images.map((image, index) => {
          return (
            <Box key={index} >
              <Link>
          <Image src={image} height={"40vh"} cursor={"pointer"} margin={"0 auto"}/>
          </Link>
          <Flex flexDir={"column"} gap={"1em"} alignItems={"center"} mt={"0.5em"} flexWrap={"wrap"}>
          <Link>Live Link</Link>
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
