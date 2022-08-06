import { Box, Flex } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import Layout from "./Layout";
import ProjectSection from "./ProjectSection";

const Projects = forwardRef(({}, ref) => {
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
						md: "75%",
					},
				}}
			>
				<Flex flexDirection="column" width="100%">
					<ProjectSection
						project={{
							title: "Guybrush Threepwood bot",
							description:
								"Twitter bot written in python that posts random quotes of Monkey Island's main character, Guybrush Threepwood. There bot also post screenshots of the game and reply with a random quote if someone mention it.\n\nThe project use the Twitter API including auth 2.0.\nScreenshots are generated with a script in python that take the full game-play video take its frames and save them.",
							multimedia: "/images/projects/bot-project-1.png",
							twitter: "https://twitter.com/guybrush_quotes",
							github: "https://github.com/vicchirino/guybrush-twitter-bot",
							technologies: [
								"python",
								"Twitter API",
								"cv2",
								"auth2.0",
								"requests",
							],
						}}
					/>
					<Spacer />
					<ProjectSection
						project={{
							title: "Monkey Island theme",
							description:
								"A set of themes using Monkey Island games palettes for VS Code. Mêlée island is a dark color theme for VSCode that is published into the VSCode maketplace. As part of it there is a website available built in Typescript and React and deployed into vercel.",
							multimedia: "/images/projects/melee-island-theme-demo.png",
							github: "https://github.com/vicchirino/monkey-island-theme",
							website: "https://monkey-island-extension-site.vercel.app",
							technologies: [
								"VSCode",
								"Typescript",
								"React",
								"NextJS",
								"Vercel",
							],
						}}
					/>
					<Spacer />
					<ProjectSection
						project={{
							title: "Mercado Libre iOS app",
							description:
								"An iOS application that copies a few functionalities of the Mercado Libre iOS app. The project use the API that they provide.\nThe app allow to search items and see the detail, fetching the especific endpoints and using a protocol oriented webservice.\nThe project is using lastest swift and iOS version. ",
							multimedia: "/images/projects/mercado-libre.gif",
							github: "https://github.com/vicchirino/mercado-casi-libre",
							technologies: [
								"iOS",
								"Swift",
								"Mercado Libre API",
								"Snapkit",
								"UIKit",
							],
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
