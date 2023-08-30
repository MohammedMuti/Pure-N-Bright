import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";

const CarpetGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Carpet Cleaning Gallery" />
      <div className="gallery-sub"></div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default CarpetGallery;
