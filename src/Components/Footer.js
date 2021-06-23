import React from 'react';

const Footer = () => 
    <div className="row p-0 justify-content">
        <div className="col-12" style={{ background: "cadetblue"}}>
        <div className="footer-copyright text-center py-3 text-white">© 2021 
            <a 
                href="https://www.instagram.com/nambersei"
                style={{ textDecoration: "none", color: "white"}}
                > 
                {" "} Made by <b> Rodrigo Garcia </b>
            </a>
        </div>
        </div>
    </div>;

export default Footer;