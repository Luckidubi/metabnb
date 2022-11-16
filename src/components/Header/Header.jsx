import { Box, Button, Image, Flex, Input, InputGroup } from "@chakra-ui/react";
import "./Header.css";
import GroupImg from "/src/assets/Group 4028.png";
const Header = () => {
  return (
    <>
      {/* <Box maxW="1221px" h="459px" left="100px" top="216px" position="absolute">
          <Flex  direction="row" justify="center" align="center" gap="99px">
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
                flex="1 300px"
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
              <Box flex="1 auto" w="618px" h="54px" order="2">
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
            <Flex w="full">
              <Box maxW="476px" maxH="459px">
                <Image
                  boxSize="459px"
                  src={GroupImg}
                  borderRadius="15px"
                  alt="metaverse house image"
                />

                {/* <Image
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
                /> */}
      {/* </Box>
            </Flex>
          </Flex>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          p="10px 100px"
          gap="264px"
          position="absolute"
          maxW="1440px"
          w="full"
          h="70px"
          left="0px"
          top="742px"
          bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)"
        ></Box> */}
      <Box className="metabnb__header  section__padding">
        <Box className="metabnb__header-content">
          <h1 className="header-text">
            Rent a <span className="span">Place</span> away from{" "}
            <span className="span">Home</span> in the{" "}
            <span className="span">Metaverse</span>
          </h1>
          <p>
            {" "}
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <Box className="metabnb__header-content__input">
            <InputGroup size="md">
              <Input
                w="100%"
                minH="54px"
                flex="2"
                borderRightRadius="0"
                placeholder="Search for location"
                boxSizing="border-box"
                fontFamily="Red Rose"
                fontStyle="normal"
                background="rgba(247, 247, 247, 0.1)"
                border=" 1px solid #A3A3A3"
                type="email"
              />
              <Button
                bg="linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%)"
                borderRadius="0px 8px 8px 0px"
                lineHeight="19px"
                maxW="230px"
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
        </Box>
        <Box className="metabnb__header-image">
          <Image src={GroupImg} alt="metaverse house image" />
        </Box>
      </Box>
    </>
  );
};

export default Header;
