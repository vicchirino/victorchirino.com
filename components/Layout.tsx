import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

type LayoutProps = {
  fullHeight?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, fullHeight = true }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      sx={{
        width: "100%",
        bgColor: colorMode === "dark" ? "dark.600" : "light.400",
        paddingTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      minHeight={fullHeight ? "100vh" : "auto"}
    >
      {children}
    </Box>
  );
};

export default Layout;
