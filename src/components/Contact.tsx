import {
  Box, Button, Container, Flex, Heading, Input, SimpleGrid, Text,
  Textarea, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaCopyright } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const form = new FormData();
  form.append("name", formData.name);
  form.append("email", formData.email);
  form.append("subject", formData.subject);
  form.append("message", formData.message);

   try {
      const res = await fetch("https://formspree.io/f/xyzpkjjd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: form
      });

      if (res.ok) {
        onOpen();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit}>
          <SimpleGrid columns={1} spacing={"1em"}>
            <Input placeholder="Name" name="name" onChange={handleChange} value={formData.name} />
            <Input placeholder="Email" type="email" name="email" onChange={handleChange} value={formData.email} />
            <Input placeholder="Subject" name="subject" onChange={handleChange} value={formData.subject} />
            <Textarea placeholder="Your Message" name="message" onChange={handleChange} value={formData.message} />
            <Button colorScheme={"teal"} w={"100%"} type="submit" isLoading={isLoading}> {isLoading? "Loading..." : "Send Message"}</Button>
          </SimpleGrid>
          </form>
        </Box>

        {/* Downloadable Resume */}
        <Box textAlign={"center"} mt={"2em"}>
          <Link href="https://drive.google.com/file/d/1HFJGCnWQ8eNgmNf8ceVEzxH6zPFMy8pE/view?usp=drive_link" isExternal>
            <Button variant={"outline"} colorScheme={"teal"} >View My Resume</Button>
          </Link>
        </Box>
        <Flex alignItems={"center"} gap={"0.5em"}>
        <FaCopyright/>
        <Text> demi05. 2025</Text>
        </Flex>
      </Flex>

       {/* Thank You Modal */}
 <Modal isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent borderRadius="lg" px={6} py={8} minHeight={"20vh"}>
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
    <ModalCloseButton fontSize="lg" />
    <ModalBody textAlign="center">
      <Text fontSize="lg" fontWeight="medium">
        Thanks for reaching out. I'll get back to you shortly!
      </Text>
    </ModalBody>
    </Flex>
  </ModalContent>
</Modal>
    </Container>
  );
}

export default Contact;
