import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer noto-sans-thai-looped-extrabold">
            <span className="copyright">©</span> {year} Fork and Flavor
        </footer>
    );
}

export default Footer;
