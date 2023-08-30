import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const UpholsteryGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Upholstery Cleaning Gallery" />
      <GallerySubComp title="Upholstery" />
      <ContactComp />
      <Footer />
    </>
  );
};

export default UpholsteryGallery;
