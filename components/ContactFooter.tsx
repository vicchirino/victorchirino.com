import { Box, Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	ToptalIcon,
	TwitterIcon,
} from "../utils/icons";
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
				<Button
					leftIcon={<EmailIcon />}
					variant="solid"
					onClick={() => openSocialNetwork({ network: "email" })}
				>
					Let's chat
				</Button>
				<HStack spacing="25px" paddingTop="25px">
					<IconButton
						aria-label="linkedin"
						variant="outline"
						onClick={() => openSocialNetwork({ network: "linkedin" })}
						icon={<LinkedinIcon boxSize={7} />}
					/>
					<IconButton
						aria-label="github"
						variant="outline"
						onClick={() => openSocialNetwork({ network: "github" })}
						icon={<GithubIcon boxSize={7} />}
					/>
					<IconButton
						aria-label="toptal"
						variant="outline"
						onClick={() => openSocialNetwork({ network: "toptal" })}
						icon={<ToptalIcon boxSize={7} />}
					/>
					<IconButton
						aria-label="twitter"
						variant="outline"
						onClick={() => openSocialNetwork({ network: "twitter" })}
						icon={<TwitterIcon boxSize={7} />}
					/>
					<IconButton
						aria-label="instagram"
						variant="outline"
						onClick={() => openSocialNetwork({ network: "instagram" })}
						icon={<InstagramIcon boxSize={7} />}
					/>
				</HStack>
			</Flex>
		</Box>
	);
});

ContactFooter.displayName = "ContactFooter";

export default ContactFooter;
