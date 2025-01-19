import React from "react";
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

export const Gallery = (props) => {
  return (
    <Box id="portfolio" py={12}>
      <Box maxW="container.xl" mx="auto" px={4}>
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="2xl" mb={4}>
            Gallery
          </Heading>
          <Text fontSize="lg" maxW="600px" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </Text>
        </Box>

        {/* Gallery Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={2}>
          {props.data
            ? props.data.map((d, i) => (
                <Box
                  key={`${d.title}-${i}`}
                  position="relative"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  _hover={{
                    boxShadow: "lg",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  }}
                  transition="all 0.3s ease"
                >
                  <Image
                    src={d.smallImage}
                    alt={d.title}
                    objectFit="cover"
                    boxSize="100%"
                  />

                  {/* Title Overlay */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    opacity="0"
                    _hover={{
                      opacity: "1",
                      transition: "opacity 0.3s ease",
                    }}
                    color="white"
                    textAlign="center"
                    px={4}
                  >
                    <Heading size="md">{d.title}</Heading>
                  </Box>
                </Box>
              ))
            : "Loading..."}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
