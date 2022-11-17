import { Box } from "@chakra-ui/react";
import { instagram, metabnblogo, copy, twitter, facebook } from "../CardNFT";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <Box className="footer__container section__padding">
        <Box  className="footer__logo-icons">
          <Box className="footer__logo">
            <img src={metabnblogo} alt="metabnbn logo" />
          </Box>
          <Box className="footer__social-icon">
            <img src={facebook} alt="facebook logo" />{" "}
            <img src={instagram} alt="instagram logo" />{" "}
            <img src={twitter} alt="twitter logo" />
          </Box>
          <Box className="footer__copyright">
            <img src={copy} alt="copyright" />
          </Box>
        </Box>
        <Box order="0" className="footer__community">
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </Box>
        <Box order="1" className="footer__places">
          <h4>Places</h4>
          <p>Castle</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </Box>
        <Box order="2" className="footer__aboutus">
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </Box>
      </Box>
    </>
  );
}
