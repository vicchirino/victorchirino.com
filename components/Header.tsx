import {
	Box,
	Flex,
	IconButton,
	Link,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();

	const pagesWrray = [
		{
			id: "about",
			text: "About",
			link: "/about",
		},
		{
			id: "experience",
			text: "Experience",
			link: "/experience",
		},
		{
			id: "night-mode",
			button: (
				<IconButton
					aria-label="night-mode"
					variant="outline"
					onClick={() => toggleColorMode()}
					icon={
						colorMode === "dark" ? (
							<SunIcon color={"yellow.300"} />
						) : (
							<MoonIcon color={"white"} />
						)
					}
				/>
			),
		},
	];

	return (
		<Box
			sx={{
				width: "100%",
				height: "50px",
				bgColor: "green.500",
				top: "0",
			}}
			visibility={{
				xxxsm: "visible",
				xxsm: "visible",
				xsm: "visible",
				sm: "visible",
				md: "visible",
				lg: "visible",
			}}
		>
			<Flex justify="flex-end" align="center" flexDirection="row" height="100%">
				{pagesWrray.map(p => (
					<Box
						marginX={{
							xxxsm: "2px",
							xxsm: "5px",
							xsm: "10px",
							sm: "10px",
							md: "15px",
							lg: "15px",
						}}
						key={p.id}
					>
						{p.text ? (
							<Text
								fontSize={{
									xxxsm: "xs",
									xxsm: "xs",
									xsm: "sm",
									sm: "md",
									md: "lg",
									lg: "xl",
								}}
								fontWeight={{
									xxxsm: "light",
									xxsm: "normal",
									xsm: "semibold",
									sm: "bold",
									md: "bold",
									lg: "bold",
								}}
							>
								<Link href={p.link}>{p.text}</Link>
							</Text>
						) : (
							p.button
						)}
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default Header;
