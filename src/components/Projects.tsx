import { Box, Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import aiesecMembership from "../assets/images/AIESEC MEMBERSHIP.png"
import gmw from "../assets/images/gmw.png"
import nv from "../assets/images/nv.png"
import timbuCloudShop from "../assets/images/timbu cloud shop.png"
import amdorAnalytics from "../assets/images/amdor analytics.png"
import ncAkure from "../assets/images/ncakure.png"

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
    p: "1em", 
  };

  const projects = [
    {
      image: ncAkure,
      title: "NC Akure Website",
      link: "https://ncakure25.netlify.app/",
      description: "National Conference Akure, AIESEC in Nigeria, 2025.",
    },
    {
      image: gmw,
      title: "AIESEC in Nigeria Global Money Week",
      link: "https://aiesec.ng/gmw",
      description: "AIESEC in Nigeria Global Money Week Website",
    },
    {
      image: nv,
      title: "AIESEC in Nigeria National Volunteer",
      link: "https://aiesec.ng/nv",
      description: "AIESEC in Nigeria Global Money Week Website",
    },
    {
      image: aiesecMembership,
      title: "AIESEC in Nigeria",
      link: "https://aiesec.ng/membership",
      description: "AIESEC in Nigeria membership site."
    },
    {
      image: amdorAnalytics,
      title: "Amdor Analytics",
      link: "https://amdoranalytics.com",
      description: "A website for a tech company."
    },
    // {
    //   image: timbuCloudShop,
    //   title: "Timbu Cloud Shop",
    //   link: "https://timbu-cloud-shop-demi05.netlify.app",
    //   description: "A fictional e-commerce app."
    // }
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
