import { Box, useColorMode } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useRef } from "react";
import ContactFooter from "../components/ContactFooter";
import NavBar from "../components/NavBar";
import Resume from "../components/Resume";

const Home: NextPage = () => {
	const { colorMode } = useColorMode();
	const router = useRouter();
	const scrollIntoViewRef = useRef<null | HTMLDivElement>(null);

	const scrollIntoView = useCallback(() => {
		if (!scrollIntoViewRef.current) {
			return;
		}
		scrollIntoViewRef.current && scrollIntoViewRef.current.scrollIntoView();
	}, [scrollIntoViewRef]);

	return (
		<Box
			minHeight="100vh"
			width="100vw"
			paddingBottom="20px"
			bgColor={colorMode === "dark" ? "dark.600" : "light.400"}
		>
			<NavBar scrollToContact={scrollIntoView} />
			<Resume />
			<ContactFooter ref={scrollIntoViewRef} />
		</Box>
	);
};

export default Home;
