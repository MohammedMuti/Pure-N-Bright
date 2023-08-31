import Banner from "../../common/Banner/Banner";
import ContactComp from "../../common/Contact/ContactComponent";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import Benefit from "./Benefit";
import Helped from "./Helped";
import "./RugService.css";

const RugService = () => {
  return (
    <>
      <Navbar />
      <Banner sublink={"Services"} sublink2={"Rug Cleaning Melbourne"} />
      <div className="rug-service"></div>
      <div className="benefits">
        <div className="benefits-heading">
          <h2>Our Benefits of Clean Service</h2>
        </div>
        <div className="benefits-content">
          <Benefit
            title="New LOOK"
            info="Leaving carpets refreshed and enhanced appearance."
            img={require("../../../Assets/Images/Services/Rug/icons/new-look.png")}
            title_m="STAIN REMOVAL"
            info_m="Spots, spills, stains and odours with our special techniques."
            img_m={require("../../../Assets/Images/Services/Rug/icons/stain-removal.png")}
          />

          <Benefit
            title="ELIMINATE ALLERGENS"
            info="Pollutants, bacteria, allergens, dust and mites and pet hair."
            img={require("../../../Assets/Images/Services/Rug/icons/eliminate-allergents.png")}
            title_m="
            FRESHNESS"
            info_m="Omnipresent freshness with carpet
            cleaning and deodorising."
            img_m={require("../../../Assets/Images/Services/Rug/icons/freshness.png")}
          />
          <Benefit
            title="
            ORGANIC CLEANING"
            info="Organic, non-toxic compounds to
            protect the health of your family & pets."
            img={require("../../../Assets/Images/Services/Rug/icons/organic-cleaning.png")}
            title_m="A 100% GUARANTEE"
            info_m="On all of our work."
            img_m={require("../../../Assets/Images/Services/Rug/icons/gurantee.png")}
          />
          <Benefit
            title="
            SAVES MONEY"
            info="A softer, better carpet so that you don't have to think about replacing them anymore."
            img={require("../../../Assets/Images/Services/Rug/icons/saves-money.png")}
            title_m="PET ODOUR AND UNPLEASANT ODOUR REMOVALS"
            info_m="Guaranteed cure for pet accidents."
            img_m={require("../../../Assets/Images/Services/Rug/icons/pet-odour.png")}
          />
        </div>
      </div>

      <div className="helped">
        <div className="helped-heading">
          <h3>Industries We've Helped For Their Cleaning Needs</h3>
        </div>
        <div className="helped-container">
          <Helped
            title={"Real Estate"}
            img={require("../../../Assets/Images/Services/Rug/helped/1.webp")}
          />
          <Helped
            title={"Health And Medical"}
            img={require("../../../Assets/Images/Services/Rug/helped/2.webp")}
          />
          <Helped
            title={"Banking And Finance"}
            img={require("../../../Assets/Images/Services/Rug/helped/3.webp")}
          />
          <Helped
            title={"Education And Training"}
            img={require("../../../Assets/Images/Services/Rug/helped/4.webp")}
          />
          <Helped
            title={"Goverment"}
            img={require("../../../Assets/Images/Services/Rug/helped/5.webp")}
          />
          <Helped
            title={"Professional Services"}
            img={require("../../../Assets/Images/Services/Rug/helped/6.webp")}
          />
          <Helped
            title={"Construction And Engineering"}
            img={require("../../../Assets/Images/Services/Rug/helped/7.webp")}
          />
          <Helped
            title={"Legal And Property"}
            img={require("../../../Assets/Images/Services/Rug/helped/8.webp")}
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default RugService;
