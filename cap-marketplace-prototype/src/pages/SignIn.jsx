import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignIn.css";

function SignIn() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/marketplace");
    };

    return (
        <div className="signin-container">
            <div className="header-tabs">
                <button className="tab active">Personal</button>
                <button className="tab">Business</button>
            </div>
            <h1 className="hello-text">hello</h1>
            <div className="action-buttons">
                <button className="action-button">
                    <i className="fas fa-user icon"></i>
                    <span>Pay beneficiary</span>
                </button>
                <button className="action-button">
                    <i className="fas fa-bolt icon"></i>
                    <span>Buy electricity</span>
                </button>
                <button className="action-button">
                    <i className="fas fa-mobile-alt icon"></i>
                    <span>Buy prepaid mobile</span>
                </button>
                <button className="action-button">
                    <i className="fas fa-exchange-alt icon"></i>
                    <span>Transfer money</span>
                </button>
                <button className="action-button">
                    <i className="fas fa-link icon"></i>
                    <span>Pay me</span>
                </button>
                <button className="action-button">
                    <i className="fas fa-shopping-cart icon"></i>
                    <span>Marketplace</span>
                </button>
            </div>
            <button className="signin-button" onClick={handleSignIn}>
                Sign In
            </button>
            <div className="scan-to-pay">
                <div className="qr-icon">
                    <i className="fas fa-qrcode"></i>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
