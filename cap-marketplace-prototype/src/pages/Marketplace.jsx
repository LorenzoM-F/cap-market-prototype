import React from "react";
import "../css/Marketplace.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Marketplace() {
    const navigate = useNavigate();

    const navigateToOnlineStores = () => {
        navigate("/onlineStores");
    };

    const navigateToStoreLocator = () => {
        navigate("/storeLocator");
    };

    const navigateToCareerPortal = () => {
        navigate("/careerPortal");
    };

    const handleSignOut = () => {
        navigate("/");
    };

    return (
        <div className="marketplace-container">
            <button className="back-button" onClick={handleSignOut}>
                <span>Sign out</span>
            </button>
            {/* Header */}
            <div className="marketplace-header">
                <h1>Marketplace</h1>
            </div>

            {/* Options */}
            <div className="marketplace-options">
                <div className="option-card" onClick={navigateToOnlineStores}>
                    <div className="icon-container">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title blue">Online Stores</h3>
                        <p className="option-description">View our Business Clients’ Products</p>
                    </div>
                    <div className="badge-container">
                        <span className="new-badge">New</span>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div className="option-card" onClick={navigateToStoreLocator}>
                    <div className="icon-container2">
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title dark-blue">Locate our Businesses</h3>
                        <p className="option-description">
                            See fantastic products and services in your area!
                        </p>
                    </div>
                    <div className="badge-container">
                        <span className="new-badge">New</span>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div className="option-card" onClick={navigateToCareerPortal}>
                    <div className="icon-container3">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title grey">Career Portal</h3>
                        <p className="option-description">Are you looking for a career opportunity?</p>
                    </div>
                    <div className="badge-container">
                        <span className="new-badge">New</span>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>



            {/* Bottom Navigation */}
            <Footer />
        </div>
    );
}

export default Marketplace;
