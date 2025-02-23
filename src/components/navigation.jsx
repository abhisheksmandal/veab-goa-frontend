import {
  Box,
  Flex,
  Link,
  IconButton,
  useColorMode,
  useDisclosure,
  Container,
  Collapse,
  Button,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

export const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 },
    },
  };

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex="999"
      bg={colorMode === "light" ? "white" : "gray.800"}
      borderBottom="1px"
      borderColor={colorMode === "light" ? "gray.100" : "gray.700"}
      backdropFilter="blur(10px)"
      backgroundColor={
        colorMode === "light"
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(26, 32, 44, 0.8)"
      }
    >
      <Container maxW="container.xl">
        <Flex minH="70px" py={2} align="center" justify="space-between">
          {/* Logo Section */}
          <Flex align="center" gap={2}>
            <Link
              href="#"
              fontSize="xl"
              fontWeight="bold"
              color={colorMode === "light" ? "blue.500" : "blue.300"}
              _hover={{
                textDecoration: "none",
                color: colorMode === "light" ? "blue.600" : "blue.200",
              }}
            >
              <Text fontSize="2xl" fontWeight="extrabold">
                VEAB
              </Text>
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            justify="center"
            gap={8}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                fontSize="md"
                fontWeight="medium"
                color={colorMode === "light" ? "gray.600" : "gray.300"}
                position="relative"
                _hover={{
                  textDecoration: "none",
                  color: colorMode === "light" ? "blue.500" : "blue.300",
                  _after: {
                    width: "100%", // Ensure this is inside the same _hover block
                  },
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-4px",
                  left: "0",
                  bg: colorMode === "light" ? "blue.500" : "blue.300",
                  transition: "all 0.3s ease",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Flex>

          {/* Right Section: Theme Toggle & Contact Button */}
          <Flex align="center" gap={4}>
            <IconButton
              aria-label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={colorMode === "light" ? "gray.600" : "gray.300"}
              _hover={{
                bg: colorMode === "light" ? "gray.100" : "gray.700",
              }}
            />

            {/* <Button
              display={{ base: "none", md: "inline-flex" }}
              colorScheme="blue"
              size="md"
              fontWeight="medium"
              px={6}
              rounded="full"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
            >
              Get Started
            </Button> */}

            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="ghost"
              color={colorMode === "light" ? "gray.600" : "gray.300"}
              _hover={{
                bg: colorMode === "light" ? "gray.100" : "gray.700",
              }}
              aria-label="Toggle Navigation"
              transition="all 0.3s"
              transform={isOpen ? "rotate(180deg)" : ""}
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation Menu */}
        <Collapse in={isOpen} animateOpacity>
          <MotionBox
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            py={4}
            px={4}
            display={{ base: "block", md: "none" }}
          >
            {navItems.map((item) => (
              <MotionBox
                key={item.name}
                variants={linkVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  display="block"
                  py={3}
                  px={4}
                  rounded="md"
                  fontWeight="medium"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                  _hover={{
                    bg: colorMode === "light" ? "gray.50" : "gray.700",
                    color: colorMode === "light" ? "blue.500" : "blue.300",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Link>
              </MotionBox>
            ))}
            {/* <Button
              mt={4}
              w="full"
              colorScheme="blue"
              size="md"
              fontWeight="medium"
              rounded="full"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
            >
              Get Started
            </Button> */}
          </MotionBox>
        </Collapse>
      </Container>
    </Box>
  );
};
