import React from "react";
import { Box, Heading, Text, Flex, Icon, SimpleGrid } from "@chakra-ui/react";

export const Services = (props) => {
  return (
    <Box id="services" py={12}>
      <Box maxW="container.xl" mx="auto" px={4}>
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="2xl" mb={4}>
            Our Services
          </Heading>
          <Text fontSize="lg" maxW="600px" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </Text>
        </Box>

        {/* Services Card Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {props.data
            ? props.data.map((d, i) => (
                <Box
                  key={`${d.name}-${i}`}
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  _hover={{
                    boxShadow: "lg",
                    transform: "translateY(-5px)",
                    transition: "all 0.2s",
                  }}
                  //   bg="white"
                  textAlign="center"
                  transition="all 0.2s"
                >
                  <Icon as={d.icon} boxSize={12} mb={4} />
                  <Heading as="h3" size="lg" mb={2}>
                    {d.name}
                  </Heading>
                  <Text>{d.text}</Text>
                </Box>
              ))
            : "loading"}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
