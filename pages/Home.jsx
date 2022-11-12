import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <Box
        maxW="1221px"
        w="full"
        h="459px"
        left="100px"
        top="216px"
        position="absolute"
      >
        <Flex direction="row" justify="center" align="center" gap="6.1875em">
          <Flex
            direction="column"
            align="flex-start"
            gap="3em"
            maxW="646px"
            h="400px"
          >
            <Box
              fontFamily="Red Rose"
              fontStyle="normal"
              fontWeight="400"
              fontSize="56px"
              lineHeight="140%"
              letterSpacing="-0.02em"
              color="#434343"
              order="0"
            >
              Rent a Place away from Home in the Metaverse
            </Box>
            <Box
              fontFamily="Red Rose"
              fontStyle="normal"
              fontWeight="400"
              fontSize="24px"
              lineHeight="35px"
              color="#434343"
              order="1"
            >
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </Box>
            <Box w="618px" h="54px" order="2" flex-grow="0">
              <InputGroup size="md">
                <Input w="360px" h="54px" boxSizing="border-box" />
                <InputRightAddon
                  bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
                  borderRadius="0px 8px 8px 0px"
                  lineHeight="19px"
                  w="230px"
                  textAlign="center"
                  fontSize="16px"
                  h="54px"
                  children="search"
                  color="#FFFFFF"
                />
              </InputGroup>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
