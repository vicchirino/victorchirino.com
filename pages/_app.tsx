import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
	ChakraProvider,
	extendTheme,
	type ThemeConfig,
} from "@chakra-ui/react";
import Head from "next/head";

const breakpoints = {
	xxxsm: "100px",
	xxsm: "280px",
	xsm: "320px",
	sm: "400px",
	md: "600px",
	lg: "800px",
	xl: "1000px",
	xxl: "1200px",
};

const theme: ThemeConfig = extendTheme({
	colors: {
		light: {
			400: "#ffffff",
			500: "#cfd8dc",
			600: "#9ea7aa",
		},
		dark: {
			400: "#6d6d6d",
			500: "#424242",
			600: "#1b1b1b",
		},
		brand: {
			400: "#ffd149",
			500: "#ffa000",
			600: "#c67100",
		},
		textPrimary: {
			500: "#212121",
		},
		textSecondary: {
			500: "#fafafa",
		},
	},
	breakpoints,
	initialColorMode: "light",
	useSystemColorMode: false,
	components: {
		Button: {
			variants: {
				outline: {
					borderColor: "brand.500",
					":hover": {
						bg: "brand.500",
						color: "textPrimary.500",
					},
				},
				solid: {
					borderColor: "brand.500",
					":hover": {
						bg: "brand.500",
						color: "textPrimary.500",
					},
				},
			},
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Victor Chirino</title>
				<meta name="description" content="Victor Chirino personal page" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
