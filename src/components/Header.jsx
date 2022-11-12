import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import metaBnb from "/src/assets/MetaBnbIcon.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Box maxW="1240px" w="full" h="48px">
        <Flex w="full">
          <Box boxShadow="rgba(96,96,96,0.15)">
            <Image src={metaBnb} alt="metabnb icon" />
          </Box>
          <Spacer />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="48px"
            fontFamily="Red Rose"
            fontStyle="normal"
            fontWeight="400"
            fontSize="20px"
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
          <Box></Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
