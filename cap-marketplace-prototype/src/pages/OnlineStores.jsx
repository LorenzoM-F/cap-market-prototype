import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Footer from "../components/Footer";
import '../css/OnlineStores.css';

function OnlineStores() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleBackClick = () => {
        navigate("/marketplace"); // Navigate to the marketplace route
    };

    return (
        <div className="marketplace-container">
            {/* Back Button */}
            <button className="back-button" onClick={handleBackClick}>
                <i className="fas fa-arrow-left"></i>
            </button>

            {/* Header */}
            <div className="marketplace-header">
                <h1>Online Stores</h1>
            </div>
            <div className="searchbar">
                <span>Search for products and services: </span>
                <input
                    type="text"
                    placeholder="search for products and services..."
                    className="search-input"
                />
            </div>

            {/* Options */}
            <div className="marketplace-options">
                <div className="option-card">
                    <div className="icon-container4">
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title blue">View All Business</h3>
                        <p className="option-description">Will all our amazing Online Business Banking Clients</p>
                    </div>
                    <div className="badge-container">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div className="option-card">
                    <div className="icon-container4">
                        <i className="fas fa-gift"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title dark-blue">Trending Products</h3>
                        <p className="option-description">
                            View products that other people are snatching up!
                        </p>
                    </div>
                    <div className="badge-container">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div className="option-card">
                    <div className="icon-container4">
                        <i className="fas fa-comments"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title grey">Trending Services</h3>
                        <p className="option-description">View top rated services that make your life better</p>
                    </div>
                    <div className="badge-container">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div className="option-card">
                    <div className="icon-container4">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title red">Search Results</h3>
                        <p className="option-description">Search results will generate below here...</p>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <Footer />
        </div>
    );
}

export default OnlineStores;
