import { Box, Button, Flex, HStack, LinkOverlay } from "@chakra-ui/react";
import { CustomIcon } from "../utils/icons";
import { EmailIcon } from "@chakra-ui/icons";
import { forwardRef, LegacyRef } from "react";

const ContactFooter = forwardRef((props, ref) => {
	const openSocialNetwork = ({ network }: { network: string }) => {
		let url = "";
		switch (network) {
			case "email":
				url = "mailto: vicchirino@gmail.com";
				break;
			case "linkedin":
				url = "https://ar.linkedin.com/in/victor-chirino";
				break;
			case "github":
				url = "https://github.com/vicchirino";
				break;
			case "toptal":
				url = "https://www.toptal.com/resume/victor-gabriel-chirino";
				break;
			case "twitter":
				url = "https://twitter.com/VicChirino";
				break;
			case "instagram":
				url = "https://www.instagram.com/vicchirino/";
				break;
		}
		window.open(url, "_blank")?.focus();
	};

	return (
		<Box
			sx={{
				width: "70%",
				padding: "25px",
				margin: "auto",
			}}
			ref={ref as LegacyRef<HTMLDivElement>}
			_focus={{
				border: "3px solid",
				borderColor: "brand.600",
			}}
		>
			<Flex flexDirection="column" alignItems="center" justifyItems="center">
				<Button leftIcon={<EmailIcon />} variant="solid">
					<LinkOverlay href="mailto: vicchirino@gmail.com">
						{"Let's chat"}
					</LinkOverlay>
				</Button>
				<HStack spacing="25px" paddingTop="25px">
					<CustomIcon
						name="linkedin"
						href="https://ar.linkedin.com/in/victor-chirino"
						boxSize={7}
					/>
					<CustomIcon
						name="github"
						href="https://github.com/vicchirino"
						boxSize={7}
					/>
					<CustomIcon
						name="toptal"
						href="https://www.toptal.com/resume/victor-gabriel-chirino"
						boxSize={7}
					/>
					<CustomIcon
						name="twitter"
						href="https://twitter.com/VicChirino"
						boxSize={7}
					/>
					<CustomIcon
						name="instagram"
						href="https://www.instagram.com/vicchirino/"
						boxSize={7}
					/>
				</HStack>
			</Flex>
		</Box>
	);
});

ContactFooter.displayName = "ContactFooter";

export default ContactFooter;
