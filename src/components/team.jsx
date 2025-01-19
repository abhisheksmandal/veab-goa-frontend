import React from "react";
import { Box, Container, Grid, Heading, Text, Image } from "@chakra-ui/react";

export const Team = (props) => {
  return (
    <Box id="team" py={12}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Heading as="h2" size="2xl" mb={4}>
            Meet the Team
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </Text>
        </Box>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={2} // Controls space between team cards
        >
          {props.data
            ? props.data.map((d, i) => (
                <Box
                  key={`${d.name}-${i}`}
                  borderWidth="1px"
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
                    src={d.img}
                    alt={d.name}
                    boxSize="100%"
                    objectFit="cover"
                    height="200px"
                  />
                  <Box p={4}>
                    <Heading as="h4" size="md" mb={2}>
                      {d.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {d.job}
                    </Text>
                  </Box>
                </Box>
              ))
            : "Loading..."}
        </Grid>
      </Container>
    </Box>
  );
};
