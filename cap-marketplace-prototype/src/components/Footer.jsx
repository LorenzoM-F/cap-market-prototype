import React from "react";
import '../css/Footer.css';

function Footer() {
    return (
        <div className="bottom-navigation">
            <div className="nav-item">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-credit-card"></i>
                <span>Cards</span>
            </div>
            <div className="nav-item active">
                <i className="fas fa-sync-alt"></i>
                <span>Transact</span>
                <span className="new-badge2">New</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-comments"></i>
                <span>Messages</span>
                <span className="new-badge2">New</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-store"></i>
                <span>Marketplace</span>
            </div>
        </div>
    );
}

export default Footer;
