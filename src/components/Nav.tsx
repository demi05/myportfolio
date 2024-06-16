import { Avatar, Container, Flex } from "@chakra-ui/react";
import myPic from "../assets/images/my-pic.jpg";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Container maxW={"6xl"} mt={"1em"}>
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Avatar src={myPic} />
        <Flex gap={"1em"}>
          <Link to={"/"}>HOME</Link>
          <Link to={"about"}>ABOUT ME</Link>
          <Link to={"projects"}>MY WORK</Link>
          <Link to={"contact"}>HOW TO REACH ME</Link>
        </Flex>
    </Flex>
      </Container>
  );
};

export default Nav;
