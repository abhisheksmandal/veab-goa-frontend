import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export const About = (props) => {
  return (
    <Box id="about" py={12}>
      <Box maxW="container.xl" mx="auto" px={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          spacing={8}
        >
          {/* Image Section */}
          <Box flex="1" mb={{ base: 6, md: 0 }} mr={{ base: 0, md: 8 }}>
            <Image
              src="img/about.jpg"
              alt="About Us"
              boxSize="100%"
              objectFit="cover"
              borderRadius="lg"
              boxShadow="md"
            />
          </Box>

          {/* Text Section */}
          <Box flex="1">
            <Heading as="h2" size="2xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg" mb={6}>
              {props.data ? props.data.paragraph : "Loading..."}
            </Text>

            <Heading as="h3" size="lg" mb={4}>
              Why Choose Us?
            </Heading>

            <Flex wrap="wrap" justify="space-between">
              {/* First List */}
              <Box width={{ base: "100%", sm: "48%" }} mb={6}>
                <UnorderedList spacing={3}>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <ListItem key={`${d}-${i}`}>{d}</ListItem>
                      ))
                    : "Loading..."}
                </UnorderedList>
              </Box>

              {/* Second List */}
              <Box width={{ base: "100%", sm: "48%" }} mb={6}>
                <UnorderedList spacing={3}>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <ListItem key={`${d}-${i}`}>{d}</ListItem>
                      ))
                    : "Loading..."}
                </UnorderedList>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
