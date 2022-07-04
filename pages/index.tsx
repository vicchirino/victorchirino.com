import { Box, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import ContactFooter from "../components/ContactFooter";
import Header from "../components/Header";
import Resume from "../components/Resume";

const Home: NextPage = () => {
	const { colorMode } = useColorMode();

	return (
		<Box
			minHeight="100vh"
			width="100vw"
			paddingBottom="20px"
			bgColor={colorMode === "dark" ? "dark.600" : "light.400"}
		>
			<Header />
			<Resume />
			<ContactFooter />
		</Box>
	);
};

export default Home;
