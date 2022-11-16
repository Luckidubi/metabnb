import { Box } from "@chakra-ui/react";
import CardNFT from "../CardNFT/CardNFT";
import "./Inspiration.css";
import { useState } from "react";
import {
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  nft7,
  nft8,
} from "/src/components/CardNFT/index.jsx";

function Inspiration() {

  const nftData = [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8];
  return (
    <>
      <Box className="metabnb__inspiration section__padding">
        <h2>Inspiration for your next adventure</h2>
        <Box className="metabnb__inspiration-card__list">
          {nftData.map((item, index) => (
            <CardNFT
              key={index + item}
              imgUrl={item}

            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Inspiration;
