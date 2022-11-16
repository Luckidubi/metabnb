import "./Brand.css";
import { Box } from "@chakra-ui/react";
import Mbtoken from "/src/assets/Mbtoken.svg";
import Metamask from "/src/assets/Metamask.svg";
import Opensea from "/src/assets/Opensea.svg";

function Brand() {
  return (
    <>
      <Box className="metabnb__brand  section__padding">
        <Box>
          <img src={Mbtoken} alt="Mbtoken icon" />
        </Box>
        <Box>
          <img src={Metamask} alt="Metamask icon" />
        </Box>
        <Box>
          <img src={Opensea} alt="Opensea Icon" />
        </Box>
      </Box>
    </>
  );
}

export default Brand;
