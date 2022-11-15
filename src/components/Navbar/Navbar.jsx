import { Box, Flex, Image, Spacer, Button } from "@chakra-ui/react";
import metaBnb from "/src/assets/MetaBnbIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((t) => !t);
  };
  const Menu = () => {
    return (
      <>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/">Place to stay</Link>
        </p>
        <p>
          <Link to="/">NFTs</Link>
        </p>
        <p>
          <Link to="/">Community</Link>
        </p>
      </>
    );
  };

  return (
    <>
      {/* <Box
        maxW="1240px"
        h="48px"
        top="43px"
        left={{ lg: "50px", xl: "100px" }}
        right={{ lg: "50px", xl: "100px" }}
        position="absolute"
        className="metabnb__navbar"
      >
        <Flex  justifyContent="space-between">
          <Box boxShadow="rgba(96,96,96,0.15)">
            <Image
              w={{ base: "200px", xl: "233px" }}
              h="36.67px"
              src={metaBnb}
              alt="metabnb icon"
            />
          </Box>
          <Spacer />
          <Box
            display="flex"

            flexDirection="row"
            alignItems="flex-end"
            gap={{ base: "20px", lg: "38px", xl: "48px" }}
            fontFamily="Red Rose"
            fontStyle="normal"
            fontWeight="400"
            fontSize={{ lg: "18px", xl: "20px" }}
            color="#434343"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Place to stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </Box>
          <Spacer />
          <Box >
            <Button
              fontFamily="Red Rose"
              fontStyle="normal"
              colorScheme=""
              color="#FFFFFF"
              borderRadius="10px"
              bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
            >
              Connect wallet
            </Button>
          </Box>
        </Flex>
      </Box> */}

      <Box className="metabnb__navbar">
        <Box className="metabnb__navbar-links">
          <Box className="metabnb__navbar-links_logo">
            <img src={metaBnb} alt="metabnb icon" />
          </Box>

          <Box className="metabnb__navbar-links_container">
            <Menu />
          </Box>
        </Box>

        <Box className="metabnb__navbar-sign">
          <Button colorScheme="">Connect Wallet</Button>
        </Box>
        <Box className="metabnb__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine color="#434343" size={27} onClick={handleToggle} />
          ) : (
            <RiMenu3Line color="#434343" size={27} onClick={handleToggle} />
          )}

          {toggleMenu && (
            <Box className="metabnb__navbar-menu_container scale-up-center">
              <Box className="metabnb__navbar-menu_container-links">
                <Menu />
                <Box className="metabnb__navbar-menu-button">
                  <button className="button" colorScheme="">
                    Connect Wallet
                  </button>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
