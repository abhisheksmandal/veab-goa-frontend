import React from "react";
import { Box, Flex, Text, Icon, Heading } from "@chakra-ui/react";
import { FaRocket, FaCogs, FaShieldAlt, FaUsers } from "react-icons/fa"; // Example imports for icons

export const Features = (props) => {
  return (
    <Box id="features" textAlign="center" py={12}>
      <Box maxW="container.xl" mx="auto">
        <Heading as="h2" size="2xl" mb={8}>
          Features
        </Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          {props.data
            ? props.data.map((d, i) => (
                <Box
                  key={`${d.title}-${i}`}
                  width={{ base: "100%", sm: "45%", md: "23%" }}
                  p={4}
                  boxShadow="lg"
                  borderRadius="md"
                  textAlign="center"
                  _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                  transition="all 0.3s ease-in-out"
                >
                  <Icon as={d.icon} boxSize={12} mb={4} />
                  <Heading as="h3" size="lg" mb={4}>
                    {d.title}
                  </Heading>
                  <Text>{d.text}</Text>
                </Box>
              ))
            : "Loading..."}
        </Flex>
      </Box>
    </Box>
  );
};
