import { Avatar, Box, Container, Flex } from "@chakra-ui/react";
import myPic from "../assets/images/my-pic.jpg";
import { Link } from "@chakra-ui/react";
const Nav = () => {
  const navStyles = {
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
  };
  return (
    <Box /* boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} */ padding={"2em"}>
      <Container maxW={"6xl"} pos={"fixed"} top={0} left={0} right={0} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}>
        <Flex as={"nav"} sx={navStyles}>
          <Avatar src={myPic} />
          <Flex gap={"1em"}>
            <Link href={"#home"}>HOME</Link>
            <Link href={"#about"}>ABOUT ME</Link>
            <Link href={"#projects"}>MY WORK</Link>
            <Link href={"#contact"}>HOW TO REACH ME</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Nav;
