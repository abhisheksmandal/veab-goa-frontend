import { Box, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

function App() {
  const { colorMode } = useColorMode();
  const [landingPageData, setLandingPageData] = useState({});
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setLandingPageData(JsonData);

    // Initialize smooth scrolling
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      minH="100vh"
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "whiteAlpha.900"}
    >
      <Navigation activeSection={activeSection} />
      <Header data={landingPageData.Header} />
      <section id="features">
        <Features data={landingPageData.Features} />
      </section>
      <section id="about">
        <About data={landingPageData.About} />
      </section>
      <section id="services">
        <Services data={landingPageData.Services} />
      </section>
      <section id="gallery">
        <Gallery data={landingPageData.Gallery} />
      </section>
      <section id="testimonials">
        <Testimonials data={landingPageData.Testimonials} />
      </section>
      <section id="team">
        <Team data={landingPageData.Team} />
      </section>
      <section id="contact">
        <Contact data={landingPageData.Contact} />
      </section>
    </Box>
  );
}

export default App;
