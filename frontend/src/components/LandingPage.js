// src/components/LandingPage.js
import React from "react";
import "../CSS/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to the Community Recipe Sharing Platform</h1>
        <p className="intro">
          A platform where food enthusiasts around the world come together to
          share, discover, and rate recipes. Whether you're a home cook, a
          professional chef, or someone who loves to explore new cuisines, this
          is your community!
        </p>
        <Link to="/profile" className="cta-button">
          Explore Profiles
        </Link>
      </header>
      <section className="features-grid">
        <div className="feature-card">
          <h2>Share Your Recipes</h2>
          <p>
            Easily share your favorite recipes with the community. Upload
            images, write descriptions, and share step-by-step instructions.
          </p>
        </div>
        <div className="feature-card">
          <h2>Discover New Dishes</h2>
          <p>
            Explore a vast collection of recipes from different cultures and
            cuisines. Whether you're looking for breakfast ideas or dinner
            inspirations, we've got you covered.
          </p>
        </div>
        <div className="feature-card">
          <h2>Rate and Comment</h2>
          <p>
            Tried a recipe? Rate it and leave a comment. Help others discover
            the best dishes and connect with other food lovers.
          </p>
        </div>
        <div className="feature-card">
          <h2>Follow Your Favorites</h2>
          <p>
            Keep track of your favorite chefs and food bloggers by following
            their profiles. Get notified whenever they post a new recipe.
          </p>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Users Are Saying</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "This platform has revolutionized the way I cook. I’ve found so
              many amazing recipes here!"
            </p>
            <h4>- Jane Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "As a professional chef, I love sharing my creations with the
              community and getting feedback."
            </p>
            <h4>- John Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The variety of recipes on this platform is incredible. There's
              something for everyone."
            </p>
            <h4>- Sarah Lee</h4>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <p>Join our community today and start your culinary journey!</p>
        <p>&copy; 2024 Community Recipe Sharing Platform</p>
      </footer>
    </div>
  );
};

export default LandingPage;
