import { Box, Text, useColorMode } from "@chakra-ui/react";
import { fadeUp } from "../styles/Transitions";

const Intro: React.FC = () => {
	return (
		<Layout>
			<Box
				sx={{
					display: "flex",
					margin: "auto",
					padding: "20px",
					maxWidth: {
						base: "100%",
						sm: "90%",
						md: "75%",
					},
					flexDirection: "column",
					justifyContent: "center",
					border: "2px solid",
					borderColor: "brand.500",
					// animation: `${borderColor({
					// 	color: "brand.500",
					// })} 1s normal forwards ease-in-out`,
					// animationDelay: "1400ms",
				}}
			>
				<Text
					sx={{
						fontSize: {
							base: "md",
							md: "lg",
							lg: "xl",
						},
						fontWeight: {
							base: "semibold",
							md: "semibold",
							lg: "bold",
						},
						opacity: 0,
						animation: `${fadeUp} 350ms normal forwards ease-in-out`,
						animationDelay: "350ms",
					}}
				>
					Welcome, my name is
				</Text>
				<Text
					sx={{
						fontSize: {
							base: "35px",
							sm: "50px",
							md: "60px",
							lg: "80px",
						},
						fontWeight: {
							base: "semibold",
							md: "semibold",
							lg: "bold",
						},
						opacity: 0,
						animation: `${fadeUp} 350ms normal forwards ease-in-out`,
						animationDelay: "700ms",
					}}
				>
					Victor Chirino
				</Text>
				<Text
					sx={{
						width: {
							base: "65%",
						},
						fontSize: {
							base: "xs",
							sm: "md",
							lg: "lg",
						},
						fontWeight: {
							base: "regular",
						},
						opacity: 0,
						animation: `${fadeUp} 350ms normal forwards ease-in-out`,
						animationDelay: "1050ms",
					}}
				>
					I’m a Software engineer based in Buenos Aires, Argentina. I have a
					strong background in front-end development, with more than 7 years
					working as an iOS developer and more than 4 years working as a web
					developer.
				</Text>
			</Box>
		</Layout>
	);
};

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { colorMode } = useColorMode();

	return (
		<Box
			sx={{
				width: "100%",
				bgColor: colorMode === "dark" ? "dark.600" : "light.400",
				height: "100vh",
				paddingTop: "50px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{children}
		</Box>
	);
};

export default Intro;
