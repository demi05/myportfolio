import { Box, Container, Heading} from "@chakra-ui/react";
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const languages = ["HTML5", "CSS3", "JavaScript","Tailwind", "Sass", "ReactJs", "TypeScript"]
  const boxStyles = {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "1rem",
    padding: "1em"
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  console.log(languages)

  return (
    <Container as={"section"} id="about" maxW={"6xl"} textAlign={"center"} mb={"5em"}>
      <Heading as={"h2"} mb={"1em"}>Languages & FrameWorks</Heading>
        <Slider {...settings}>
        {languages.map((language, index) => {
          return(
            <Box flexDir={"column"} sx={boxStyles} key={index} mb={"1em"}>
              <Box margin={"0 auto"} w={"70%"}>
              {language === "HTML5"? <FaHtml5 color="#e34c26" fontSize={"5rem"}/>: <></>}
              {language === "CSS3"? <IoLogoCss3 color="#264de4" fontSize={"5rem"}/>: <></>}
              {language === "JavaScript"? <IoLogoJavascript color="rgb(255, 255, 0)" fontSize={"5rem"}/>: <></>}
              {language === "Tailwind"? <RiTailwindCssFill color="rgb(0, 255, 255)" fontSize={"5rem"}/>: <></>}
              {language === "Sass"? <FaSass color="rgb(255, 0, 255)" fontSize={"5rem"}/>: <></>}
              {language === "ReactJs"? <FaReact color="rgb(0, 255, 255)" fontSize={"5rem"}/>: <></>}
              {language === "TypeScript"? <SiTypescript color="rgb(49, 120, 198)" fontSize={"5rem"}/>: <></>}
              </Box>
              <Heading as={"h3"} fontSize={"1.5rem"} mt={"0.5em"}>{language}</Heading>
            </Box>
          )
        })}
        </Slider>
    </Container>
  )
}

export default About
