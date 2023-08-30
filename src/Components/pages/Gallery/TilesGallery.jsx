import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const TilesGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Tiles and Grout Cleaning Gallery" />
      <GallerySubComp title="Tiles and Grout" />
      <ContactComp />
      <Footer />
    </>
  );
};

export default TilesGallery;
