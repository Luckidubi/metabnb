import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Box position="relative" bg="#FFFFFF" w="full" maxW="1440px" minH="100vh">
        <Header />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
