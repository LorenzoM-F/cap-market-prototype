import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Footer from "../components/Footer";
import '../css/OnlineStores.css';

function StoreLocator() {
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
                <h1>Store Locator</h1>
            </div>
            <div className="searchbar">
                <span>Search for stores: </span>
                <input
                    type="text"
                    placeholder="search for stores..."
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
                        <h3 className="option-title blue">Businesses Near You</h3>
                        <p className="option-description">Support our amazing Business Banking Clients near you</p>
                    </div>
                    <div className="badge-container">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <Footer />
        </div>
    );
}

export default StoreLocator;
