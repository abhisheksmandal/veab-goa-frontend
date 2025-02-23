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

export const Navigation = ({ activeSection }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
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
                position="relative"
                color={
                  activeSection === item.href.substring(1)
                    ? colorMode === "light"
                      ? "blue.600"
                      : "blue.300"
                    : colorMode === "light"
                    ? "gray.600"
                    : "gray.300"
                }
                _hover={{
                  textDecoration: "none",
                  color: colorMode === "light" ? "blue.500" : "blue.300",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width:
                    activeSection === item.href.substring(1) ? "100%" : "0%",
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

          {/* Right Section: Theme Toggle & Mobile Menu */}
          <Flex align="center" gap={4}>
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={colorMode === "light" ? "gray.600" : "gray.300"}
              _hover={{
                bg: colorMode === "light" ? "gray.100" : "gray.700",
              }}
            />

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
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation Menu */}
        <Collapse in={isOpen} animateOpacity>
          <MotionBox py={4} px={4} display={{ base: "block", md: "none" }}>
            {navItems.map((item) => (
              <MotionBox key={item.name} whileHover={{ scale: 1.02 }}>
                <Link
                  href={item.href}
                  display="block"
                  py={3}
                  px={4}
                  rounded="md"
                  fontWeight="medium"
                  color={colorMode === "light" ? "gray.600" : "gray.300"}
                  _hover={{
                    bg: "gray.50",
                    color: "blue.500",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </Link>
              </MotionBox>
            ))}
          </MotionBox>
        </Collapse>
      </Container>
    </Box>
  );
};
