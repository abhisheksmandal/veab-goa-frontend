import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex="999"
      bg={colorMode === "light" ? "white" : "gray.800"}
      boxShadow="md"
      paddingX={{ base: 4, sm: 6, md: 8, lg: 12 }} // Ensure padding on smaller screens
    >
      <Container maxW="container.xl">
        {" "}
        {/* Wrap content in a container for more control */}
        <Flex minH="60px" py={2} align="center" justify="space-between">
          {/* Left Section: Logo and Toggle Button */}
          <Flex flex={{ base: 1 }} align="center">
            <Link
              href="#"
              fontSize="xl"
              fontWeight="bold"
              color={colorMode === "light" ? "gray.800" : "white"}
            >
              Your Logo
            </Link>

            <IconButton
              ml={4}
              aria-label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              size="md"
              variant="ghost"
            />
          </Flex>

          {/* Desktop Navigation */}
          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            align="center"
            justify="center" // Ensures items are centered horizontally
            flexWrap="wrap" // Allows items to wrap if needed on smaller screens
          >
            <Link href="#features" mx={4}>
              Features
            </Link>
            <Link href="#about" mx={4}>
              About
            </Link>
            <Link href="#services" mx={4}>
              Services
            </Link>
            <Link href="#gallery" mx={4}>
              Gallery
            </Link>
            <Link href="#testimonials" mx={4}>
              Testimonials
            </Link>
            <Link href="#team" mx={4}>
              Team
            </Link>
            <Link href="#contact" mx={4}>
              Contact
            </Link>
          </Flex>

          {/* Mobile Navigation Toggle */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        {/* Mobile Navigation Menu */}
        <Box
          display={{ base: isOpen ? "block" : "none", md: "none" }}
          bg={colorMode === "light" ? "white" : "gray.800"}
        >
          <Box py={4} px={4}>
            <Link href="#features" display="block" py={2}>
              Features
            </Link>
            <Link href="#about" display="block" py={2}>
              About
            </Link>
            <Link href="#services" display="block" py={2}>
              Services
            </Link>
            <Link href="#gallery" display="block" py={2}>
              Gallery
            </Link>
            <Link href="#testimonials" display="block" py={2}>
              Testimonials
            </Link>
            <Link href="#team" display="block" py={2}>
              Team
            </Link>
            <Link href="#contact" display="block" py={2}>
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
