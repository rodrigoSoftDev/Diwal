import React from 'react';
import "./Logo.css";

const Logo = () => 
    <div className="row justify-content">
         <div className="col-12" style={{ background: "cadetblue" }}>
            <div className="logo-container">
                <div className="login-logo-text"> Diwal </div>  
                <img src="/wallet.png" alt="wallet" className="login-logo" />
            </div>  
        </div>
    </div>;

export default Logo;