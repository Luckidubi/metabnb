import "./CardNFT.css";
import { Box } from "@chakra-ui/react";
import Star from "../Star/Star";


import { AiFillHeart } from "react-icons/ai";
function CardNFT({ imgUrl }) {
  return (
    <>
      <Box  _hover={{boxShadow:"xl", cursor:"pointer"}} className="nftcard__container">
        <Box className="nftcard__imagebox">
          <img src={imgUrl} alt="NFT card" />
          <Box className="nftcard__heart">
            <AiFillHeart
              className="heart"


            />
          </Box>
        </Box>
        <Box className="nftcard__name-price">
          <p>Desert King</p>
          <p>1MBT per night</p>
        </Box>
        <Box className="nftcard__distance-vacancy">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </Box>
        <Box className="nftcard__ratings">
          <Star />
        </Box>
      </Box>
    </>
  );
}

export default CardNFT;
