import React from 'react';
import Menu  from "./Menu";
import Logo  from "./Logo";

const Header = () => {
    const path = window.location.pathname;
    const auth = path.includes("login") || path.includes("register");
    return !auth 
        ? <Menu />
        : <Logo />
};

export default Header;