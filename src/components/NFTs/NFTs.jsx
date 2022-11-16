import { Box, Button, Image } from "@chakra-ui/react";
import "./NFTs.css";
import NftsImg from '/src/assets/NFTsCta.png'
function NFTs() {
  return (
    <>
      <Box className="metabnb-nfts__container section__padding" id="NFTs">
        <Box className="metabnb-nfts__content-cta">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <Box className="metabnb-nfts__cta-button">
            <Button colorScheme="white">Learn more</Button>
          </Box>
        </Box>
        <Box className="metabnb-nfts__content-image">
          <Image src={NftsImg}/>
        </Box>
      </Box>
    </>
  );
}

export default NFTs;
