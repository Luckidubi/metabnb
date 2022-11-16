import { Box } from "@chakra-ui/react";
import CardNFT from "../CardNFT/CardNFT";
import "./PlaceToStay.css";

import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
  nft9,
  nft10,
  nft11,
  nft12,
  nft13,
  nft14,
  nft15,
  nft16,
} from "/src/components/CardNFT/index.jsx";

function PlaceToStay() {
  const nftData = [
    nft1,
    nft2,
    nft3,
    nft4,
    nft5,
    nft6,
    nft7,
    nft8,
    nft9,
    nft10,
    nft11,
    nft12,
    nft13,
    nft14,
    nft15,
    nft16,
  ];
  return (
    <>
      <Box className="metabnb__inspiration section__padding">
       
        <Box className="metabnb__inspiration-card__list">
          {nftData.map((item, index) => (
            <CardNFT key={index + item} imgUrl={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default PlaceToStay;
