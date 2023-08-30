import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";

const TilesGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Tiles and Grout Cleaning Gallery" />
      <div className="gallery-sub"></div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default TilesGallery;
