import { Box, Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import plantsRuS from "../assets/images/plantsRUs.jpg";
import tipCalculator from "../assets/images/tip calculator.jpg";

const Projects = () => {
  const projectStyles = {
    borderRadius: "1rem",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    _hover: {
      transform: "translateY(-5px)",
    },
  };

  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    bg: "rgba(0, 0, 0, 0.6)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease",
    _hover: {
      opacity: 1,
    },
    p: "1em", // Padding for the overlay
  };

  const projects = [
    {
      image: plantsRuS,
      title: "Plants R Us",
      link: "https://plantsrus.netlify.app/",
      description: "A landing page for a fictional plant shop.",
    },
    {
      image: tipCalculator,
      title: "Tip Calculator",
      link: "https://tipcalculatorappdemi05.netlify.app/",
      description: "A simple app to calculate tips based on the bill amount.",
    },
  ];

  return (
    <Container as={"section"} id="projects" maxW={"6xl"} mb={"5em"}>
      <Heading fontSize={"3rem"} mb={"1.5em"}>
        Projects
      </Heading>
      <Flex flexWrap={"wrap"} gap={"2em"} alignItems={"center"} justifyContent={"center"}>
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={projectStyles}
            w={{ base: "100%", sm: "48%", md: "45%", lg: "30%" }}
          >
            <Link href={project.link} target="_blank" _hover={{ textDecoration: "none" }}>
              <Image
                src={project.image}
                height={"40vh"}
                objectFit={"cover"}
                transition="opacity 0.3s ease"
                _hover={{ opacity: 0.8 }} // Slight fade on hover for image
              />
              <Box sx={overlayStyles}>
                <Box textAlign={"center"}>
                  <Heading fontSize={"1.5rem"} mb={"0.5em"}>
                    {project.title}
                  </Heading>
                  <Text fontSize={"1rem"}>{project.description}</Text>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Projects;
