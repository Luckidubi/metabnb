import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Box position="relative" bg="#FFFFFF" w="full" maxW="2540px" minH="100vh">
        <Navbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
