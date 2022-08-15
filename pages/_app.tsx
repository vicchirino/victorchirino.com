import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig
} from "@chakra-ui/react";
import { IntlProvider } from "react-intl";
import english from "../translations/en.json";
import spanish from "../translations/es.json";

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px"
};

const theme: ThemeConfig = extendTheme({
  colors: {
    light: {
      400: "#ffffff",
      500: "#cfd8dc",
      600: "#9ea7aa"
    },
    dark: {
      400: "#6d6d6d",
      500: "#424242",
      600: "#1b1b1b"
    },
    brand: {
      400: "#ffd149",
      500: "#ffa000",
      600: "#c67100"
    },
    textPrimary: {
      500: "#212121"
    },
    textSecondary: {
      500: "#fafafa"
    }
  },
  fonts: {
    heading: `Fira Code`,
    body: `Fira Code`
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
            color: "textPrimary.500"
          }
        },
        solid: {
          borderColor: "brand.500",
          ":hover": {
            bg: "brand.500",
            color: "textPrimary.500"
          }
        }
      }
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <IntlProvider locale="en" messages={english}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </IntlProvider>
    </>
  );
}

export default MyApp;
