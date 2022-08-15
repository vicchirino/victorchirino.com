import { Box, Flex } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { useIntl } from "react-intl";
import Layout from "./Layout";
import ProjectSection from "./ProjectSection";

const Projects = forwardRef(({}, ref) => {
  const { formatMessage } = useIntl();
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          padding: "20px",
          width: {
            base: "100%",
            sm: "90%",
            md: "75%"
          }
        }}
      >
        <Flex flexDirection="column" width="100%">
          <ProjectSection
            project={{
              title: "Guybrush Threepwood bot",
              description: formatMessage({ id: "Projects.Bot.Description" }),
              multimedia: "/images/projects/bot-project-1.png",
              twitter: "https://twitter.com/guybrush_quotes",
              github: "https://github.com/vicchirino/guybrush-twitter-bot",
              technologies: [
                "python",
                "Twitter API",
                "cv2",
                "auth2.0",
                "requests"
              ]
            }}
          />
          <Spacer />
          <ProjectSection
            project={{
              title: "Monkey Island theme",
              description: formatMessage({ id: "Projects.Theme.Description" }),
              multimedia: "/images/projects/melee-island-theme-demo.png",
              github: "https://github.com/vicchirino/monkey-island-theme",
              website: "https://monkey-island-extension-site.vercel.app",
              technologies: [
                "VSCode",
                "Typescript",
                "React",
                "NextJS",
                "Vercel"
              ]
            }}
          />
          <Spacer />
          <ProjectSection
            project={{
              title: "Mercado Libre iOS app",
              description: formatMessage({ id: "Projects.Meli.Description" }),
              multimedia: "/images/projects/mercado-libre.gif",
              github: "https://github.com/vicchirino/mercado-casi-libre",
              technologies: [
                "iOS",
                "Swift",
                "Mercado Libre API",
                "Snapkit",
                "UIKit"
              ]
            }}
          />
        </Flex>
      </Box>
    </Layout>
  );
});

Projects.displayName = "Projects";

const Spacer = () => {
  return <Box height={35} />;
};

export default Projects;
