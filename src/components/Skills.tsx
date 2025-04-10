import { FaHtml5, FaReact, FaSass, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiChakraui } from "react-icons/si";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Skills = () => {
  const languages = [
    { name: "HTML5", icon: <FaHtml5 color="#e34c26" fontSize={"6rem"} /> },
    { name: "CSS3", icon: <IoLogoCss3 color="#264de4" fontSize={"6rem"} /> },
    { name: "JavaScript", icon: <IoLogoJavascript color="rgb(255, 255, 0)" fontSize={"6rem"} /> },
    { name: "Tailwind", icon: <RiTailwindCssFill color="rgb(0, 255, 255)" fontSize={"6rem"} /> },
    { name: "Sass", icon: <FaSass color="rgb(255, 0, 255)" fontSize={"6rem"} /> },
    { name: "ReactJs", icon: <FaReact color="rgb(0, 255, 255)" fontSize={"6rem"} /> },
    { name: "TypeScript", icon: <SiTypescript color="rgb(49, 120, 198)" fontSize={"6rem"} /> },
    {name: "Next JS", icon: <RiNextjsFill color="rgb(0, 0, 0)" fontSize={"6rem"} /> },
    { name: "Chakra UI", icon: <SiChakraui color="rgb(0, 255, 255)" fontSize={"6rem"} /> },
    { name: "GitHub", icon: <FaGithub fontSize={"6rem"} /> },
  ];

  const boxStyles = {
    boxShadow: "none", // No shadow by default
    borderRadius: "0.75rem",
    padding: "1.5em",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    _hover: {
      transform: "translateY(-10px)",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.25)", // Adjusted shadow to fit the color scheme
    },
  };

  return (
    <Container as={"section"} id="skills" maxW={"6xl"} mb={"3em"}>
      <Heading as={"h2"} mb={"1em"}>
        Languages & Frameworks
      </Heading>
      <Text mb={"2em"}>
        These are the technologies I have worked with:
      </Text>

      <Flex flexWrap={"wrap"} gap={"2em"} justifyContent={"center"}>
        {languages.map((language, index) => (
          <Box
            key={index}
            sx={boxStyles}
            w={{ base: "48%", sm: "48%", md: "30%", lg: "22%" }}
            mx={"auto"}
          >
            <Box margin={"0 auto"}>{language.icon}</Box>
            <Heading as={"h3"} fontSize={"1.5rem"} mt={"0.5em"} textAlign={"center"}>
              {language.name}
            </Heading>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Skills;
