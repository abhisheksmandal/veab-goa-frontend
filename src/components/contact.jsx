import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

// Initial state for the form
const initialState = {
  name: "",
  email: "",
  message: "",
};

// Contact component
export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, message } = formData;
  const [error, setError] = useState(null);

  // Handling form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Reset form state
  const clearForm = () => setFormData({ ...initialState });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    // Validate fields before submitting
    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      );
      console.log(result.text);
      clearForm(); // Clear form on success
    } catch (error) {
      console.error(error.text);
      setError(
        "There was an issue sending your message. Please try again later."
      );
    }
  };

  // Use Chakra's `useColorModeValue` to set background color dynamically
  const cardBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box id="contact" py={16} pb={0}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={8}>
          <Heading as="h2" size="2xl" mb={4}>
            Get In Touch
          </Heading>
          <Text fontSize="lg" mb={6}>
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={10}>
          {/* Form Section */}
          <Box
            as="form"
            name="sentMessage"
            onSubmit={handleSubmit}
            width="full"
            p={6}
            bg={cardBgColor}
            borderRadius="md"
            boxShadow="md"
          >
            <Stack spacing={6}>
              {/* Name Field */}
              <FormControl isRequired isInvalid={error}>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your Name"
                  onChange={handleChange}
                  size="lg"
                  variant="flushed"
                />
              </FormControl>

              {/* Email Field */}
              <FormControl isRequired isInvalid={error}>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={handleChange}
                  size="lg"
                  variant="flushed"
                />
              </FormControl>

              {/* Message Field */}
              <FormControl isRequired isInvalid={error}>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  placeholder="Your Message"
                  rows={6}
                  onChange={handleChange}
                  size="lg"
                  variant="flushed"
                />
              </FormControl>

              {/* Error Message */}
              {error && <Text color="red.500">{error}</Text>}

              {/* Submit Button */}
              <Button type="submit" size="lg" width="full" colorScheme="blue">
                Send Message
              </Button>
            </Stack>
          </Box>

          {/* Contact Info Section */}
          <Box p={6} bg={cardBgColor} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="lg" mb={4}>
              Contact Info
            </Heading>
            <Stack spacing={5}>
              <Text>
                <strong>Address:</strong>{" "}
                {props.data ? props.data.address : "Loading..."}
              </Text>
              <Text>
                <strong>Phone:</strong>{" "}
                {props.data ? props.data.phone : "Loading..."}
              </Text>
              <Text>
                <strong>Email:</strong>{" "}
                {props.data ? props.data.email : "Loading..."}
              </Text>
            </Stack>

            {/* Social Links */}
            <Box mt={6}>
              <Stack direction="row" spacing={6}>
                <Button
                  as="a"
                  href={props.data ? props.data.facebook : "/"}
                  target="_blank"
                  colorScheme="facebook"
                  variant="outline"
                >
                  Facebook
                </Button>
                <Button
                  as="a"
                  href={props.data ? props.data.twitter : "/"}
                  target="_blank"
                  colorScheme="twitter"
                  variant="outline"
                >
                  Twitter
                </Button>
                <Button
                  as="a"
                  href={props.data ? props.data.youtube : "/"}
                  target="_blank"
                  colorScheme="red"
                  variant="outline"
                >
                  YouTube
                </Button>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box
        id="footer"
        py={6}
        textAlign="center"
        mt={16}
        boxShadow="0 -4px 6px rgba(0, 0, 0, 0.1)" // Shadow only at the top
      >
        <Container>
          <Text fontSize="sm">
            &copy; 2025 VEAB. Design by{" "}
            <a href="http://www.veab.com" rel="nofollow">
              VEAB
            </a>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
