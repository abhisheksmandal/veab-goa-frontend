import { Box, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

function App() {
  const { colorMode } = useColorMode();
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    // Set the landing page data from the JSON file
    setLandingPageData(JsonData);

    // Initialize smooth scrolling after the component mounts
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });

    // Cleanup smooth scroll on unmount to avoid memory leaks
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <Box
      minH="100vh"
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "whiteAlpha.900"}
    >
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
    </Box>
  );
}

export default App;
