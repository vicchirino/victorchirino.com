import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const Resume: React.FC = () => {
	return (
		<Box
			sx={{}}
			marginY={{
				xxsm: "10px",
				xsm: "10px",
				sm: "25px",
				md: "50px",
				lg: "50px",
			}}
			marginX="20px"
			padding={{
				xxsm: "0px",
				xsm: "0px",
				sm: "0px",
				md: "10px",
				lg: "10px",
			}}
		>
			<Flex
				flexDirection={{
					xxxsm: "column",
					xxsm: "column",
					xsm: "column",
					sm: "column",
					md: "row",
					lg: "row",
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
						sm: "80%",
						md: "30%",
						lg: "30%",
					}}
					alignItems="center"
				>
					<Image src="/me-2.jpg" alt="me" width="100%" />
				</Box>
				<Box
					width={{
						xxxsm: "100%",
						xxsm: "100%",
						xsm: "100%",
						sm: "100%",
						md: "70%",
						lg: "70%",
					}}
					marginStart={{
						xxxsm: "0px",
						xxsm: "0px",
						xsm: "0px",
						sm: "0px",
						md: "15px",
						lg: "15px",
					}}
					marginTop={{
						xxxsm: "10px",
						xxsm: "10px",
						xsm: "10px",
						sm: "10px",
						md: "0px",
						lg: "0px",
					}}
				>
					<Text
						fontSize={{
							xxxsm: "lg",
							xxsm: "xl",
							xsm: "3xl",
							sm: "4xl",
							md: "5xl",
							lg: "6xl",
						}}
						paddingBottom="10px"
					>
						Hello, I’m Victor Chirino 👋🏽
					</Text>
					<Text
						fontSize={{
							xxxsm: "md",
							xxsm: "lg",
							xsm: "xl",
							sm: "2xl",
							md: "3xl",
							lg: "4xl",
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
							sm: "2xl",
							md: "3xl",
							lg: "4xl",
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
							sm: "2xl",
							md: "3xl",
							lg: "4xl",
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
