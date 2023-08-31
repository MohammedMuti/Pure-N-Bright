import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import "./Gallery.css";
import GalleryComp from "./GalleryComp";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Gallery" slogan="Checkout Our Albums" />
      <div className="gallery">
        <div className="gallery_wrapper">
          <GalleryComp
            title="Carpet Cleaning"
            img={require("../../../Assets/Images/Gallery/carpet_cleaning.jpg")}
            link="/gallery/carpet-cleaning-gallery"
          />

          <GalleryComp
            title="RUG Cleaning"
            img={require("../../../Assets/Images/Gallery/rug_cleaning.jpg")}
            link="/gallery/rug-cleaning-gallery"
          />
          <GalleryComp
            title="UPHOLSTERY Cleaning"
            img={require("../../../Assets/Images/Gallery/UPHOLSTERY_cleaning.jpg")}
            link="/gallery/upholstery-cleaning-gallery"
          />
          <GalleryComp
            title="leather Cleaning"
            img={require("../../../Assets/Images/Gallery/leather_cleaning.jpg")}
            link="/gallery/leather-cleaning-gallery"
          />
          <GalleryComp
            title="TILE AND GROUT Cleaning"
            img={require("../../../Assets/Images/Gallery/tile_grout_cleaning.jpeg")}
            link="/gallery/tile-grout-cleaning-gallery"
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Gallery;
