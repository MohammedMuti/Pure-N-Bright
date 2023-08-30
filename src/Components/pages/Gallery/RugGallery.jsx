import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";

const RugGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Rug Cleaning Gallery" />
      <div className="gallery-sub"></div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default RugGallery;
