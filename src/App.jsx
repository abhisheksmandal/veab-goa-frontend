import { Box, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const { colorMode } = useColorMode();
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Box
      minH="100vh"
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "whiteAlpha.900"}
    >
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* Other components will go here */}
    </Box>
  );
}

export default App;
