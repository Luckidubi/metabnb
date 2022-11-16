import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Box position="relative" bg="#FFFFFF" w="full" maxW="2540px" minH="100vh">
        <Navbar />
        <Outlet />
      </Box>
      <Footer/>
    </>
  );
};

export default Layout;
