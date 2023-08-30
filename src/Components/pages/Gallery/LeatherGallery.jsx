import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const LeatherGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Leather Cleaning Gallery" />
      <GallerySubComp title="Leather" />
      <ContactComp />
      <Footer />
    </>
  );
};

export default LeatherGallery;
