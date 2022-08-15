import { Badge, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AnimatedIcon } from "./AnimatedIcon";

type Project = {
  title: string;
  description: string;
  multimedia: string;
  multimediaType?: "image" | "video";
  website?: string;
  github?: string;
  twitter?: string;
  technologies?: string[];
};

type ProjectSectionProps = {
  project: Project;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  return (
    <Box>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row"
        }}
        justifyContent="space-between"
      >
        <Box
          width={{
            base: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%"
          }}
        >
          <ProjectMultimedia project={project} />
        </Box>
        <Box
          sx={{
            padding: "0 10px"
          }}
          width={{
            base: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "50%"
          }}
        >
          <ProjectDescription project={project} />
        </Box>
      </Flex>
    </Box>
  );
};

const ProjectDescription: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Flex
      flexDirection="column"
      sx={{
        height: "100%"
      }}
    >
      <Text
        sx={{
          fontSize: {
            base: "md",
            md: "lg",
            lg: "xl"
          },
          fontWeight: {
            base: "semibold",
            md: "semibold",
            lg: "bold"
          }
        }}
      >
        {project.title}
      </Text>
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
        <Text
          sx={{
            fontSize: {
              base: "xs",
              sm: "md",
              lg: "md"
            },
            fontWeight: {
              base: "regular"
            },
            paddingTop: "25px"
          }}
        >
          {project.description}
        </Text>
        <Box
          sx={{
            width: "100%"
          }}
        >
          <HStack
            spacing="20px"
            padding="10px 10px"
            alignItems="center"
            justifyContent="flex-end"
          >
            {project.github && (
              <AnimatedIcon name="github" href={project.github} boxSize={7} />
            )}
            {project.twitter && (
              <AnimatedIcon name="twitter" href={project.twitter} boxSize={7} />
            )}
            {project.website && (
              <AnimatedIcon name="website" href={project.website} boxSize={7} />
            )}
          </HStack>
        </Box>
        <Box
          sx={{
            width: "100%",
            border: "2px solid",
            borderColor: "brand.500"
          }}
        >
          <HStack
            spacing="5px"
            padding="5px 0 5px 5px"
            alignItems="center"
            height="100%"
            justifyContent="flex-start"
          >
            {project.technologies?.map((technology, idx) => (
              <Badge
                fontSize={{
                  base: "10px",
                  sm: "10px",
                  lg: "10px",
                  xl: "12px"
                }}
                key={`${technology}-${idx}`}
                variant="subtle"
              >
                {technology}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
};

const ProjectMultimedia: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Box
      sx={{
        height: "100%",
        border: "2px solid",
        borderColor: "brand.500"
      }}
    >
      <Image
        src={project.multimedia}
        alt="project-image"
        objectFit="contain"
        sx={{
          padding: "5px",
          height: "100%",
          width: "100%",
          maxHeight: "400px"
        }}
      />
    </Box>
  );
};

export default ProjectSection;
