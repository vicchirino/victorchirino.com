import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
	ChakraProvider,
	extendTheme,
	type ThemeConfig,
} from "@chakra-ui/react";

const breakpoints = {
	xxxsm: "100px",
	xxsm: "280px",
	xsm: "320px",
	sm: "400px",
	md: "600px",
	lg: "800px",
	xl: "1200px",
};

const theme: ThemeConfig = extendTheme({
	colors: {
		primary: {
			500: "#cfd8dc",
		},
		primaryLight: {
			500: "#ffffff",
		},
		primaryDark: {
			500: "9ea7aa",
		},
		secondary: {
			500: "#ffa000",
		},
		secondaryLight: {
			500: "#ffd149",
		},
		secondaryDark: {
			500: "c67100",
		},
		primaryText: {
			500: "#212121",
		},
		secondaryText: {
			500: "#fafafa",
		},
	},
	breakpoints,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
