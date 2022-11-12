import { Box, Flex, Image, Spacer, Button } from "@chakra-ui/react";
import metaBnb from "/src/assets/MetaBnbIcon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Box

maxW="1240px"
        h="48px"
        top="43px"
        left={{ lg: "50px", xl: "100px" }}
        right={{ lg: "50px", xl: "100px" }}
        position="absolute"
      >
        <Flex  maxW="1240px"position="relative">
          <Box boxShadow="rgba(96,96,96,0.15)">
            <Image
              w={{ md: "140px", lg: "180px", xl: "233px" }}
              h={{ lg: "26.6", xl: "36.67px" }}
              src={metaBnb}
              alt="metabnb icon"
            />
          </Box>
          <Spacer />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-end"
            gap={{ lg: "38px", xl: "48px" }}
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
          <Box>
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
      </Box>
    </>
  );
}

export default Header;
