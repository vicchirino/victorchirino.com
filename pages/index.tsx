import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import ContactFooter from "../components/ContactFooter";
import Header from "../components/Header";
import Resume from "../components/Resume";

const Home: NextPage = () => {
	return (
		<Box minHeight="100vh" width="100vw" paddingBottom="20px">
			<Header />
			<Resume />
			<ContactFooter />
		</Box>
	);
};

export default Home;
