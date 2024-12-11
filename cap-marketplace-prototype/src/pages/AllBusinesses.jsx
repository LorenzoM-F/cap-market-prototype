import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Footer from "../components/Footer";
import '../css/AllBusinesses.css';
import businesses from "../businesses.json";
import verified from '../assets/verified.png';

function AllBusinesses() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleBackClick = () => {
        navigate("/onlineStores"); // Navigate to the marketplace route
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

            <div className="business-options">
                <div className="option-card-header">
                    <div className="icon-container6">
                        <i className="fa fa-th-large"></i>
                    </div>
                    <div className="option-content">
                        <h3 className="option-title blue-new">All Businesses</h3>
                    </div>
                </div>
            </div>

            {/* Options */}
            <div className="business-options2">
                {businesses.map((business, index) => (
                    <div className="option-card-business" key={index}>
                        <div className="icon-container5">
                            {business.title}
                        </div>
                        <div className="option-content">
                            <h3 className="option-title black">{business.name}</h3>
                            <p className="option-description">{business.description}</p>
                        </div>
                        <div className="verified-container">
                            <img src={verified} alt="Verified" className="verified-icon" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <Footer />
        </div>
    );
}

export default AllBusinesses;
