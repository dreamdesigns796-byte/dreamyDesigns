// src/screens/About/HornCraftersAbout.jsx
import React, { useEffect } from "react";
import "./HornCraftersAbout.css";
import { useLocation } from "react-router-dom";

// Import images from assets folder
import heroImage from "../assets/images/aboutbg.jpg";
import missionImage from "../assets/images/AboutBackGround.jpg";
import craftsmanshipImage from "../assets/images/craftsmanshipImage.png";
import commitmentImage from "../assets/images/aboutCommunity.png";

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
                Where old traditions meet quality craftsmanship. We create
                sustainable, handcrafted products that celebrate artistry,
                heritage, and responsible living.
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
                Welcome to Dreamy Designs — where sustainability meets artistry.
                Founded in 2016, we began our journey by serving the Indian market
                and later expanded successfully into international exports.
              </p>
              <p className="missionDetail">
                Based in Sambhal, Uttar Pradesh, India, we are a major exporter of
                high-quality handcrafted materials, built on innovation,
                cultural respect, and environmental responsibility.
              </p>
            </div>
            <div className="missionImage">
              <img
                src={missionImage}
                alt="Craftsmanship in Action"
                className="imageContent"
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
                Sambhal, Uttar Pradesh, is globally known for its centuries-old
                tradition of horn and bone craftsmanship, forming the foundation
                of Dreamy Designs.
              </p>
              <p className="heritageParagraph">
                Our artisans use techniques passed down through generations,
                preserving cultural knowledge while adapting to modern design
                needs.
              </p>
              <p className="heritageParagraph">
                Since 2016, Dreamy Designs has continued this legacy by blending
                tradition, innovation, and sustainability into every creation.
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
              />
            </div>
            <div className="craftsmanshipText">
              <p className="craftsmanshipParagraph">
                Every piece at Dreamy Designs is handcrafted by skilled artisans
                who bring patience, precision, and pride to their work.
              </p>
              <p className="craftsmanshipParagraph">
                From raw materials to finished products, each creation reflects
                timeless design, traditional techniques, and uncompromising
                quality.
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

      {/* Commitment Section */}
      <section className="commitment sectionBorder">
        <div className="container">
          <div className="commitmentContent">
            <div className="commitmentText">
              <h2 className="sectionTitle">Our Commitment</h2>
              <h3 className="commitmentSubtitle">Experience The Difference</h3>
              <p className="commitmentParagraph">
                At Dreamy Designs, we transform leftover materials from our main
                production into beautiful, unique handicrafts. Our commitment is
                rooted in sustainability, ethical sourcing, and respect for
                artisan communities.
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
              True craftsmanship is not only about creating beautiful products,
              but about honoring people, tradition, and the planet.
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
              Each creation tells a story of skilled hands, sustainable choices,
              and a heritage that continues to inspire modern living.
            </p>
            <div className="ctaButtons">
              <button className="primaryButton">
                View Full Collection <span className="buttonArrow">→</span>
              </button>
              <button className="secondaryButton">Request Custom Quote</button>
            </div>
            <p className="ctaNote">
              Visit our collection today and experience the magic of true
              craftsmanship.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HornCraftersAbout;
