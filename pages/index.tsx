import { Box, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useCallback, useRef } from "react";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const contactScrollReference = useRef<null | HTMLDivElement>(null);
  const projectsScrollReference = useRef<null | HTMLDivElement>(null);

  const scrollToContact = useCallback(() => {
    if (!contactScrollReference.current) {
      return;
    }
    contactScrollReference.current &&
      contactScrollReference.current.scrollIntoView();
  }, [contactScrollReference]);

  const scrollToProject = useCallback(() => {
    if (!contactScrollReference.current) {
      return;
    }
    contactScrollReference.current &&
      contactScrollReference.current.scrollIntoView({
        block: "center",
        inline: "center"
      });
  }, [contactScrollReference]);

  return (
    <Box
      width="100vw"
      bgColor={colorMode === "dark" ? "dark.600" : "light.400"}
    >
      <NavBar
        scrollToContact={scrollToContact}
        scrollToProject={scrollToProject}
      />
      <Intro />
      <Projects ref={projectsScrollReference} />
      <Contact ref={contactScrollReference} />
    </Box>
  );
};

export default Home;
