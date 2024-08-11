import { Box, Button, Container, Flex, Heading, Input, SimpleGrid, Text, Textarea, Link} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaCopyright } from "react-icons/fa";

const Contact = () => {
  return (
    <Container as={"section"} id="contact" maxW={"6xl"} pb={"2em"}>
      <Flex flexDirection={"column"} alignItems={"center"} gap={"1.5em"}>
        <Heading fontSize={"2rem"}>Collaborate with Me</Heading>
        <Text fontSize={"1.2rem"}>Feel free to reach out through any of the platforms below.</Text>
        
        {/* Contact Info */}
        <Box textAlign={"center"}>
          <Text fontSize={"1rem"}>Send me a mail: <Link href="mailto:demiladeleshi@gmail.com">demiladeleshi@gmail.com</Link></Text>
          <Text fontSize={"1rem"}>Reach Out - <Link href="tel:+2348125428118">(+234) 812 542 8118</Link></Text>
        </Box>

        {/* Social Media Links */}
        <Flex gap={"1em"} justifyContent={"center"}>
          <Link href={"https://github.com/demi05"} isExternal fontSize={"1.5rem"}>
        <FaGithub/>
          </Link>
          <Link href={"https://x.com/toniiaa___"} isExternal fontSize={"1.5rem"}>
            <FaTwitter />
          </Link>
          <Link href={"https://www.linkedin.com/in/demiladeleshi276/"} isExternal fontSize={"1.5rem"}>
           <FaLinkedin />
          </Link>
        </Flex>

        {/* Contact Form */}
        <Box w={"100%"} maxW={"600px"}>
          <SimpleGrid columns={1} spacing={"1em"}>
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme={"teal"} w={"100%"}>Send Message</Button>
          </SimpleGrid>
        </Box>

        {/* Downloadable Resume */}
        <Box textAlign={"center"} mt={"2em"}>
          <Link href="https://drive.google.com/drive/folders/1GuCD0nNECfUTM92zynLHmWo03HXQuhrL?usp=sharing" isExternal>
            <Button variant={"outline"} colorScheme={"teal"}>Download My Resume</Button>
          </Link>
        </Box>
        <Flex alignItems={"center"} gap={"0.5em"}>
        <FaCopyright/>
        <Text> demi05. 2024</Text>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Contact;
