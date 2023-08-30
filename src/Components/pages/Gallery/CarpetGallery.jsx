import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import GallerySubComp from "./GallerySubComp";

const CarpetGallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" sublink2="Carpet Cleaning Gallery" />
      <GallerySubComp
        title="Carpet"
        images={[
          {
            src: require("../../../Assets/Images/Gallery/Carpet/1.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/2.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/3.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/4.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/5.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/6.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/7.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/8.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/9.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/10.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/11.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/12.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/13.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/14.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/15.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/16.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/17.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/18.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/19.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/20.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/21.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/22.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/23.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/24.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/25.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/26.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/27.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/28.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/29.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/30.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/31.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/32.webp"),
          },
          {
            src: require("../../../Assets/Images/Gallery/Carpet/33.webp"),
          },
        ]}
      />
      <ContactComp />
      <Footer />
    </>
  );
};

export default CarpetGallery;
