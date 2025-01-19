import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

export const Header = ({ data }) => {
  return (
    <Box
      id="header"
      h="90vh"
      bgImage="img/intro-bg.jpg" // Add your background image
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        h="100%"
        position="relative"
        centerContent
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="0 16px" // Add padding to the container
      >
        <VStack
          spacing={6}
          textAlign="center"
          color="white"
          w="full"
          maxW="lg" // Max width for better content spacing
          padding="20px" // Padding for the VStack
          boxSizing="border-box" // Ensure padding is considered in width
        >
          <Heading as="h1" size="2xl" fontWeight="bold">
            {data?.title || "Welcome To Our Studio!"}
          </Heading>

          <Text fontSize="xl" maxW="2xl">
            {data?.paragraph || "It's nice to meet you"}
          </Text>

          <Button size="lg" colorScheme="blue" mt={4} as="a" href="#features">
            {data?.buttonText || "TELL ME MORE"}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
