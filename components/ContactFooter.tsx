import { Box, Button, Flex, HStack, LinkOverlay } from "@chakra-ui/react";
import { AnimatedIcon } from "./AnimatedIcon";
import { EmailIcon } from "@chakra-ui/icons";
import { forwardRef, LegacyRef } from "react";

const ContactFooter = forwardRef((props, ref) => {
	return (
		<Box
			sx={{
				width: "100%",
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
					<AnimatedIcon
						name="linkedin"
						href="https://ar.linkedin.com/in/victor-chirino"
						boxSize={7}
					/>
					<AnimatedIcon
						name="github"
						href="https://github.com/vicchirino"
						boxSize={7}
					/>
					<AnimatedIcon
						name="toptal"
						href="https://www.toptal.com/resume/victor-gabriel-chirino"
						boxSize={7}
					/>
					<AnimatedIcon
						name="twitter"
						href="https://twitter.com/VicChirino"
						boxSize={7}
					/>
					<AnimatedIcon
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
