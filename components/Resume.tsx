import { Box, Flex, Image, Spacer, Text, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

const imagesPath = ["/me-1.jpg", "/me-2.jpg"];

const Resume: React.FC = () => {
	const { colorMode } = useColorMode();
	const [imageSelected, setImageSelected] = useState(0);
	return (
		<Box
			sx={{}}
			marginY={{
				xxsm: "10px",
				xsm: "10px",
				sm: "25px",
				md: "50px",
				lg: "50px",
				xl: "50px",
				xxl: "50x",
			}}
			marginX={{
				xxsm: "10px",
				xsm: "10px",
				sm: "20px",
				md: "50px",
				lg: "50px",
				xl: "50px",
				xxl: "50x",
			}}
			padding={{
				xxsm: "0px",
				xsm: "0px",
				sm: "0px",
				md: "10px",
				lg: "10px",
				xl: "10px",
				xxl: "10x",
			}}
		>
			<Flex
				flexDirection={{
					xxxsm: "column",
					xxsm: "column",
					xsm: "column",
					sm: "column",
					md: "column",
					lg: "row",
					xl: "row",
					xxl: "row",
				}}
				align="center"
				height="100%"
				width="100%"
			>
				<Box
					width={{
						xxxsm: "80%",
						xxsm: "80%",
						xsm: "80%",
						sm: "70%",
						md: "70%",
						lg: "50%",
						xl: "40%",
						xxl: "30%",
					}}
					alignItems="center"
				>
					<Image
						src={imagesPath[imageSelected]}
						cursor="pointer"
						border="2px solid"
						borderColor={colorMode === "dark" ? "brand.400" : "dark.500"}
						alt="me"
						width="100%"
						onClick={() => setImageSelected(imageSelected === 0 ? 1 : 0)}
					/>
				</Box>
				<Box
					width={{
						xxxsm: "100%",
						xxsm: "100%",
						xsm: "90%",
						sm: "80%",
						md: "80%",
						lg: "60%",
						xl: "50%",
						xxl: "50%",
					}}
					marginStart={{
						xxxsm: "0px",
						xxsm: "0px",
						xsm: "0px",
						sm: "0px",
						md: "0px",
						lg: "20px",
						xl: "25px",
						xxl: "30px",
					}}
					marginTop={{
						xxxsm: "20px",
						xxsm: "20px",
						xsm: "20px",
						sm: "20px",
						md: "20px",
						lg: "0px",
						xl: "0px",
						xxl: "0px",
					}}
				>
					<Text
						fontSize={{
							xxxsm: "lg",
							xxsm: "xl",
							xsm: "2xl",
							sm: "2xl",
							md: "3xl",
							lg: "3xl",
							xl: "5xl",
							xxl: "6xl",
						}}
						paddingBottom="10px"
						color={
							colorMode === "dark" ? "textSecondary.500" : "textPrimary.500"
						}
					>
						Hello, I’m Victor Chirino 👋🏽
					</Text>
					<Text
						fontSize={{
							xxxsm: "md",
							xxsm: "lg",
							xsm: "xl",
							sm: "xl",
							md: "xl",
							lg: "2xl",
							xl: "2xl",
							xxl: "3xl",
						}}
						paddingBottom="20px"
					>
						I’m a Software engineer based in Buenos Aires, Argentina.
					</Text>
					<Text
						fontSize={{
							xxxsm: "md",
							xxsm: "lg",
							xsm: "xl",
							sm: "xl",
							md: "xl",
							lg: "2xl",
							xl: "2xl",
							xxl: "3xl",
						}}
						paddingBottom="20px"
					>
						I have a strong background in front-end development, with more than
						7 years working as an iOS developer and more than 4 years working as
						a web developer.
					</Text>
					<Text
						fontSize={{
							xxxsm: "md",
							xxsm: "lg",
							xsm: "xl",
							sm: "xl",
							md: "xl",
							lg: "2xl",
							xl: "2xl",
							xxl: "3xl",
						}}
					>
						I enjoy working collaboratively with others, learning new
						technologies, and always with a positive attitude.
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default Resume;
