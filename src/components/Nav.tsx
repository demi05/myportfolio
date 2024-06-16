import { Avatar, Box, Flex } from "@chakra-ui/react";
import myPic from "../assets/images/my-pic.jpg"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <Flex>
      <Avatar src={myPic}/>
      <Box>
        <Link to={""}>HOME</Link>
        <Link to={""}>ABOUT ME</Link>
        <Link to={""}>MY WORK</Link>
        <Link to={""}>HOW TO REACH ME</Link>
      </Box>
    </Flex>
  )
}

export default Nav
