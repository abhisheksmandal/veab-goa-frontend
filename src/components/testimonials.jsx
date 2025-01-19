import React from "react";
import { Box, Container, Grid, Heading, Text, Image } from "@chakra-ui/react";

export const Testimonials = (props) => {
  return (
    <Box id="testimonials" py={12}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="2xl" mb={4}>
            What our clients say
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={2} // Controls space between the testimonial cards
        >
          {props.data
            ? props.data.map((d, i) => (
                <Box
                  key={`${d.name}-${i}`}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={6}
                  boxShadow="md"
                  _hover={{
                    boxShadow: "lg",
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  }}
                  transition="all 0.3s ease"
                >
                  <Box mb={4} textAlign="center">
                    <Image
                      src={d.img}
                      alt={d.name}
                      borderRadius="full"
                      boxSize="80px"
                      mx="auto"
                    />
                  </Box>
                  <Box>
                    <Text fontSize="lg" mb={4}>
                      "{d.text}"
                    </Text>
                    <Text fontWeight="bold">- {d.name}</Text>
                  </Box>
                </Box>
              ))
            : "Loading..."}
        </Grid>
      </Container>
    </Box>
  );
};
