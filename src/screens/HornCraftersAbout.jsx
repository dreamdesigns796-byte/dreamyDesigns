// src/screens/About/HornCraftersAbout.jsx
import React, { useEffect } from "react"; // Added useEffect to imports
import "./HornCraftersAbout.css";
import { useLocation } from "react-router-dom";

// Import images from assets folder
import heroImage from "../assets/images/aboutbg.jpg"; // Using same image as placeholder
import missionImage from "../assets/images/AboutBackGround.jpg"; // Using same image as placeholder
import craftsmanshipImage from "../assets/images/craftsmanshipImage.png"; // Using same image as placeholder
import commitmentImage from "../assets/images/aboutCommunity.png"; // Using same image as placeholder

const HornCraftersAbout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const productCategories = [
    {
      id: 1,
      title: "Viking Horns",
      description:
        "Viking horn mug, Drinking horn, Blowing horn, Horn glasses, Horn Cups, and much more!",
    },
    {
      id: 2,
      title: "Horn Buttons",
      description:
        "Horn Button Blanks in all colors and sizes. Finished Horn Buttons available.",
    },
    {
      id: 3,
      title: "Horn Plates",
      description:
        "Horn Plates for Eyeglasses - Light, Medium, Dark Brown, Milk White, and various patterns.",
    },
    {
      id: 5,
      title: "Horn Combs",
      description:
        "Horn Combs for beard, hair, women, men, shaving bowls. All sizes and colors.",
    },
    {
      id: 6,
      title: "Horn Jewelry",
      description:
        "Horn Necklaces, Bangles, Earrings in various designs, sizes and colors.",
    },
    {
      id: 7,
      title: "Horn Cutlery",
      description:
        "Horn Spoons, Plates, Salt Box, Knives, Trays in various designs.",
    },
  ];

  const commitmentPoints = [
    "100% ethically sourced materials",
    "Supporting local artisan communities",
    "Minimal environmental impact",
    "Traditional techniques preserved",
    "Modern innovation embraced",
    "Quality craftsmanship guaranteed",
  ];

  return (
    <div className="aboutPage">
      {/* Hero Section */}
      <section
        className="hero sectionBorder"
        style={{
          backgroundImage: `linear-gradient(rgba(28, 35, 39, 0.9), rgba(28, 35, 39, 0.7)), url(${heroImage})`,
        }}
      >
        <div className="heroOverlay">
          <div className="container">
            <div className="heroContent">
              <div className="cornerAccentTopLeft"></div>
              <div className="cornerAccentTopRight"></div>
              <h1 className="heroTitle">Dreamy Designs</h1>
              <p className="heroSubtitle">
                Where Tradition Meets Craftsmanship
              </p>
              <div className="decorativeLine"></div>
              <p className="heroDescription">
                A renowned name offering extensive range of fine horn and bone
                products that are traditional, elegant and skilled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission sectionBorder">
        <div className="container">
          <div className="missionContent">
            <div className="missionText">
              <h2 className="sectionTitle">To Provide The Highest Quality</h2>
              <h3 className="sectionSubtitle">Horn And Bone Products</h3>
              <div className="separator"></div>
              <p className="missionStatement">
                Welcome to Dreamy Designs – where tradition meets craftsmanship,
                and sustainability blends with artistry. We are a unit under
                Al-Masha International, a leading exporter based in Mumbai.
              </p>
              <p className="missionDetail">
                Recognizing the value in every element, we transform by-products
                into exquisite handicrafts. Our creations reflect the rich
                cultural heritage of India while bringing a unique touch for
                modern homes.
              </p>
            </div>
            <div className="missionImage">
              <img
                src={missionImage}
                alt="Craftsmanship in Action"
                className="imageContent"
                onError={(e) => {
                  e.target.style.display = "none";
                  const placeholder = document.createElement("div");
                  placeholder.className = "imagePlaceholder";
                  placeholder.innerHTML =
                    '<span class="imageText">Craftsmanship in Action</span>';
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="heritage sectionBorder">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Our Heritage</h2>
            <div className="titleDecoration">
              <span className="decorationDot"></span>
              <span className="decorationDot"></span>
              <span className="decorationDot"></span>
            </div>
          </div>
          <div className="heritageContent">
            <div className="heritageText">
              <p className="heritageParagraph">
                Located in Mumbai, India, our company is deeply rooted in a
                region known for its rich heritage of horn and bone handicrafts.
              </p>
              <p className="heritageParagraph">
                The journey began in the heart of Sambhal, where generations of
                artisans have been perfecting horn and bone work to create
                eternal treasures.
              </p>
              <p className="heritageParagraph">
                Dreamy Designs, inspired by this heritage, continues the legacy
                of our ancestors, preserving traditional techniques while
                embracing modern innovation.
              </p>
            </div>
            <div className="heritageStats">
              <div className="statItem">
                <div className="statNumber">3+</div>
                <div className="statLabel">Generations</div>
              </div>
              <div className="statItem">
                <div className="statNumber">45+</div>
                <div className="statLabel">Years Experience</div>
              </div>
              <div className="statItem">
                <div className="statNumber">50+</div>
                <div className="statLabel">Skilled Artisans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="craftsmanship sectionBorder">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Craftsmanship</h2>
            <p className="sectionSubtitle">Excellence in Every Detail</p>
          </div>
          <div className="craftsmanshipContent">
            <div className="craftsmanshipImage">
              <img
                src={craftsmanshipImage}
                alt="Artisan at Work"
                className="imageContent"
                onError={(e) => {
                  e.target.style.display = "none";
                  const placeholder = document.createElement("div");
                  placeholder.className = "imagePlaceholder";
                  placeholder.innerHTML =
                    '<span class="imageText">Artisan at Work</span>';
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
            </div>
            <div className="craftsmanshipText">
              <p className="craftsmanshipParagraph">
                Every piece at Dreamy Designs is carefully made by skilled
                artisans, which guarantees a high level of quality and attention
                to details.
              </p>
              <p className="craftsmanshipParagraph">
                From Viking horns to intricate horn jewelry, each creation is
                made with a commitment to excellence that spans generations.
              </p>
              <ul className="craftsmanshipList">
                <li>Hand-selected materials</li>
                <li>Traditional carving techniques</li>
                <li>Meticulous finishing</li>
                <li>Quality inspection at every stage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="products sectionBorder">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Product Categories</h2>
            <p className="sectionSubtitle">Explore our extensive collection</p>
          </div>
          <div className="productGrid">
            {productCategories.map((category) => (
              <div key={category.id} className="productCard">
                <h3 className="productTitle">{category.title}</h3>
                <p className="productDescription">{category.description}</p>
                <button className="productButton">
                  View Collection <span className="buttonArrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment sectionBorder">
        <div className="container">
          <div className="commitmentContent">
            <div className="commitmentText">
              <h2 className="sectionTitle">Our Commitment</h2>
              <h3 className="commitmentSubtitle">Experience The Difference</h3>

              <p className="commitmentParagraph">
                We have a commitment to sustainability and ethics at Dreamy
                Designs. Our products are made from ethically procured horn and
                bone to ensure minimal environmental impact and support local
                communities.
              </p>

              <div className="commitmentPoints">
                {commitmentPoints.map((point, index) => (
                  <div key={index} className="commitmentPoint">
                    <span className="checkmark">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="commitmentImage">
              <img
                src={commitmentImage}
                alt="Sustainable Crafting"
                className="imageContent"
                onError={(e) => {
                  e.target.style.display = "none";
                  const placeholder = document.createElement("div");
                  placeholder.className = "imagePlaceholder";
                  placeholder.innerHTML =
                    '<span class="imageText">Sustainable Crafting</span>';
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="leadership sectionBorder">
        <div className="container">
          <div className="quoteContent">
            <div className="quoteIcon">"</div>
            <p className="quoteText">
              True Prosperity in Business Comes From Sincerity, Fairness, And
              Service To Others. Let Your Work Reflect The Values Of Kindness,
              Honesty, And Respect.
            </p>
            <div className="quoteAuthor">
              <div className="authorName">Mr. Abdulrehman Farooqui</div>
              <div className="authorTitle">Managing Partner</div>
            </div>
            <div className="cornerAccentBottomLeft"></div>
            <div className="cornerAccentBottomRight"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta sectionBorder">
        <div className="container">
          <div className="ctaContent">
            <h2 className="ctaTitle">Experience Craftsmanship Firsthand</h2>
            <p className="ctaText">
              Each piece tells a story of tradition, heritage, and artistry,
              making it a timeless addition to any collection.
            </p>
            <div className="ctaButtons">
              <button className="primaryButton">
                View Full Collection <span className="buttonArrow">→</span>
              </button>
              <button className="secondaryButton">Request Custom Quote</button>
            </div>
            <p className="ctaNote">
              Visit our collection today and experience the magic of
              craftsmanship firsthand.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornCraftersAbout;