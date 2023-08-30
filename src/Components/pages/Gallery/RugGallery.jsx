import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const RugGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Rug Cleaning Gallery" />
      <GallerySubComp title="Rug" />
      <ContactComp />
      <Footer />
    </>
  );
};

export default RugGallery;
