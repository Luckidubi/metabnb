import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import metaBnb from "/src/assets/MetaBnbIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import walletconnect from "/src/assets/walletconnect.svg";
import downChevron from "/src/assets/Down Chevron.svg";
import metamsk from "/src/assets/metamsk.svg";
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Link to="/">
              {" "}
              <img src={metaBnb} alt="metabnb icon" />
            </Link>
          </Box>

          <Box className="metabnb__navbar-links_container">
            <Menu />
          </Box>
        </Box>

        <Box className="metabnb__navbar-sign">
          <Button onClick={onOpen} colorScheme="">
            Connect Wallet
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  fontFamily="Red Rose" borderRadius="16px">
              <ModalHeader>Connect Wallet</ModalHeader>
              <ModalCloseButton />
              <hr />
              <ModalBody
                color="#333333"

                fontSize="16px"
                fontWeight="400"
                margin="1rem 0"
              >
                Choose your preferred wallet
                <Box
                  boxSizing="border-box"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  align-items="center"
                  p="12px 20px"
                  gap="135px"
                  bg="#F8F9FA"
                  border="1px solid #CFD8DC"
                  borderRadius="12px"
                  my="16px"
                  _hover={{cursor:'pointer', }}
                >
                  <Box>
                    <Image
                      h="44px"
                      maxW="156px"
                      src={metamsk}
                      alt="metamask logo"
                    />
                  </Box>
                  <Box alignSelf="center">
                    <Image src={downChevron} alt="down chevron icon" />
                  </Box>
                </Box>
                <Box
                  boxSizing="border-box"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  align-items="center"
                  p="12px 20px"
                  gap="135px"
                  bg="#F8F9FA"
                  border="1px solid #CFD8DC"
                  borderRadius="12px"
                  _hover={{cursor:'pointer', }}
                >
                  <Box>
                    <Image
                      h="44px"
                      maxW="156px"
                      src={walletconnect}
                      alt="walletconnect logo"
                    />
                  </Box>
                  <Box alignSelf="center">
                    <Image src={downChevron} alt="down chevron icon" />
                  </Box>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
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
                  <button onClick={onOpen} className="button" colorScheme="">
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
