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
          <Link to="/places">Place to stay</Link>
        </p>
        <p>
          <a href="#NFTs">NFTs</a>
        </p>
        <p>
          <Link to="/">Community</Link>
        </p>
      </>
    );
  };

  return (
    <>

      <Box className="metabnb__navbar">
        <Box className="metabnb__navbar-links">
          <Box className="metabnb__navbar-links_logo">
        <Link to="/">    <img src={metaBnb} alt="metabnb icon" /></Link>
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
