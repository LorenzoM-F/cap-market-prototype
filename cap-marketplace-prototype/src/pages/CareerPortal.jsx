import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Footer from "../components/Footer";
import '../css/OnlineStores.css';

function CareerPortal() {
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
                <h1>Career Portal</h1>
            </div>

            {/* Options */}
            <div className="marketplace-options">
                <div className="option-card">
                    <div className="icon-container4">
                        <i className="fas fa-book"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title blue">Find Jobs Now</h3>
                        <p className="option-description">View available careers with our Business Banking Clients</p>
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
                        <h3 className="option-title dark-blue">Market Yourself</h3>
                        <p className="option-description">
                            Post your CV for our Business Banking Clients to see
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
                        <h3 className="option-title grey">Learn More</h3>
                        <p className="option-description">Find out more about our focus on business growth</p>
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

export default CareerPortal;
