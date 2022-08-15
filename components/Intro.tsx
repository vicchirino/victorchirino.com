import { Box, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import { fadeUp } from "../styles/Transitions";
import { useIntl } from "react-intl";

const Intro: React.FC = () => {
  const { formatMessage } = useIntl();
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
            md: "75%"
          },
          flexDirection: "column",
          justifyContent: "center",
          border: "2px solid",
          borderColor: "brand.500"
        }}
      >
        <Text
          sx={{
            fontSize: {
              base: "md",
              md: "lg",
              lg: "xl"
            },
            fontWeight: {
              base: "semibold",
              md: "semibold",
              lg: "bold"
            },
            opacity: 0,
            animation: `${fadeUp} 350ms normal forwards ease-in-out`,
            animationDelay: "350ms"
          }}
        >
          {formatMessage({ id: "Intro.Title" })}
        </Text>
        <Text
          sx={{
            fontSize: {
              base: "35px",
              sm: "50px",
              md: "60px",
              lg: "80px"
            },
            fontWeight: {
              base: "semibold",
              md: "semibold",
              lg: "bold"
            },
            opacity: 0,
            animation: `${fadeUp} 350ms normal forwards ease-in-out`,
            animationDelay: "700ms"
          }}
        >
          {"Victor Chirino"}
        </Text>
        <Text
          sx={{
            width: {
              base: "65%"
            },
            fontSize: {
              base: "xs",
              sm: "md",
              lg: "lg"
            },
            fontWeight: {
              base: "regular"
            },
            opacity: 0,
            animation: `${fadeUp} 350ms normal forwards ease-in-out`,
            animationDelay: "1050ms"
          }}
        >
          {formatMessage({ id: "Intro.Description" })}
        </Text>
      </Box>
    </Layout>
  );
};

export default Intro;
