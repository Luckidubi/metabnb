import {
  Box,
  Button,
  Image,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import Image1 from "/src/assets/image1.png";
import Image2 from "/src/assets/image2.png";
import Image3 from "/src/assets/image3.png";
import Image4 from "/src/assets/image4.png";

const Home = () => {
  return (
    <>
      <Box
        maxW="1221px"
       
        h="459px"
        left="100px"
        top="216px"
        position="absolute"
      >
        <Flex direction="row" justify="center" align="center" gap="99px">
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
              maxW="646px"
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
                <Input
                  w="360px"
                  h="54px"
                  borderRightRadius="0"
                  placeholder="Search for location"
                  boxSizing="border-box"
                  fontFamily="Red Rose"
                  fontStyle="normal"
                  background="rgba(247, 247, 247, 0.1)"
                  border=" 1px solid #A3A3A3"
                />
                <Button
                  bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
                  borderRadius="0px 8px 8px 0px"
                  lineHeight="19px"
                  maxW="230px"
                  w="full"
                  colorScheme=""
                  fontFamily="Red Rose"
                  fontStyle="normal"
                  justifyContent="center"
                  textAlign="center"
                  fontSize="16px"
                  h="54px"
                  color="#FFFFFF"
                >
                  Search
                </Button>
              </InputGroup>
            </Box>
          </Flex>
          <Flex>
            <Box maxW="476px" maxH="459px">
              <Image
                position="absolute"
                w="234px"
                h="176px"
                left="987px"
                top="184px"
                src={Image1}
                borderRadius="15px"
                alt="metaverse house image"
              />
              <Image
                position="absolute"
                w="234px"
                h="176px"
                left="745px"
                top="283px"
                borderRadius="15px"
                src={Image2}
                alt="metaverse house image"
              />
              <Image
                position="absolute"
                w="234px"
                h="176px"
                left="745px"
                top="99px"
                borderRadius="15px"
                src={Image3}
                alt="metaverse house image"
              />
              <Image
                position="absolute"
                w="234px"
                h="176px"
                left="987px"
                top="0px"
                borderRadius="15px"
                src={Image4}
                alt="metaverse house image"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
