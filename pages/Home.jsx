import Brand from "../src/components/CardNFT/Brand/Brand";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Inspiration from "../src/components/Inspiration/inspiration";
import NFTs from "../src/components/NFTs/NFTs";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Brand />
      <Inspiration />
      <NFTs/>
      
    </>
  );
};

export default Home;
