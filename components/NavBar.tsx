import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { fadeUp, shakeAnimation } from "../styles/Transitions";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

type HeaderProps = {
  scrollToContact: () => void;
  scrollToProject: () => void;
};

const NavBar: React.FC<HeaderProps> = ({
  scrollToContact,
  scrollToProject
}) => {
  const { locale, locales } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { formatMessage } = useIntl();
  const pagesArray = [
    // {
    // 	id: "about",
    // 	text: "About",
    // 	link: "/about",
    // },
    {
      id: "projects",
      text: formatMessage({ id: "NavBar.Projects" }),
      onClick: () => scrollToProject()
    },
    {
      id: "contact",
      text: formatMessage({ id: "NavBar.Contact" }),
      onClick: () => scrollToContact()
    },
    {
      id: "Resume",
      text: formatMessage({ id: "NavBar.Resume" }),
      link: "/victor-resume.pdf",
      external: true
    },
    {
      id: "locale",
      text: locale === "es" ? "🇺🇸" : "🇦🇷",
      link: locale === "es" ? "/en-US" : "/es"
    },
    {
      id: "translations",
      button: (
        <IconButton
          aria-label="translations"
          sx={{
            bgColor: "transparent",
            ":hover": {
              color: colorMode === "dark" ? "textPrimary.500" : "light.400",
              bgColor: colorMode === "dark" ? "brand.400" : "textPrimary.500",
              animation: shakeAnimation
            }
          }}
          onClick={() => toggleColorMode()}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      )
    }
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "50px",
        bgColor: colorMode === "dark" ? "dark.500" : "light.500",
        top: "0",
        position: "fixed"
      }}
      zIndex={100}
      visibility={{
        sm: "visible",
        md: "visible",
        lg: "visible"
      }}
    >
      <Flex justify="flex-end" align="center" flexDirection="row" height="100%">
        {pagesArray.map((p, idx) => (
          <Box
            marginX={{
              base: "5px",
              sm: "10px",
              md: "15px",
              lg: "15px"
            }}
            key={p.id}
            color={colorMode === "dark" ? "brand.500" : "textPrimary.500"}
            sx={{
              opacity: 0,
              animation: `${fadeUp} 350ms normal forwards ease-in-out`,
              animationDelay: `${1050 + 350 * (idx + 1)}ms`
            }}
          >
            {p.text ? (
              <Text
                fontSize={{
                  base: "sm",
                  sm: "md",
                  md: "xl",
                  lg: "xl"
                }}
                fontWeight={{
                  base: "normal",
                  sm: "semibold",
                  md: "bold",
                  lg: "bold"
                }}
                cursor="pointer"
                onClick={p.onClick ? p.onClick : undefined}
              >
                {p.link ? (
                  <Link href={p.link} isExternal={p.external}>
                    {p.text}
                  </Link>
                ) : (
                  p.text
                )}
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

export default NavBar;
