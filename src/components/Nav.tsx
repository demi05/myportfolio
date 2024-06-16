import { Avatar, Container, Flex } from "@chakra-ui/react";
import myPic from "../assets/images/my-pic.jpg";
import { Link } from "@chakra-ui/react";
const Nav = () => {
  return (
    <Container maxW={"6xl"} mt={"1em"} pos={"fixed"} top={0} left={0} right={0}>
    <Flex as={"nav"} alignItems={"center"} justifyContent={"space-between"}>
      <Avatar src={myPic} />
        <Flex gap={"1em"}>
          <Link href={"#home"}>HOME</Link>
          <Link href={"#about"}>ABOUT ME</Link>
          <Link href={"#projects"}>MY WORK</Link>
          <Link href={"#contact"}>HOW TO REACH ME</Link>
        </Flex>
    </Flex>
      </Container>
  );
};

export default Nav;
