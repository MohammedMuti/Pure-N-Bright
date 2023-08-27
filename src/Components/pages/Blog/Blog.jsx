import Banner from "../../common/Banner/Banner";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/navbar/navbar";
import ContactComp from "../../common/Contact/ContactComponent";
import "./Blog.css";
import BlogComp from "./BlogComp";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Banner sublink="Blog" />

      <div className="blogs">
        <div className="blog content">
          <BlogComp
            title="Sheep Skin Rug Cleaning"
            img={require("../../../Assets/Images/Blogs/Sheep.png")}
          />
          <BlogComp
            title="How to use baking soda for rug cleaning"
            img={require("../../../Assets/Images/Blogs/soda.jpg")}
          />
          <BlogComp
            title="Rug cleaning vs Carpet cleaning"
            img={require("../../../Assets/Images/Blogs/versus.jpg")}
          />
          <BlogComp
            title="Why do I need a professional rug cleaner?"
            img={require("../../../Assets/Images/Blogs/professional.jpg")}
          />
          <BlogComp
            title="TIPS for cleaning cowhide Rug"
            img={require("../../../Assets/Images/Blogs/tips.jpg")}
          />
          <BlogComp
            title="How to Wash Rugs for Best Results?"
            img={require("../../../Assets/Images/Blogs/wash.jpg")}
          />
          <BlogComp
            title="Why You Should Prefer Carpet Steam Cleaning Over DIY Cleaning Methods?"
            img={require("../../../Assets/Images/Blogs/steam.jpg")}
          />
          <BlogComp
            title="Why Do You Need Rug Cleaning Experts?"
            img={require("../../../Assets/Images/Blogs/experts.jpg")}
          />
          <BlogComp
            title="What is Best for You? Rug Steam, Dry or Traditional Hand Cleaning?"
            img={require("../../../Assets/Images/Blogs/traditional.jpg")}
          />
          <BlogComp
            title="How to Clean a Rug?"
            img={require("../../../Assets/Images/Blogs/clean.jpg")}
          />
        </div>
      </div>
      <ContactComp />
      <Footer />
    </>
  );
};

export default Blog;
